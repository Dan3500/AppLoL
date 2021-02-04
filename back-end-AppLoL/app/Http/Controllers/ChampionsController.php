<?php

namespace App\Http\Controllers;
use App\Models\Riot_API;
use ArrayObject;
use Http;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Symfony\Component\VarDumper\VarDumper;

class ChampionsController extends Controller
{
    public function showAll($show){
        $api=new Riot_API();
        $url=$api->getDataUrl()."/11.2.1/data/es_ES/champion.json";

        $client=new Client();

        $response=$client->request("GET",$url,['verify' => false,
            'headers' => [
                'X-Riot-Token' => $api->getToken()
            ]
        ]);
        $respuesta=$response->getBody()->getContents();

        $respuesta=json_decode($respuesta);
        if ($show!="Fill"){
            $champList=[];
            foreach($respuesta->data as $key=>$champ){
                for($i=0;$i<count($champ->tags);$i++){
                    if ($champ->tags[$i]==$show){
                       array_push($champList,[$key=>$champ]);
                    }
                }
            }
            $respuesta->data=$champList;
        }
        $respuesta=json_encode($respuesta);

        return $respuesta;
    }

    public function showChamp($champName){
        $api=new Riot_API();
        $url=$api->getDataUrl()."/11.2.1/data/es_ES/champion/$champName.json";

        $client=new Client();

        $response=$client->request("GET",$url,['verify' => false,
            'headers' => [
                'X-Riot-Token' => $api->getToken()
            ]
        ]);

        return $response->getBody()->getContents();
    }
}
