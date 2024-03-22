import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import { Link } from "react-router-dom";

function Findpath() {
	return (
		<div>
			<div className="findpath_background">
				<hr className="findpath_horizotal_line" />
				{/* <div className="findpath_horizotal_line_small"></div> */}
				<div className="findpath_extended">
					<h1 className="title2_top">Find the path that’s right for you</h1>

					<div className="findpath_graduates_digitals">
						<div className="findpath_image_content">
							<div className="path_image_guide">
								<img
									src="/images/findpath/path1.jpg"
									alt=""
									className="path_image"
								/>
							</div>
							<div className="findpath_content">
								<Link to="#" className="findpath_link">
									<h2 className="findpath_h2">Undergraduate studies</h2>
									<p className="findpath_p">
										There are many program options available to you within our
										culturally rich and diverse community—whether you know the
										direction you want to go or are figuring out where your
										passion lies.
									</p>
									<FaAngleRight className="findpath_icon" />
								</Link>
							</div>
						</div>
						<div className="findpath_arrow_links">
							{/* <div className="vertical_line2"></div> */}
							<div className="findpath_u_l_all">
								<ul className="findpath_ul">
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											Digital viewbook
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											Program list
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											How to apply
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											Admission requirements
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											Tuition and fees
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											Attend an online information session
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											First year student resources
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="findpath_graduates_digitals">
						<div className="findpath_image_content">
							<div className="path_image_guide">
								<img
									src="/images/findpath/path2.jpg"
									alt=""
									className="path_image"
								/>
							</div>
							<div className="findpath_content">
								<Link to="#" className="findpath_link">
									<h2 className="findpath_h2">Graduate studies</h2>
									<p className="findpath_p">
										Graduate students are leading the way to discoveries that
										matter to Canadians. Challenge yourself, expand your
										horizons and continue your education in one of our many
										graduate programs.
									</p>
									<FaAngleRight className="findpath_icon" />
								</Link>
							</div>
						</div>
						<div className="findpath_arrow_links">
							{/* <div className="vertical_line21"></div> */}
							<div className="findpath_u_l_all">
								<ul className="findpath_ul">
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											Program list
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											How to apply
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											Admission requirements
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											Tuition and fees
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
									<li className="findpath_li">
										<Link to="#" className="findpath_single_link">
											Connect with us
											<span className="findpath_span">
												<FaArrowRight />
											</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="findpath_extended_education">
						<p> 
							<span className="findpath_span_title">Extended Education:</span> Take a step forward in your life
							and career. Gain new skills, keep learning, and prepare for the
							future with our flexible Extended Education programs and courses,
							including many online options.
						</p>
                        <button className="btn_findpath">Extended Education</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Findpath;
