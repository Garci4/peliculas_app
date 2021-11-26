import React from "react";
import logo from "../assets/icon.jpg";

const Navbar = () => {
	return (
		<nav
			className="navbar navbar-dark border-bottom border-white navbar-expand-lg"
			style={{ "background-color": "#364461" }}
		>
			<div className="container">
				<div className="navbar-brand row">
					<a className="navbar-brand" href="/">
						<span>
							<img
								src={logo}
								alt="WatchMe"
								style={{
									"max-width": "7.5%",
									height: "auto",
									"padding-right": 10,
								}}
							></img>
						</span>
						WatchMe
					</a>
				</div>
				<div>
					<span className="text text-white">
						By
						<a
							href="https://www.linkedin.com/in/garci4"
							target="_blanck"
							style={{ padding: "5px" }}
						>
							Garci4
						</a>
					</span>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
