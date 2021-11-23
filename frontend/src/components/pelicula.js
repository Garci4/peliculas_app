import React from "react";
import "./../styles/pelicula.css";
import testPoster from "../assets/asd.jpg";

const Pelicula = (pelicula, poster) => {
	return (
		<div className="col-md-4">
			<div className="card animated fadeInUp bg-dark text-center text-light">
				<img src={testPoster} alt={pelicula.nombre}></img>
				<div className="card-body">
					<p className="card-title">
						{pelicula.pelicula.nombre} ({pelicula.pelicula.anio})
					</p>

					<p className="card-text text-secondary">
						{pelicula.pelicula.director}
					</p>
					<p className="card-text text-secondary">
						"{pelicula.pelicula.descripcion}"
					</p>
				</div>
			</div>
		</div>
	);
};

export default Pelicula;
