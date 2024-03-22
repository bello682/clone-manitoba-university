import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Umglance() {
	return (
		<div>
			<div className="umglance_background">
				<hr className="umglance_horizotal_line" />
				{/* <div className="umglance_horizotal_line_small"></div> */}
				<div className="umglance_wrappe">
					<h1 className="title_umglance">UM at a Glance</h1>
					<div className="umglance_images_content">
						<div className="umglance_singles_content">
							<Link to="" className="umglance_link">
								<div className="umglance_overlay">
									<FaAngleRight className="umglance_icon" />{" "}
								</div>
								<div className="image_hover_umglance ">
									<img
										src="/images/umglance/umglance1.jpg"
										className="umglance_img"
										alt=""
									/>
								</div>
								<h3>
								An operatic exploration of the heart of the Red River Métis
								</h3>
							</Link>
						</div>
						<div className="umglance_singles_content">
							<Link to="" className="umglance_link">
								<div className="umglance_overlay ">
									<FaAngleRight className="umglance_icon" />{" "}
								</div>
								<div className="image_hover_umglance">
									<img
										src="/images/umglance/umglance2.jpg"
										className="umglance_img"
										alt=""
									/>
								</div>
								<h3>Doors open on new facility at Carman research farm</h3>
							</Link>
						</div>
						<div className="umglance_singles_content">
							<Link to="" className="umglance_link">
								<div className="umglance_overlay ">
									<FaAngleRight className="umglance_icon" />{" "}
								</div>
								<div className="image_hover_umglance">
									<img
										src="/images/umglance/umglance3.jpg"
										className="umglance_img"
										alt=""
									/>
								</div>
								<h3>WFP: Riel acknowledgement called Reconciliation milestone</h3>
							</Link>
						</div>
						<div className="umglance_singles_content ">
							<Link to="" className="umglance_link">
								<div className="umglance_overlay ">
									<FaAngleRight className="umglance_icon" />{" "}
								</div>
								<div className="image_hover_umglance">
									<img
										src="/images/umglance/umglance4.jpg"
										className="umglance_img"
										alt=""
									/>
								</div>
								<h3>
								How gasoline can help engines get green
								</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* short key for highlighting the letter or words in visual studio code editor */}
		</div>
	);
}

export default Umglance;
