import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

function Hero1() {
	return (
		<div>
			<div className="hero1_background">
				<Link to="/" className="">
					<div className="hero1_link_content">
						<div className=" hero1_link">
							{/* <div className="vertical_line"></div> */}
							<div className="content_link">
								<h1 className="detail1">
									Celebrating UM students
								</h1>
								<p className="detail2">
									Looking back on a year of research excellence, stellar performances in sports and academic achievement.
								</p>
								<FaAngleRight className="detail_icon" />
							</div>
						</div>
					</div>
				</Link>
				<div className="hero_image_block">
					<img src="images/heroImage/hero2.jpg" alt="" className="hero1_image" />
				</div>
			</div>
		</div>
	);
}

export default Hero1;
