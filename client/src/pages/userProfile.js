import React, { useContext } from "react";
import { LoggedInStatus } from "../App";
import UserInfo from "../components/UserInfo";
import UserLogin from "../components/UserLogin";
import UserLogout from "../components/UserLogout";
import UserRegistration from "../components/UserRegistration";

import cls from "../styles/userProfile.module.scss";
import globalStyles from "../styles/global.module.scss";

let bgStyles = [globalStyles.mainLandingContainer, cls.bg].join(" ");

const svgStyles = {
	position: "absolute",
	zIndex: "100"
};

const UserProfile = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);
	return (
		<div className={bgStyles}>
			<div className={cls.componentContainer}>
				<UserRegistration />
			</div>
			<div className={cls.componentContainer}>{isLoggedIn ? <UserLogout /> : <UserLogin />}</div>
			<div className={cls.componentContainer}>
				<UserInfo />
			</div>
		</div>
	);
};

export default UserProfile;
