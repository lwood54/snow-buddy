import React, { useState, useEffect, useContext, useRef } from "react";
import { LoggedInStatus, CurrentUserContext } from "../App";

const UserLogin = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [loginMessage, setLoginMessage] = useState("");
	const [showLoginMessage, setShowLoginMessage] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInStatus);
	const [, setCurrentUser] = useContext(CurrentUserContext); // need ' , ' to define empty variable
	let isMounted = useRef();

	useEffect(() => {
		if (isLoggedIn) {
			setLoginMessage("Logged in!");
			setShowLoginMessage(true);
		}
	}, [isLoggedIn]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoginMessage("");
			setShowLoginMessage(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, [isLoggedIn]);

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

	// TODO: Needs work, cancel async call on unmounted component
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
				if (isMounted.current) {
					return response.json();
				} else {
					return null;
				}
			})
			.then(res => {
				setIsLoggedIn(res.token ? true : false);
				if (res.token) {
					setCurrentUser({
						...res.user,
						token: res.token
					});
				}
				setShowLoginMessage(true);
			})
			.catch(error => {
				setLoginMessage("Issue: ", error);
				setShowLoginMessage(true);
			});
		setUserEmail("");
		setUserPassword("");
	};

	const handleLogout = e => {
		e.preventDefault();
		setIsLoggedIn(false);
		setLoginMessage("Logging out...");
		setShowLoginMessage(true);
	};

	return (
		<div>
			{!isLoggedIn ? (
				<div>
					<h1>Login</h1>
					<form ref={isMounted}>
						<label>Email</label>
						<input type="email" onChange={handleChange} name="email" placeholder="energy@mcsquared.com" value={userEmail} />
						<label>Password</label>
						<input type="password" onChange={handleChange} name="password" placeholder="kewlpassword" value={userPassword} />
						<button onClick={handleLogin}>Log In</button>
						{showLoginMessage ? <h3>{loginMessage}</h3> : null}
					</form>
				</div>
			) : (
				<button onClick={handleLogout}>Log Out</button>
			)}
		</div>
	);
};

export default UserLogin;
