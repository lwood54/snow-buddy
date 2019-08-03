import React, { useState, useEffect, useContext, useRef } from "react";
import { LoggedInStatus, CurrentUserContext } from "../App";

const UserLogin = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInStatus);
	const [, setCurrentUser] = useContext(CurrentUserContext); // need ' , ' to define empty variable
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = e => {
		switch (e.target.name) {
			case "email":
				setUserEmail(e.target.value);
				break;
			case "password":
				setUserPassword(e.target.value);
				break;
			default:
				break;
		}
	};

	const handleLogin = e => {
		const loginUrl = "http://localhost:5000/api/user/login";

		e.preventDefault();
		const userData = {
			email: userEmail,
			password: userPassword
		};
		fetch(loginUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(userData)
		})
			.then(response => {
				return response.json();
			})
			.then(res => {
				setIsLoggedIn(res.token ? true : false);
				if (res.token) {
					setCurrentUser({
						...res.user,
						token: res.token
					});
				} else if (res.error) {
					setErrorMessage(res.error);
				}
			})
			.catch(error => {
				console.log("error message: ", error);
			});
		setUserEmail("");
		setUserPassword("");
	};

	return (
		<div>
			<h1>Login</h1>
			<form>
				<label>Email</label>
				<input type="email" onChange={handleChange} name="email" placeholder="energy@mcsquared.com" value={userEmail} />
				<label>Password</label>
				<input type="password" onChange={handleChange} name="password" placeholder="kewlpassword" value={userPassword} />
				{errorMessage ? <p>{errorMessage}</p> : null}
				<button onClick={handleLogin}>Log In</button>
			</form>
		</div>
	);
};

export default UserLogin;
