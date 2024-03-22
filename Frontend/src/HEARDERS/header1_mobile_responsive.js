import React from "react";
import { Link } from "react-router-dom";

function Header1_Mobile_Responsive() {
	return (
		<div>
			<nav className=" header1_bacground_mobile_responsive">
				<p className="header1_p_mob_res">
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

export default Header1_Mobile_Responsive;
