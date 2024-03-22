import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
	return (
		<div>
			<div className="footer_background">
				<div className="footer_wrapper">
					<div className="footer_logo_links">
						<div className=" footer_logo ">
							<img
								src="/images/footer/logo.svg"
								alt=""
								className="footer_logo_img "
							/>
						</div>
						<div className="footer_ul_links">
							<ul className="footer_ul_link">
								<li className="footer_li">
									<Link to="" className="footer_link">
										Careers
									</Link>
								</li>
								<li className="footer_li">
									<Link to="" className="footer_link">
										Media
									</Link>
								</li>
								<li className="footer_li">
									<Link to="" className="footer_link">
										People search
									</Link>
								</li>
								<li className="footer_li">
									<Link to="" className="footer_link">
										Research experts
									</Link>
								</li>
								<li className="footer_li">
									<Link to="" className="footer_link">
										Accessibility
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer_button_socials_links">
						<div className="footer_h3_p_button">
							<h4>University of Manitoba</h4>
							<p>Winnipeg, Manitoba, Canada</p>
							<button className="footer_btn">Maps and directions</button>
						</div>
						<div className="footer_p_links_icons">
							<p>
								<Link to="" className="foot_p_l">1-800-432-1960 (North America)</Link>
							</p>
							<p>
								<Link to="" className="foot_p_l">Emergency: 204-474-9341</Link>
							</p>
							<p className="foot_pl_bold_p">
								<Link to="" className="foot_p_l foot_pl_bold">Emergency information</Link>
							</p>
							<div className="footer_icons_social_medials">
								<FaTwitter className="footer_social_medial_handle" />
								<FaFacebookF className="footer_social_medial_handle" />
								<FaInstagram className="footer_social_medial_handle" />
								<FaTiktok className="footer_social_medial_handle" />
								<FaYoutube className="footer_social_medial_handle" />
								<FaLinkedinIn className="footer_social_medial_handle" />
								<p>
									<Link to="" className="footer_all_social">All social</Link>
								</p>
							</div>
						</div>
						<div className="footer_link_down_guide">
							<ul className="footer_link_down_ul">
								<li className="foot_li_last">
									<Link to="" className="footer_link_down">
										Privacy policy
									</Link>
								</li>
								<li className="foot_li_last">
									<Link to="" className="footer_link_down">
										Terms of use
									</Link>
								</li>
								<li className="foot_li_last">
									<Link to="" className="footer_link_down">
										Website feedback
									</Link>
								</li>
								<li>© 2023 University of Manitoba</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
