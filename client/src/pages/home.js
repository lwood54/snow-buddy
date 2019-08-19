import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { LoggedInStatus } from "../App";

import cls from "../styles/pages/home.module.scss";
import globalStyles from "../styles/global/global.module.scss";
import bgSlopeSVGtall from "../images/svgs/slope-tall.svg";

let regBtnStyles = [cls.landingButtons, cls.registerBtn].join(" ");
let explrBtnStyles = [cls.landingButtons, cls.exploreBtn].join(" ");
let bgStyles = [globalStyles.mainLandingContainer, cls.bg].join(" ");

const Home = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);
	return (
		<div className={bgStyles}>
			<img className={cls.bgImage} src={bgSlopeSVGtall} alt="bg-slope" />
			<div className={cls.slopeFiller} />
			<h1 className={cls.landingTitle}>Snow Buddy</h1>
			<div className={cls.landingButtonsContainer}>
				<Link to="/userProfile/">
					<button className={regBtnStyles}>{isLoggedIn ? "User Profile" : "Login/Register"}</button>
				</Link>
				<button className={explrBtnStyles}>Explore</button>
			</div>
		</div>
	);
};

export default Home;
