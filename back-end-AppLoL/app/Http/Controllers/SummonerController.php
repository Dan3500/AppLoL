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
        $url=$api->getUrl()."/lol/match/v4/matchlists/by-account/$summonerId";

        $client=new Client();

        $response=$client->request("GET",$url,['verify' => false,
            'headers' => [
                'X-Riot-Token' => $api->getToken()
            ]
        ]);

        return $response->getBody()->getContents();
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
