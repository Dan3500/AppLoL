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
        $this->token="RGAPI-3d10abfa-4b78-4b4e-8cf1-98d57ab1e39a";
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
