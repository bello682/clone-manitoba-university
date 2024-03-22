import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header1 from "./HEARDERS/header1";
// import Header1_Mobile_Responsive from "./HEARDERS/header1_mobile_responsive";
// import Header2 from "./HEARDERS/header2";
import Header3 from "./HEARDERS/header3";
// import Hero1 from "./HEROPAGE/hero1";
// import Topstory from "./TOPSTORY/topStory";
// import Findpath from "./FIND YOUR PATH/findPath";
// import Umglance from "./UM GLANCE/umglance";
// import Footer from "./FOOTER/footer";
import Login from "./FORMS/login";
import "./style.css";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>{/* <Route path="/" element={<Header1 />} /> */}</Routes>

				{/* <Header1 />
				<Header2 /> */}
				<Header3 />
				{/* <Header1_Mobile_Responsive />
				<Hero1 />
				<Topstory />
				<Findpath />
				<Umglance /> */}
				{/* <Footer /> */}
				<Login />
			</BrowserRouter>
		</div>
	);
}

export default App;
