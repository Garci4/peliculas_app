import React, { Component } from "react";
import Pelicula from "./pelicula";

class PeliculasGrid extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	async componentDidMount() {
		const res = await fetch("http://127.0.0.1:8000/api/peliculas");
		const resJSON = await res.json();
		this.setState({
			data: resJSON,
		});
	}

	render() {
		return (
			<div className="row">
				{this.state.data.map((pelicula) => {
					return <Pelicula pelicula={pelicula}></Pelicula>;
				})}
			</div>
		);
	}
}

export default PeliculasGrid;
