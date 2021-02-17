<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Riot_API extends Model
{
    private $url;
    private $token;
    private $ddragon;

    function __construct()
    {
        $this->url="https://euw1.api.riotgames.com";
        //************************************************
        $this->token="RGAPI-0b6d6cb6-2854-4179-b30f-5361c57c20d2";
        $this->ddragon="http://ddragon.leagueoflegends.com/cdn";
    }

    function getUrl(){
        return $this->url;
    }

    function getDataUrl(){
        return $this->ddragon;
    }

    function getToken(){
        return $this->token;
    }

}
