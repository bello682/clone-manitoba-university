// import { useRef } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

// import Header2 from "./header2";

function Header3() {
	// const navRef = useRef();

	const showNavbar = () => {
		// navRef.current.classList.toggle("responsive_nav");
		const display = document.querySelector(".header3_links_list_res_mob");
		const close_bar = document.querySelector(".close_bar");
		const option_bar = document.querySelector(".option_bar");
		display.style.display = "block";
		close_bar.style.display = "block";
		option_bar.style.display = "none";

		const navSearchShow = document.querySelector(".search_bar");
		const navSearchHide = document.querySelector(".close_bar_search");

		navSearchShow.style.display = "block";
		navSearchHide.style.display = "none";

		const navSearch = document.querySelector(
			".searchbar_links_list_res_mob_alternative"
		);
		if (option_bar) {
			navSearch.style.display = "none"
		}

	};

	const HideNavbar = () => {
		// navRef.current.classList.toggle("responsive_nav");
		const display = document.querySelector(".header3_links_list_res_mob");
		const close_bar = document.querySelector(".close_bar");
		const option_bar = document.querySelector(".option_bar");
		display.style.display = "none";
		close_bar.style.display = "none";
		option_bar.style.display = "block";
	};

	const showNavSearch = () => {
		const navSearch = document.querySelector(
			".searchbar_links_list_res_mob_alternative"
		);

		const navSearchShow = document.querySelector(".search_bar");

		const navSearchHide = document.querySelector(".close_bar_search");

		navSearch.style.display = "block";
		navSearchHide.style.display = "block";
		navSearchShow.style.display = "none";

		const close_bar = document.querySelector(".close_bar");
		const option_bar = document.querySelector(".option_bar");
		close_bar.style.display = "none";
		option_bar.style.display = "block";

		const display = document.querySelector(".header3_links_list_res_mob");
		if (navSearchShow) {
			display.style.display = "none"
		}
	};

	const showNavClose = () => {
		const navSearch = document.querySelector(
			".searchbar_links_list_res_mob_alternative"
		);

		const navSearchShow = document.querySelector(".search_bar");

		const navSearchHide = document.querySelector(".close_bar_search");

		navSearch.style.display = "none";
		navSearchShow.style.display = "block";
		navSearchHide.style.display = "none";
	};

	return (
		<div className="all_wrapped">
			<nav className="header3_background">
				<div className="header3_logo">
					<img
						src="./images/headerLogoImage/logo.svg"
						alt=""
						className="header3_logo_img"
					/>
				</div>

				<div className="header3_links_list">
					<ul className="header3_ul">
						<li className="header3_li">
							<Link to="" className="header3_links link_bold">
								Admissions
							</Link>
						</li>
						<li className="header3_li">
							<Link to="" className="header3_links link_bold">
								Academics
							</Link>
						</li>
						<li className="header3_li">
							<Link to="" className="header3_links link_bold">
								Research
							</Link>
						</li>
						<li className="header3_li">
							<Link to="" className="header3_links link_bold">
								Student Supports
							</Link>
						</li>
						<li className="header3_li">
							<Link to="" className="header3_links link_bold">
								Community
							</Link>
						</li>
						<li className="header3_li">
							<Link to="" className="header3_links link_bold">
								About UM
							</Link>
						</li>
						<li className="header3_li_search none">
							<Link to="" className="header3_search link_bold">
								<IoIosSearch />
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<nav className="header3_background_res MOBILE_SCREEN_RESPONSIVE">
				<div className="header3_logo_mobile_responsive">
					<img
						src="./images/headerLogoImage/logo.svg"
						alt=""
						className="header3_logo_img_mob_res"
					/>
				</div>
				<nav className="header3_icons_close_open">
					<div>
						<button
							className=" icons_functions_header search_bar"
							onClick={showNavSearch}
						>
							<IoIosSearch />
						</button>
						<button
							className=" icons_functions_header close_bar_search"
							onClick={showNavClose}
						>
							<FaXmark />
						</button>
					</div>
					<div className="icon_buttons_link_responsive_mobile_i">
						<button
							className=" icons_functions_header option_bar"
							onClick={showNavbar}
						>
							<FaBars />
						</button>

						<button
							className=" icons_functions_header close_bar"
							onClick={HideNavbar}
						>
							<FaXmark />
						</button>
					</div>
				</nav>
			</nav>

			{/* ref={navRef} */}
			<div className="header3_links_list_res_mob">
				<div className="sub_header3_links_list_res_mob">
					<div className="header3_links_list_res_mob_container">
						<ul className="header3_ul_mob_res">
							<li className="header3_li">
								<Link to="" className="header3_links link_bold">
									Admissions
								</Link>
							</li>
							<li className="header3_li">
								<Link to="" className="header3_links link_bold">
									Academics
								</Link>
							</li>
							<li className="header3_li">
								<Link to="" className="header3_links link_bold">
									Research
								</Link>
							</li>
							<li className="header3_li">
								<Link to="" className="header3_links link_bold">
									Student Supports
								</Link>
							</li>
							<li className="header3_li">
								<Link to="" className="header3_links link_bold">
									Community
								</Link>
							</li>
							<li className="header3_li">
								<Link to="" className="header3_links link_bold">
									About UM
								</Link>
							</li>
							<li className="header3_li_search none">
								<Link to="" className="header3_search link_bold">
									<IoIosSearch />
								</Link>
							</li>
						</ul>

						<nav className="header2_background_mobile_responsive">
							<div>
								<ul className="header2_ul_mob_res">
									<li className="header2_li">
										<Link
											to=""
											className="header2_links_alternate"
											id="isActive"
										>
											Current students
										</Link>
									</li>
									<li className="header2_li">
										<Link to="" className="header2_links_alternate">
											Faculty and staff
										</Link>
									</li>
									<li className="header2_li">
										<Link to="" className="header2_links_alternate">
											Alumni
										</Link>
									</li>
									<li className="header2_li">
										<Link to="" className="header2_links_alternate">
											Email
										</Link>
									</li>
									<li className="header2_li">
										<Link to="" className="header2_links_alternate">
											News and events
										</Link>
									</li>
								</ul>
							</div>

							<div>
								<ul className="header2_ul_alternate">
									<li className="header2_li_alt_res ">
										<Link
											to=""
											className="header2_links_alternate link_bold1_alt"
										>
											VISIT
										</Link>
									</li>
									<li className="header2_li_alt_res move">
										<Link
											to=""
											className="header2_links_alternate link_bold1_alt"
										>
											APPLY
										</Link>
									</li>
									<li className="header2_li_alt_res move">
										<Link
											to=""
											className="header2_links_alternate link_bold1_alt"
										>
											DONATE
										</Link>
									</li>
								</ul>
							</div>
						</nav>

						{/*<div className="header2_mobile_responsive">
									* <Header2
										data1="Current students"
										data2="Faculty and staff"
										data3="Alumni"
										data4="Email"
										data5="News and events"
										dataA="VISIT"
										dataB="APPLY"
										dataC="DONATE"
									/>
								</div> */}
					</div>
					<div className="header1_back_alt">
						<p className="header1_p_alt_show">
							The University of Manitoba campuses are located on original lands
							of Anishinaabeg, Cree, Ojibwe-Cree, Dakota, and Dene peoples, and
							on the National Homeland of the Red River Métis.
							<Link to="/" className="header1_link">
								More
							</Link>
						</p>

						<div className="footer_button_socials_links_alt_foot">
							<div className="footer_h3_p_button">
								<h4>University of Manitoba</h4>
								<p>Winnipeg, Manitoba, Canada R3T 2N2</p>
								<button className="footer_btn">Maps and directions</button>
							</div>
							<div className="footer_p_links_icons">
								<p>
									<Link to="" className="foot_p_l">
										1-800-432-1960 (North America)
									</Link>
								</p>
								<p>
									<Link to="" className="foot_p_l">
										Emergency: 204-474-9341
									</Link>
								</p>
								<p className="foot_pl_bold_p">
									<Link to="" className="foot_p_l foot_pl_bold">
										Emergency information
									</Link>
								</p>
								<div className="footer_icons_social_medials_alt_mob">
									<div className="footer_social_medial_handle_wrapper_mini">
										<FaTwitter className="footer_social_medial_handle" />
										<FaFacebookF className="footer_social_medial_handle large" />
										<FaInstagram className="footer_social_medial_handle large" />
										<FaTiktok className="footer_social_medial_handle large" />
										<FaYoutube className="footer_social_medial_handle large" />
										<FaLinkedinIn className="footer_social_medial_handle large" />
									</div>
									<p>
										<Link to="" className="footer_all_social">
											All social
										</Link>
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
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="searchbar_links_list_res_mob_alternative">
				<div className="searchInput_searchIcon">
					<input type="text" placeholder="Search UM" id="searchInput" />
					<IoIosSearch id="searchIcon" />
				</div>
				<div className="All_search_list_links_container">
					<ul className="">
						<li className="main_list_items">
							<a href="">Admissions</a>
							<div className="">
								<ul>
									<li className="admission_list_singles">Digital Viewbook</li>
									<li className="admission_list_singles">
										Undergraduate Admissions
									</li>
									<li className="admission_list_singles">
										Graduate Admissions
									</li>
									<li className="admission_list_singles">Extended Education</li>
									<li className="admission_list_singles">
										Indigenous Students
									</li>
									<li className="admission_list_singles">
										Financial Aid and Awards
									</li>
									<li className="admission_list_singles">Apply to UM</li>
								</ul>
							</div>
						</li>
						<li className="main_list_items">
							<a href="">Academics</a>
							<div className="">
								<ul>
									<li className="admission_list_singles">Digital Viewbook</li>
									<li className="admission_list_singles">
										Undergraduate Admissions
									</li>
									<li className="admission_list_singles">
										Graduate Admissions
									</li>
									<li className="admission_list_singles">Extended Education</li>
									<li className="admission_list_singles">
										Indigenous Students
									</li>
									<li className="admission_list_singles">
										Financial Aid and Awards
									</li>
									<li className="admission_list_singles">Apply to UM</li>
								</ul>
							</div>
						</li>
						<li className="main_list_items">
							<a href="">Research</a>
							<div className="">
								<ul>
									<li className="admission_list_singles">Digital Viewbook</li>
									<li className="admission_list_singles">
										Undergraduate Admissions
									</li>
									<li className="admission_list_singles">
										Graduate Admissions
									</li>
									<li className="admission_list_singles">Extended Education</li>
									<li className="admission_list_singles">
										Indigenous Students
									</li>
									<li className="admission_list_singles">
										Financial Aid and Awards
									</li>
									<li className="admission_list_singles">Apply to UM</li>
								</ul>
							</div>
						</li>
						<li className="main_list_items">
							<a href="">Student Supports</a>
							<div className="">
								<ul>
									<li className="admission_list_singles">Digital Viewbook</li>
									<li className="admission_list_singles">
										Undergraduate Admissions
									</li>
									<li className="admission_list_singles">
										Graduate Admissions
									</li>
									<li className="admission_list_singles">Extended Education</li>
									<li className="admission_list_singles">
										Indigenous Students
									</li>
									<li className="admission_list_singles">
										Financial Aid and Awards
									</li>
									<li className="admission_list_singles">Apply to UM</li>
								</ul>
							</div>
						</li>
						<li className="main_list_items">
							<a href="">Community</a>
							<div className="">
								<ul>
									<li className="admission_list_singles">Digital Viewbook</li>
									<li className="admission_list_singles">
										Undergraduate Admissions
									</li>
									<li className="admission_list_singles">
										Graduate Admissions
									</li>
									<li className="admission_list_singles">Extended Education</li>
									<li className="admission_list_singles">
										Indigenous Students
									</li>
									<li className="admission_list_singles">
										Financial Aid and Awards
									</li>
									<li className="admission_list_singles">Apply to UM</li>
								</ul>
							</div>
						</li>
						<li className="main_list_items">
							<a href="">About UM</a>
							<div className="">
								<ul>
									<li className="admission_list_singles">Digital Viewbook</li>
									<li className="admission_list_singles">
										Undergraduate Admissions
									</li>
									<li className="admission_list_singles">
										Graduate Admissions
									</li>
									<li className="admission_list_singles">Extended Education</li>
									<li className="admission_list_singles">
										Indigenous Students
									</li>
									<li className="admission_list_singles">
										Financial Aid and Awards
									</li>
									<li className="admission_list_singles">Apply to UM</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header3;
