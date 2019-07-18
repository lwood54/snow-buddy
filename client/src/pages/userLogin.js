import React, { useState, useEffect } from "react";

const UserLogin = () => {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
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
		console.log("event: ", e);
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
			</form>
		</div>
	);
};

export default UserLogin;
