<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pelicula;

/**
*  @OA\Info(
*      description="",
*      version="1.0.0",
*      title="API de Peliculas",
* )
*/

/**
  *@OA\SecurityScheme(
      *securityScheme="bearerAuth",type="http",scheme="bearer", bearerFormat="JWT")
 */

class ApiController extends Controller
{
    //Swagger anotations
    /**
     * @OA\Get(
     *    path="/api/peliculas",
     *     tags={"Peliculas"},
     *     summary="Peliculas",
     *     operationId="get_peliculas",
     * 
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\MediaType(
     *             mediaType="application/json",
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid request"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="not found"
     *     ),
     * ) 
     */

    /**
     * Returns all the existing movies.
     *
     * @return \Illuminate\Http\Response
     */
    public function get_peliculas()
    {
        $peliculas = Pelicula::all();
        return $peliculas;
    }

    /**
     * @OA\Get(
     *    path="/api/peliculas/{anio}",
     *     tags={"Peliculas por anio"},
     *     summary="Peliculas por anio",
     *     operationId="get_peliculas_x_anio",
     * 
     *     @OA\Parameter(
     *         name="anio",
     *         in="path",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ), 
     * 
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\MediaType(
     *             mediaType="application/json",
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid request"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="not found"
     *     ),
     * ) 
     */

    /**
     * Returns all the movies from a given year.
     * 
     * @param  $anio year of the movie
     * @return \Illuminate\Http\Response
     */
    public function get_peliculas_x_anio(Int $anio)
    {
        $peliculas = Pelicula::where('anio', $anio)->get();
        return $peliculas;
    }

    /**
     * @OA\Get(
     *    path="/api/pelicula/{nombre}",
     *     tags={"Info de pelicula"},
     *     summary="Informacion de una pelicula",
     *     operationId="get_info",
     * 
     *     @OA\Parameter(
     *         name="nombre",
     *         in="path",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ), 
     * 
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\MediaType(
     *             mediaType="application/json",
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid request"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="not found"
     *     ),
     * ) 
     */

    /**
     * Returns all the info from a given movie.
     * 
     * @param  $nombre name of the movie
     * @return \Illuminate\Http\Response
     */
    public function get_info(string $nombre)
    {
        $info = Pelicula::where('nombre', $nombre)->get();
        return $info;
    }

    /**
     * @OA\Get(
     *    path="/api/pelicula/{nombre}/desc",
     *     tags={"Descripcion de una pelicula"},
     *     summary="Descripcion de una pelicula",
     *     operationId="get_descripcion",
     * 
     *     @OA\Parameter(
     *         name="nombre",
     *         in="path",
     *         required=true,
     *         @OA\Schema(
     *             type="string"
     *         )
     *     ), 
     * 
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\MediaType(
     *             mediaType="application/json",
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Unauthorized"
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid request"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="not found"
     *     ),
     * ) 
     */

    /**
     * Returns the descripcion from a given movie.
     * 
     * @param  $nombre name of the movie
     * @return \Illuminate\Http\Response
     */
    public function get_descripcion(string $nombre)
    {
        $d = Pelicula::select('descripcion')->where('nombre', $nombre)->get();
        return $d;
    }
}
