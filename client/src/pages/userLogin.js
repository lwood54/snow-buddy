import React, { useState, useEffect } from "react";

const UserLogin = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [loginMessage, setLoginMessage] = useState("");
	const [showLoginMessage, setShowLoginMessage] = useState("");
	const [loggedIn, setLoggedIn] = useState(localStorage.getItem("auth-token"));
	const [loggedOut, setLoggedOut] = useState(!localStorage.getItem("auth-token"));

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
		if (loggedIn) {
			setLoginMessage("Logged in!");
			setShowLoginMessage(true);
			console.log("localStorage token: ", localStorage.getItem("auth-token"));
		}
	}, [loggedIn]);

	const handleLogin = e => {
		console.log("loggin in...");
		e.preventDefault();
		const userData = {
			email: userEmail,
			password: userPassword
		};
		console.log("userData: ", JSON.stringify(userData));
		fetch(loginUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(userData)
		})
			.then(response => response.json())
			.then(res => {
				console.log("res: ", res);
				setLoggedIn(res.token);
				setLoggedOut(!res.token);
				localStorage.setItem("auth-token", res.token);
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
		localStorage.removeItem("auth-token");
		setLoginMessage("Logging out...");
		setShowLoginMessage(true);
		setTimeout(() => {
			setLoginMessage("");
			setShowLoginMessage(false);
		}, 2000);
	};

	const [counter, setCounter] = useState(0);
	const handleAdd = () => {
		if (localStorage.getItem("auth-token")) {
			setCounter(counter + 1);
		}
	};
	return (
		<div>
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
		</div>
	);
};

export default UserLogin;
