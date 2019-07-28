import React, { useState, useContext } from "react";
import { LoggedInStatus } from "../App";

const AnotherPage = () => {
	const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInStatus);
	return (
		<div>
			<h1>Current Status:</h1>
			<h3>{isLoggedIn ? "Logged in!" : "Not logged in..."}</h3>
		</div>
	);
};

export default AnotherPage;
