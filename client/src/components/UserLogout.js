import React, { useContext } from "react";
import { LoggedInStatus } from "../App";

const UserLogout = () => {
	const [, setIsLoggedIn] = useContext(LoggedInStatus);

	const handleLogout = e => {
		e.preventDefault();
		setIsLoggedIn(false);
	};

	return (
		<div>
			<button onClick={handleLogout}>Log Out</button>
		</div>
	);
};

export default UserLogout;
