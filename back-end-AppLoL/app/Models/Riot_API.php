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
        $this->token="";
    }

    function getUrl(){
        return $this->url;
    }

    function getToken(){
        return $this->token;
    }

}
