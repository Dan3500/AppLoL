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

use App\Http\Controllers\PruebasController;
use App\Http\Controllers\ChampionsController;

Route::get('/', function () {
    return view('welcome');
});

//RUTA DE PRUEBA
Route::get("/prueba/{summoner}",[PruebasController::class,'index']);

Route::get("/champions",[ChampionsController::class,'showAll']);
