import React, { useState, useContext, useEffect } from "react";
import { LoggedInStatus, CurrentUserContext } from "../App";
import UserInfo from "../components/UserInfo";
import UserLogin from "../components/UserLogin";

const UserProfile = () => {
	const [isLoggedin] = useContext(LoggedInStatus);
	// return <div>{!isLoggedin ? <UserLogin /> : <UserInfo />}</div>;
	return (
		<div>
			<UserLogin />
			<UserInfo />
		</div>
	);
};

export default UserProfile;
