/* eslint-disable no-unused-vars */
import React, { Fragment } from "react";
import Navbar from "./components/navbar";
import PeliculasGrid from "./components/peliculasGrid";

const App = () => {
	return (
		<Fragment>
			<Navbar></Navbar>
			<main className="">
				<div className="container">
					<PeliculasGrid></PeliculasGrid>
				</div>
			</main>
		</Fragment>
	);
};

export default App;
