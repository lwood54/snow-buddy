import React, { useState, useEffect, createContext } from "react";

export const LoggedInStatus = createContext("hello");

const UserLogin = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [loginMessage, setLoginMessage] = useState("");
	const [showLoginMessage, setShowLoginMessage] = useState("");
	const [loggedIn, setLoggedIn] = useState(localStorage.getItem("auth-token") ? true : false);
	const [loggedOut, setLoggedOut] = useState(!localStorage.getItem("auth-token") ? true : false);

	const loginUrl = "http://localhost:5000/api/user/login";
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

	useEffect(() => {
		console.log("loggedIn status: ", loggedIn);
		if (loggedIn) {
			setLoginMessage("Logged in!");
			setShowLoginMessage(true);
		}
	}, [loggedIn]);

	const handleLogin = e => {
		console.log("loggin in...");
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
			.then(response => response.json())
			.then(res => {
				setLoggedIn(res.token ? true : false);
				setLoggedOut(!res.token ? true : false);
				// localStorage.setItem("auth-token", res.token);
				setShowLoginMessage(true);
			})
			.catch(error => {
				setLoginMessage("Issue: ", error);
				setShowLoginMessage(true);
			});
		setUserEmail("");
		setUserPassword("");
		setTimeout(() => {
			setLoginMessage("");
			setShowLoginMessage(false);
		}, 3000);
	};

	const handleLogout = e => {
		e.preventDefault();
		// localStorage.removeItem("auth-token");
		setLoginMessage("Logging out...");
		setShowLoginMessage(true);
		setTimeout(() => {
			setLoginMessage("");
			setShowLoginMessage(false);
		}, 2000);
	};

	const [counter, setCounter] = useState(0);
	const handleAdd = () => {
		if (loggedIn) {
			setCounter(counter + 1);
		}
	};
	return (
		<LoggedInStatus.Provider value={loggedIn}>
			<h1>Login</h1>
			<form>
				<label>Email</label>
				<input type="email" onChange={handleChange} name="email" placeholder="energy@mcsquared.com" value={userEmail} />
				<label>Password</label>
				<input type="password" onChange={handleChange} name="password" placeholder="kewlpassword" value={userPassword} />
				{loggedOut ? <button onClick={handleLogin}>Log In</button> : <button onClick={handleLogout}>Log Out</button>}
				{showLoginMessage ? <h3>{loginMessage}</h3> : null}
			</form>
			<button onClick={handleAdd}>Add 1</button>
			<h3>{counter}</h3>
		</LoggedInStatus.Provider>
	);
};

export default UserLogin;
