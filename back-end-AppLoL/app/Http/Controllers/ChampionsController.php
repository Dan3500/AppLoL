<?php

namespace App\Http\Controllers;
use App\Models\Riot_API;
use Http;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class ChampionsController extends Controller
{
    public function showAll(){
        $api=new Riot_API();
        $url=$api->getDataUrl()."/11.1.1/data/es_ES/champion.json";

        $client=new Client();

        $response=$client->request("GET",$url,['verify' => false,
            'headers' => [
                'X-Riot-Token' => $api->getToken()
            ]
        ]);

        return $response->getBody()->getContents();
    }
    
}
