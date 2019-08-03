import React, { useState, useEffect, useContext } from "react";
import { LoggedInStatus, CurrentUserContext } from "../App";

const UserLogout = () => {
	const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInStatus);
	const [, setCurrentUser] = useContext(CurrentUserContext);
	const [logoutMessage, setLogoutMessage] = useState("");
	const [showLogoutMessage, setShowLogoutMessage] = useState("");

	useEffect(() => {
		const timer = setTimeout(() => {
			setLogoutMessage("");
			setShowLogoutMessage(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, [isLoggedIn, setShowLogoutMessage]);

	const handleLogout = e => {
		e.preventDefault();
		setIsLoggedIn(false);
		setLogoutMessage("Logging out...");
		setShowLogoutMessage(true);
	};

	return (
		<div>
			<button onClick={handleLogout}>Log Out</button>
		</div>
	);
};

export default UserLogout;
