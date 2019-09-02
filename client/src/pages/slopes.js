import React from "react";

import cls from "../styles/pages/slopes.module.scss";
import globalStyles from "../styles/global/global.module.scss";

let bgStyles = [globalStyles.mainLandingContainer, cls.Slopes__bg].join(" ");

const Slopes = () => {
	return (
		<div className={bgStyles}>
			<h1>Root Slopes Page</h1>
			<p>This will be the main page to access different slopes.</p>
			<p>There will be cards for different resorts. At this point, the resorts will only provide a list of slopes with essential slope info.</p>
		</div>
	);
};

export default Slopes;
