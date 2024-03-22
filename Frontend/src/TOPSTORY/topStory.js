import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Topstory() {
	return (
		<div>
			<div className="topstory_background">
				{/* <div className="topstory_horizotal_line"></div> */}
				<hr className="topstory_horizotal_line" />
				{/* <div className="topstory_horizotal_line_small"></div> */}
				<div className="topstory_wrappe">
					<h1 className="title_top">Top Stories</h1>
					<div className="top_images_content">
						<div className="topstory_singles_content">
							<Link to="" className="top_link">
								<div className="overlay">
									<FaAngleRight className="topstory_icon" />{" "}
								</div>
								<div className="image_hover ">
									<img
										src="/images/topstoryImage/story1.jpg"
										className="topstory_img"
										alt=""
									/>
								</div>
								<h3>
									Nourishing Dreams: UM Student Foodbank helps hundreds of
									students every month
								</h3>
							</Link>
						</div>
						<div className="topstory_singles_content same_height ">
							<Link to="" className="top_link">
								<div className="overlay ">
									<FaAngleRight className="topstory_icon" />{" "}
								</div>
								<div className="image_hover">
									<img
										src="/images/topstoryImage/story2.jpg"
										className="topstory_img"
										alt=""
									/>
								</div>
								<h3>Meet our newest Rhodes Scholar Joel Nichols</h3>
							</Link>
						</div>
						<div className="topstory_singles_content ">
							<Link to="" className="top_link">
								<div className="overlay ">
									<FaAngleRight className="topstory_icon" />{" "}
								</div>
								<div className="image_hover">
									<img
										src="/images/topstoryImage/story3.jpg"
										className="topstory_img"
										alt=""
									/>
								</div>
								<h3>
									Ted Barkwell Memorial Fund is lowering barriers to sport
								</h3>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Topstory;
