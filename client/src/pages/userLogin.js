import React, { useState, useEffect } from "react";

const UserLogin = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [loginMessage, setLoginMessage] = useState("");
	const [showLoginMessage, setShowLoginMessage] = useState("");
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

	const handleLogin = e => {
		e.preventDefault();
		const userData = {
			email: userEmail,
			password: userPassword
		};
		console.log("userData: ", JSON.stringify(userData));
		fetch("http://localhost:5000/api/user/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(userData)
		})
			.then(response => {
				console.log("response: ", response);
			})
			.then(res => {
				console.log(res);
				setLoginMessage("You have successfully logged in...");
				setShowLoginMessage(true);
			})
			.catch(error => {
				console.log("Error: ", error);
				setLoginMessage("Unable to login right now.");
				setShowLoginMessage(true);
			});
	};
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<label>Email</label>
				<input type="email" onChange={handleChange} name="email" placeholder="energy@mcsquared.com" value={userEmail} />
				<label>Password</label>
				<input type="password" onChange={handleChange} name="password" placeholder="kewlpassword" value={userPassword} />
				<input type="submit" value="Login" />
				{showLoginMessage ? <h3>{loginMessage}</h3> : null}
			</form>
		</div>
	);
};

export default UserLogin;
