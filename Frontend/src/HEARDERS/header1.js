import React from "react";
import { Link } from "react-router-dom";

function Header1() {
	return (
		<div>
			<nav className="header1_background">
				<p className="header1_p">
					The University of Manitoba campuses are located on original lands of
					Anishinaabeg, Cree, Ojibwe-Cree, Dakota, and Dene peoples, and on the
					National Homeland of the Red River Métis.
					<Link to="/" className="header1_link">
						More
					</Link>
				</p>
			</nav>
		</div>
	);
}

export default Header1;
