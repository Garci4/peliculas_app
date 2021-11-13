import React, { Component } from "react";

class FiltroPorAnio extends Component {
	render() {
		return (
			<div>
				<form>
					<label>filtrar por año</label>
					<input
						onChange={(event) => {
							console.log(event.target.value);
						}}
						placeholder="1992"
					></input>
				</form>
			</div>
		);
	}
}

export default FiltroPorAnio;
