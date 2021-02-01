<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use App\Http\Controllers\SummonerController;
use App\Http\Controllers\ChampionsController;

Route::get('/', function () {
    return view('welcome');
});

//RUTAS DE INVOCADOR
Route::get("/summoner/{summoner}",[SummonerController::class,'showInfoSummoner']);//Obtener info basica del invocador

Route::get("/matches/{summonerId}",[SummonerController::class,'showSummonerMatches']);//Obtener partidas de un invocador

Route::get("/leagues/{summonerId}",[SummonerController::class,'showSummonerLeague']);//Obtener partidas de un invocador

//RUTAS DE CHAMPIONS
Route::get("/champions",[ChampionsController::class,'showAll']);

Route::get("/champion/{champName}",[ChampionsController::class,'showChamp']);
