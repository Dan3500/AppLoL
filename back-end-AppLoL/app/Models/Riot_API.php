<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Riot_API extends Model
{
    private $url;
    private $token;

    function __construct()
    {
        $this->url="https://euw1.api.riotgames.com";
        $this->token="RGAPI-6c21dcee-f52a-4a7a-8a56-702e037f8c40";
    }

    function getUrl(){
        return $this->url;
    }

    function getToken(){
        return $this->token;
    }

}
