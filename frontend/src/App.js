/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PeliculasGrid from "./components/peliculasGrid";
import FiltroPorAnio from "./components/filtroPorAnio";

const App = () => {
	return (
		<div className="container">
			<h1>Peliculas</h1>
			<FiltroPorAnio></FiltroPorAnio>
			<PeliculasGrid></PeliculasGrid>
		</div>
	);
};

export default App;
