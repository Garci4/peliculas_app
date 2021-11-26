import React, { Component } from "react";
import "./../styles/pelicula.css";
import testPoster from "../assets/asd.jpg";

const OMDB_API = "http://www.omdbapi.com/?i=tt3896198&apikey=f9c16951";

export default class asd extends Component {
	constructor() {
		super();
		this.state = {
			poster: "",
		};
	}

	fetchPoster = async (nombre) => {
		const res = await fetch(`${OMDB_API}&s=${nombre}`);
		const resJSON = await res.json();
		const poster = await resJSON.Search[0].Poster;
		this.setState({ poster: poster });
	};

	render() {
		const pelicula = this.props.pelicula;
		const poster = this.state.poster;
		if (poster === "") {
			this.fetchPoster(pelicula.nombre);
		}

		return (
			<div className="col-md-4">
				<div className="card animated fadeInUp bg-dark text-center text-light">
					<img src={poster} alt={testPoster}></img>
					<div className="card-body">
						<p className="card-title">
							{pelicula.nombre} ({pelicula.anio})
						</p>

						<p className="card-text text-secondary">
							{pelicula.director}
						</p>
						<p className="card-text text-secondary">
							"{pelicula.descripcion}"
						</p>
					</div>
				</div>
			</div>
		);
	}
}
