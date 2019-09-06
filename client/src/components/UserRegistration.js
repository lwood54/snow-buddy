import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext, LoggedInStatus } from "../App";

import cls from "../styles/components/userRegistration.module.scss";

const UserRegistration = () => {
	// Context
	const [, setCurrentUser] = useContext(CurrentUserContext);
	const [, setIsLoggedIn] = useContext(LoggedInStatus);

	// Local State
	const [userName, setUserName] = useState("");
	const [userSkill, setUserSkill] = useState("beginner");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [registrationMessage, setRegistrationMessage] = useState("");
	const [showRegistrationMessage, setShowRegistrationMessage] = useState(false);
	const [skillValidationError, setSkillValidationError] = useState(false);

	const registerUrl = "http://localhost:5000/api/user/register";

	const handleChange = e => {
		setRegistrationMessage("");
		setShowRegistrationMessage(false);
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
				if (res.token) {
					setIsLoggedIn(true);
					setCurrentUser({
						...res.user,
						token: res.token
					});
				} else {
					setRegistrationMessage(res.error);
					setShowRegistrationMessage(true);
				}
			})
			.catch(error => {
				console.log("Error: ", error);
				setRegistrationMessage("Unable to register right now.");
				setShowRegistrationMessage(true);
			});
	};

	return (
		<div className={cls.registration__block}>
			{/*<h1 className={cls.registration__form_title}>Registration</h1>*/}
			<form className={cls.registration__form_container} onSubmit={handleRegister}>
				<label className={cls.registration__form_label}>Name</label>
				<input
					className={cls.registration__form_input}
					type="text"
					onChange={handleChange}
					name="name"
					placeholder="Logan Wood"
					value={userName}
				/>
				<label className={cls.registration__form_label}>Skill Level</label>
				<select className={cls.registration__form_input} name="skill" onChange={handleChange} value={userSkill}>
					<option value="beginner">Beginner</option>
					<option value="intermediate">Intermediate</option>
					<option value="advanced">Advanced</option>
				</select>
				<label className={cls.registration__form_label}>Email</label>
				<input
					className={cls.registration__form_input}
					type="email"
					onChange={handleChange}
					name="email"
					placeholder="energy@mcsquared.com"
					value={userEmail}
				/>
				<label className={cls.registration__form_label}>Password</label>
				<input
					className={cls.registration__form_input}
					type="password"
					onChange={handleChange}
					name="password"
					placeholder="kewlpassword"
					value={userPassword}
				/>
				<input className={cls.registration__form_button} type="submit" value="Register" />
			</form>
			<h3 className={cls.registration__message}>
				{showRegistrationMessage ? registrationMessage : skillValidationError ? "Skill Level should be between 1 and 10" : ""}
			</h3>
		</div>
	);
};

export default UserRegistration;
