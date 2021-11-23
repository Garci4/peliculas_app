import React, { Component, Fragment } from "react";
import Pelicula from "./pelicula";

const OMDB_API = "http://www.omdbapi.com/?i=tt3896198&apikey=f9c16951";
const PELICULAS_API = "http://127.0.0.1:8000/api/peliculas";
const PELICULAS_API2 = "http://127.0.0.1:8000/api/pelicula";

class PeliculasGrid extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			dataJson: [],
			toSearch: "",
			error: "",
		};
	}

	async componentDidMount() {
		const res = await fetch(PELICULAS_API);
		const resJSON = await res.json();
		this.setState({
			data: resJSON,
		});
		const poster = this.buildJson(this.state.data);
		this.setState({
			dataJson: poster,
		});
	}

	fetchPoster = async (nombre) => {
		const res = await fetch(`${OMDB_API}&s=${nombre}`);
		const resJSON = await res.json();
		const poster = await resJSON.Search[0].Poster;
		return poster;
	};

	buildJson = (data) => {
		const _datos = [];
		const dataJson = {};
		data.map((pelicula) => {
			const poster = this.fetchPoster(pelicula.nombre);
			_datos.push({
				pelicula: pelicula,
				poster: poster,
			});
			return _datos;
		});
		dataJson.movies = _datos;
		return _datos;
	};

	async handleFilterSubmit(e) {
		e.preventDefault();
		if (!this.state.toSearch) {
			return this.setState({
				error: "Escribe algo para buscar",
			});
		}
		const number = /^[0-9]+$/;
		const _data = [];
		if (this.state.toSearch.match(number)) {
			const resAnio = await fetch(
				`${PELICULAS_API}/${this.state.toSearch}`
			);
			const dataAnio = await resAnio.json();
			console.log(dataAnio);
			dataAnio.map((pelicula) => _data.push(pelicula));
		}
		const resNombre = await fetch(
			`${PELICULAS_API2}/${this.state.toSearch}`
		);
		const dataNombre = await resNombre.json();
		console.log(dataNombre);
		dataNombre.map((pelicula) => _data.push(pelicula));

		console.log(_data);

		if (_data.length === 0) {
			return this.setState({ error: "No hubo resultados" });
		}
		this.setState({
			data: _data,
			error: "",
			toSearch: "",
		});
	}

	render() {
		return (
			<Fragment>
				<div className="row">
					<div className="col-md-4 offset-md-4 p-4">
						<form onSubmit={(e) => this.handleFilterSubmit(e)}>
							<input
								type="text"
								className="form-control"
								placeholder="search"
								onChange={(e) =>
									this.setState({
										toSearch: e.target.value,
									})
								}
								value={this.state.toSearch}
								autoFocus
							/>
						</form>
						<p className="text-black">
							{this.state.error ? this.state.error : ""}
						</p>
					</div>
				</div>
				<div className="row pt-2 d-flex h-100">
					{this.state.data.map((pelicula) => {
						return (
							<Pelicula
								key={pelicula.id}
								pelicula={pelicula}
							></Pelicula>
						);
					})}
				</div>
			</Fragment>
		);
	}
}

export default PeliculasGrid;
