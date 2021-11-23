import React, { Component } from "react";
import "./../styles/filtro.css";

import PeliculasGrid from "./peliculasGrid";

class FiltroPorAnio extends Component {
	constructor() {
		super();
		this.state = {};
	}

	filtrar() {
		console.log("-----", this.state.anio);
		return this.render(
			<PeliculasGrid anio={this.state.anio.value}></PeliculasGrid>
		);
	}

	render() {
		return (
			<div>
				<form>
					<label>filtrar por año</label>
					<input
						onChange={(event) => {
							this.setState({
								anio: event.target.value,
							});
						}}
						placeholder="ponga aquí un año"
					></input>
					<button onClick={() => this.filtrar()}>buscar</button>
				</form>
			</div>
		);
	}
}

export default FiltroPorAnio;
