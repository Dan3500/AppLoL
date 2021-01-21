<?php

namespace App\Http\Controllers;

use App\Models\Riot_API;
use Illuminate\Http\Request;
use Http;
use GuzzleHttp\Client;

class PruebasController extends Controller
{

    public function index($summoner){
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
    
}