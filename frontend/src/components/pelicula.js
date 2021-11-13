import React from "react";
import "./../styles/pelicula.css";

const OMDB_API = "http://www.omdbapi.com/?i=tt3896198&apikey=f9c16951";

async function fetchPoster(nombre) {
	const res = await fetch(`${OMDB_API}&s=${nombre}`);
	const resJSON = await res.json();
	console.log(resJSON);
	const poster = resJSON.Search.poster;
	console.log(poster);
	return poster;
}

const Pelicula = ({ pelicula }) => {
	return (
		<div className="col-md-4">
			<div className="pelicula">
				<div className="pelicula-body">
					<img
						src={`${fetchPoster(pelicula.nombre)}`}
						alt="asd"
					></img>
					<p>{pelicula.nombre}</p>
					<button className="more_info-btn">mas</button>
				</div>
			</div>
		</div>
	);
};

export default Pelicula;
