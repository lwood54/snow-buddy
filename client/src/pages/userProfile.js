import React, { useState, useContext, useEffect } from "react";
import { LoggedInStatus, CurrentUserContext } from "../App";
import UserInfo from "../components/UserInfo";
import UserLogin from "../components/UserLogin";
import UserLogout from "../components/UserLogout";

const UserProfile = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);
	// return <div>{!isLoggedin ? <UserLogin /> : <UserInfo />}</div>;
	return (
		<div>
			{isLoggedIn ? <UserLogout /> : <UserLogin />}
			<UserInfo />
		</div>
	);
};

export default UserProfile;
