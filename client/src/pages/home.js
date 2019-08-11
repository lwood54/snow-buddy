import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { LoggedInStatus } from "../App";

import cls from "../styles/home.module.scss";
import bgSlopeSVGtall from "../images/svgs/slope-tall.svg";

let regBtnStyles = [cls.landingButtons, cls.registerBtn].join(" ");
let explrBtnStyles = [cls.landingButtons, cls.exploreBtn].join(" ");

const Home = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);
	return (
		<div className={cls.mainLandingContainer}>
			<img className={cls.bgImage} src={bgSlopeSVGtall} alt="bg-slope" />
			<div className={cls.slopeFiller} />
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
