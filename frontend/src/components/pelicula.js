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
			<div className="col-md-4" style={{ padding: 10 }}>
				<div className="card animated fadeInUp bg-dark text-left text-light">
					<img
						src={poster}
						alt={testPoster}
						style={{
							display: "block",
							"max-width": "100%",
							height: "auto",
							"max-height": "550px",
						}}
					></img>
					<div className="card-body">
						<p
							className="card-title"
							style={{
								color: "#090c12",
								"font-weight": "bold",
								"font-size": "xx-large",
							}}
						>
							{pelicula.nombre}{" "}
							<p
								className="card-title"
								style={{
									color: "#090c12",
									"font-weight": "bold",
									"font-size": "large",
								}}
							>
								({pelicula.anio})
							</p>
						</p>
						<p
							className="card-text"
							style={{
								color: "#13181f",
								"font-weight": "bold",
								"font-size": "medium",
							}}
						>
							{pelicula.director}
						</p>

						<p
							className="card-text"
							style={{
								color: "#060b12",
								"font-weight": "light",
								"font-size": "medium",
							}}
						>
							{pelicula.descripcion}
						</p>
					</div>
				</div>
			</div>
		);
	}
}
