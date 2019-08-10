import React from "react";

import cls from "../styles/home.module.scss";
import bgSlopeSVGtall from "../images/svgs/slope-tall.svg";

const home = () => {
	return (
		<div className={cls.mainLandingContainer}>
			<img className={cls.bgImage} src={bgSlopeSVGtall} alt="bg-slope" />
			<div className={cls.slopeFiller} />
			<h1>Home</h1>
		</div>
	);
};

export default home;
