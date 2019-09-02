import React, { useContext } from "react";
import { LoggedInStatus } from "../App";
import UserInfo from "../components/UserInfo";
import UserLogin from "../components/UserLogin";
import UserLogout from "../components/UserLogout";
import UserRegistration from "../components/UserRegistration";

import cls from "../styles/pages/userProfile.module.scss";
import globalStyles from "../styles/global/global.module.scss";

let bgStyles = [globalStyles.mainLandingContainer, cls.UserProfile__bg].join(" ");

const UserProfile = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);
	return (
		<div className={bgStyles}>
			<div className={cls.UserProfile__component_container}>
				{!isLoggedIn ? (
					<div className={cls.UserProfile__component}>
						<UserRegistration />
					</div>
				) : null}
				{isLoggedIn ? (
					<div className={cls.UserProfile__component}>
						<UserInfo />
						<UserLogout />
					</div>
				) : (
					<div className={cls.UserProfile__component}>
						<UserLogin />
					</div>
				)}
			</div>
		</div>
	);
};

export default UserProfile;
