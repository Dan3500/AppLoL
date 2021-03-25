<?php

namespace App\Http\Controllers;

use App\Models\Riot_API;
use Illuminate\Http\Request;
use Http;
use GuzzleHttp\Client;

class SummonerController extends Controller
{
    public function showInfoSummoner($summoner){
        $summoner=trim($summoner);
        $api=new Riot_API();
        $url=$api->getUrl()."/lol/summoner/v4/summoners/by-name/$summoner";

        $client=new Client();

        $response=$client->request("GET",$url,['verify' => false,
            'headers' => [
                'X-Riot-Token' => $api->getToken()
            ]
        ]);

        return $response->getBody()->getContents();
    }

    public function showSummonerMatches($summonerId){
        $summonerId=trim($summonerId);
        $api=new Riot_API();
        $urlAPI=$api->getUrl()."/lol/match/v4/matchlists/by-account/$summonerId";

        $client=new Client();

        $season="SEASON 2021"; 

        //TODOS LOS DATOS DE TODAS LOS TIPOS DE COLAS
        $urlQueues="http://static.developer.riotgames.com/docs/lol/queues.json";
        $queues=$client->request("GET",$urlQueues,['verify' => false,
        'headers' => [
            'X-Riot-Token' => $api->getToken()
        ]
        ]);
        $queues=json_decode($queues->getBody()->getContents());

        //TODOS LOS DATOS DE TODOS LOS CAMPEONES
        $urlChampions="http://ddragon.leagueoflegends.com/cdn/11.6.1/data/es_ES/champion.json";
        $champions=$client->request("GET",$urlChampions,['verify' => false,
        'headers' => [
            'X-Riot-Token' => $api->getToken()
        ]
        ]);
        $champions=json_decode($champions->getBody()->getContents());

        //INFORMACION DE LAS PARTIDAS DEL JUGADOR
        $response=$client->request("GET",$urlAPI,['verify' => false,
            'headers' => [
                'X-Riot-Token' => $api->getToken()
            ]
        ]);

        $respuesta=json_decode($response->getBody()->getContents());

        $matchList=[];
        foreach($respuesta->matches as $keyMatch=>$match){//SE RECORREN TODAS LAS PARTIDAS DEL JUGADOR
            if ($keyMatch<=9){
                $matchArray=[];//Para cada partida, se recogeran datos especificos
                $champArray=[];
                //SE COMPROBARAN LOS DATOS DE LAS COLAS Y SE ESCOGERA LA INFORMACIÓN QUE CONCUERDE CON LA COLA DE LA PARTIDA
                foreach($queues as $key=>$queue){
                    if ($match->queue==$queue->queueId){
                        $matchArray["queue"]=$queue->description;
                        break;
                    }
                }
                
                //SE COMPROBARAN LOS DATOS LOS CAMPEONES Y SE ESCOGERA LA INFORMACIÓN QUE CONCUERDE CON EL CAMPEON USADO EN LA PARTIDA
                foreach($champions->data as $key=>$champion){
                    if ($match->champion==$champion->key){
                        $champArray["id"]=$champion->id;
                        $champArray["name"]=$champion->name;
                        $champArray["img"]="http://ddragon.leagueoflegends.com/cdn/11.6.1/img/champion/{$champion->id}.png";
                        break;
                    }
                }
    
                //SE ALMACENARAN LOS DATOS EN UN ARRAY PARA DEVOLVERLO DESPUES
                $matchArray["lane"]=$match->lane;
                $matchArray["time"]=$match->timestamp;
                $matchArray["gameId"]=$match->gameId;
                $matchArray["season"]=$season;
                $matchArray["champion"]=$champArray;
                $matchArray["stats"]=$this->showMatch($match->gameId,$summonerId);
                array_push($matchList,$matchArray);
            }else{
                break;
            }
        }
        json_encode($matchList);
        return $matchList;
    }

    public function showMatch($matchId,$summonerId=null){
        $api=new Riot_API();
        $url=$api->getUrl()."/lol/match/v4/matches/$matchId";

        $client=new Client();

        $response=$client->request("GET",$url,['verify' => false,
            'headers' => [
                'X-Riot-Token' => $api->getToken()
            ]
        ]);

        $response=json_decode($response->getBody()->getContents());

        if($summonerId!=null){
            $statsPlayer=[];
            $items=[];
            $infoGame=[];
            $respuesta=[];
            $infoGame["gameCreation"]=$response->gameCreation;
            $infoGame["gameDuration"]=$response->gameDuration;
            $jugadores=$response->participantIdentities;
            $participantes=$response->participants;
            foreach($jugadores as $key=>$jugador){
                if ($jugador->player->accountId==$summonerId){
                    foreach($participantes as $key=>$participante){
                        if ($jugador->participantId==$participante->participantId){
                            for($i=0;$i<=6;$i++){
                                $item="item".$i;
                                $items['item'.$i]=$participante->stats->$item;
                            }
                            $statsPlayer["kills"]=$participante->stats->kills;
                            $statsPlayer["deaths"]=$participante->stats->deaths;
                            $statsPlayer["assists"]=$participante->stats->assists;
                            $statsPlayer["lvl"]=$participante->stats->champLevel;
                            $statsPlayer["win"]=$participante->stats->win;
                            $statsPlayer["items"]=$items;
                            $statsPlayer["spell1"]=$participante->spell1Id;
                            $statsPlayer["spell2"]=$participante->spell2Id;
                            break;
                        } 
                    }
                    break;
                }
            }
            $respuesta["gameInfo"]=$infoGame;
            $respuesta["playerStats"]=$statsPlayer;
            return $respuesta;
        }
    }

    public function showSummonerLeague($summonerId){
        $summonerId=trim($summonerId);
        $api=new Riot_API();
        $url=$api->getUrl()."/lol/league/v4/entries/by-summoner/$summonerId";

        $client=new Client();

        $response=$client->request("GET",$url,['verify' => false,
            'headers' => [
                'X-Riot-Token' => $api->getToken()
            ]
        ]);

        return $response->getBody()->getContents();
    }
}
