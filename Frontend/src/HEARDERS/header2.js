import React from "react";
import { Link } from "react-router-dom";

function Header2(props) {
	console.log(props);
	const AllData = {
		data1: "Current students",
		data2: "Faculty and staff",
		data3: "Alumni",
		data4: "Email",
		data5: "News and events",
		dataA: "VISIT",
		dataB: "APPLY",
		dataC: "DONATE",
	};

	// To disstucture the object now for other use
	const { data1, data2, data3, data4, data5, dataA, dataB, dataC } = AllData;
	console.log(data1, data2, data3, data4, data5, dataA, dataB, dataC);

	return (
		<div>
			<nav className="header2_background">
				<div>
					<ul className="header2_ul">
						<li className="header2_li">
							<Link to="" className="header2_links" id="isActive">
								{/* {props.data1} */}
								Current students
							</Link>
						</li>
						<li className="header2_li">
							<Link to="" className="header2_links">
								{/* {props.data2} */}
								Faculty and staff
							</Link>
						</li>
						<li className="header2_li">
							<Link to="" className="header2_links">
								{/* {props.data3} */}
								Alumni
							</Link>
						</li>
						<li className="header2_li">
							<Link to="" className="header2_links">
								{/* {props.data4} */}
								Email
							</Link>
						</li>
						<li className="header2_li">
							<Link to="" className="header2_links">
								{/* {props.data5} */}
								News and events
							</Link>
						</li>
					</ul>
				</div>

				<div className="ver_line">|</div>

				<div className="header2_ul_2">
					<ul className="header2_ul header2_ul_2">
						<li className="header2_li">
							<Link to="" className="header2_links link_bold1">
								{/* {props.dataA} */}
								VISIT
							</Link>
						</li>
						<li className="header2_li">
							<Link to="" className="header2_links link_bold1">
								{/* {props.dataB} */}
								APPLY
							</Link>
						</li>
						<li className="header2_li">
							<Link to="" className="header2_links link_bold1">
								{/* {props.dataC} */}
								DONATE
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className="horizotal_line"></div>
		</div>
	);
}

export default Header2;
