import React, { useContext } from "react";
import { LoggedInStatus } from "../App";
import UserInfo from "../components/UserInfo";
import UserLogin from "../components/UserLogin";
import UserLogout from "../components/UserLogout";
import UserRegistration from "../components/UserRegistration";

const UserProfile = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);
	// return <div>{!isLoggedin ? <UserLogin /> : <UserInfo />}</div>;
	return (
		<div>
			<UserRegistration />
			{isLoggedIn ? <UserLogout /> : <UserLogin />}
			<UserInfo />
		</div>
	);
};

export default UserProfile;
