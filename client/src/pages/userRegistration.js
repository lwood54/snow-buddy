import React, { useState } from "react";

const UserRegistration = () => {
	const [userName, setUserName] = useState("");
	const [userSkill, setUserSkill] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [registrationMessage, setRegistrationMessage] = useState("");
	const [showRegistrationMessage, setShowRegistrationMessage] = useState(false);

	const registerUrl = "http://localhost:5000/api/user/register";

	const handleChange = e => {
		switch (e.target.name) {
			case "name":
				setUserName(e.target.value);
				break;
			case "skill":
				setUserSkill(e.target.value);
				break;
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

	const handleRegister = e => {
		e.preventDefault();
		// alternate option is to define a proxy in the client side package.json
		// "proxy": "https://localhost:5000",
		// and simply put '/api/user/register'
		const userData = {
			name: userName,
			skill: userSkill,
			email: userEmail,
			password: userPassword
		};
		fetch(registerUrl, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(userData)
		})
			.then(response => response.json())
			.then(res => {
				console.log(res);
				setRegistrationMessage("You have successfully registered...");
				setShowRegistrationMessage(true);
			})
			.catch(error => {
				console.log("Error: ", error);
				setRegistrationMessage("Unable to register right now.");
				setShowRegistrationMessage(true);
			});

		setUserName("");
		setUserSkill("");
		setUserEmail("");
		setUserPassword("");
		setTimeout(() => {
			setShowRegistrationMessage(false);
		}, 3000);
	};

	return (
		<div>
			<h1>User Login</h1>
			<form onSubmit={handleRegister}>
				<label>Name</label>
				<input type="text" onChange={handleChange} name="name" placeholder="Logan Wood" value={userName} />
				<label>Skill Level</label>
				<input type="number" onChange={handleChange} name="skill" placeholder="1 to 10" value={userSkill} />
				<label>Email</label>
				<input type="email" onChange={handleChange} name="email" placeholder="energy@mcsquared.com" value={userEmail} />
				<label>Password</label>
				<input type="password" onChange={handleChange} name="password" placeholder="kewlpassword" value={userPassword} />
				<input type="submit" value="Register" />
			</form>
			{showRegistrationMessage ? <h3>{registrationMessage}</h3> : null}
		</div>
	);
};

export default UserRegistration;
