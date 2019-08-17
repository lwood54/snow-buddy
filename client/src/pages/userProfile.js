import React, { useContext } from "react";
import { LoggedInStatus } from "../App";
import UserInfo from "../components/UserInfo";
import UserLogin from "../components/UserLogin";
import UserLogout from "../components/UserLogout";
import UserRegistration from "../components/UserRegistration";
import cls from "../styles/userProfile.module.scss";

const UserProfile = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);
	// return <div>{!isLoggedin ? <UserLogin /> : <UserInfo />}</div>;
	return (
		<div className={cls.background}>
			<UserRegistration />
			{isLoggedIn ? <UserLogout /> : <UserLogin />}
			<UserInfo />
		</div>
	);
};

export default UserProfile;
