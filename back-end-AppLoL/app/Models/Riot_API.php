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
        $this->token="RGAPI-4ff2b79d-ec21-49d9-9d79-5788ea60fade";
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
