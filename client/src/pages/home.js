import React from "react";

import cls from "../styles/home.module.scss";
import bgSlopeSVGtall from "../images/svgs/slope-tall.svg";

let combRegBtnCls = [cls.landingButtons, cls.registerBtn].join(" ");
let combExploreBtnCls = [cls.landingButtons, cls.exploreBtn].join(" ");

const home = () => {
	console.log([cls.landingButtons, cls.registerBtn].join(" "));
	return (
		<div className={cls.mainLandingContainer}>
			<img className={cls.bgImage} src={bgSlopeSVGtall} alt="bg-slope" />
			<div className={cls.slopeFiller} />
			<div className={cls.landingButtonsContainer}>
				<button className={combRegBtnCls}>Register / Login</button>
				<button className={combExploreBtnCls}>Explore</button>
			</div>
		</div>
	);
};

export default home;
