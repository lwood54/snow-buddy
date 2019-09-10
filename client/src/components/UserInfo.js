import React, { useContext, useState, useEffect } from "react";
import { LoggedInStatus, CurrentUserContext } from "../App";

import cls from "../styles/components/userInfo.module.scss";

const UserInfo = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);
	const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
	const [newSkillLevel, setNewSkillLevel] = useState("2");
	const [userMessage, setUserMessage] = useState("");
	const [userIsUpdated, setIsUserUpdated] = useState("");

	useEffect(() => {
		const timer = setTimeout(() => {
			setUserMessage("");
			setIsUserUpdated(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, [userIsUpdated]);

	useEffect(() => {
		if (!isLoggedIn) {
			setCurrentUser("");
		}
	}, [isLoggedIn, setCurrentUser]);

	const handleNewSkillInput = e => {
		setNewSkillLevel(e.target.value);
		console.log("newSkillLevel: ", newSkillLevel);
	};

	const submitUpdate = e => {
		e.preventDefault();
		const updateUrl = "http://localhost:8000/api/user/update";
		const updatedUser = {
			...currentUser,
			skill: newSkillLevel
		};
		if (isLoggedIn) {
			fetch(updateUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(updatedUser)
			})
				.then(response => response.json())
				.then(res => {
					if (res.error) {
						setUserMessage(res.error);
						setIsUserUpdated(false);
					} else {
						setCurrentUser({
							...currentUser,
							date: res.date,
							email: res.email,
							skill: res.skill
						});
						setIsUserUpdated(true);
						setUserMessage("Successfully updated!");
					}
				})
				.catch(error => {
					console.log("error: ", error);
				});
		}
	};

	// Create array of options for skill select render
	const skillValues = Array.from(Array(10).keys()).map(num => {
		return (
			<option key={num} value={num + 1}>
				{num + 1}
			</option>
		);
	});
	return (
		<div className={cls.userInfo__block}>
			{isLoggedIn ? (
				<div className={cls.userInfo__form_container}>
					<p className={cls.userInfo__detail}>name: {currentUser.name}</p>
					<p className={cls.userInfo__detail}>email: {currentUser.email}</p>
					<div className={cls.userInfo__skill_container}>
						<p className={[cls.userInfo__detail, cls.userInfo__detail___can_modify].join(" ")}>skill: {currentUser.skill}</p>
						<label className={cls.userInfo__detail_skill} htmlFor="skill">
							<select value={newSkillLevel} onChange={handleNewSkillInput}>
								{skillValues}
							</select>
						</label>
					</div>
					<button className={cls.userInfo__form_button} onClick={submitUpdate}>
						update
					</button>
				</div>
			) : null}
			<p className={cls.userInfo__message_text}>{userMessage ? userMessage : null}</p>
		</div>
	);
};

export default UserInfo;
