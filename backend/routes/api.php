<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/peliculas', 'App\Http\Controllers\ApiController@get_peliculas'); //obtengo las peliculas
Route::get('/peliculas/{anio}', 'App\Http\Controllers\ApiController@get_peliculas_x_anio'); //obtengo las peliculas por anio
Route::get('/pelicula/{nombre}', 'App\Http\Controllers\ApiController@get_info'); //obtengo la info de la pelicula por el nombre
Route::get('/pelicula/{nombre}/desc', 'App\Http\Controllers\ApiController@get_descripcion'); //obtengo la descripcion de la pelicula por el nombre