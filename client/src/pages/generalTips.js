import React from "react";

import cls from "../styles/pages/generalTips.module.scss";
import globalStyles from "../styles/global/global.module.scss";

let bgStyles = [globalStyles.mainLandingContainer, cls.GeneralTips__bg].join(" ");

const GeneralTips = () => {
	return (
		<div className={bgStyles}>
			<h1>General Tips Page</h1>
			<p>This will the root for the other tips pages.</p>
		</div>
	);
};

export default GeneralTips;
