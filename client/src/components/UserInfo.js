import React, { useContext, useState, useEffect } from "react";
import { LoggedInStatus, CurrentUserContext } from "../App";

const UserInfo = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);
	const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
	const [newSkillLevel, setNewSkillLevel] = useState("");
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
		e.preventDefault();
		if (e.target.value >= 0 && e.target.value <= 10) {
			setNewSkillLevel(e.target.value);
		}
	};

	const submitUpdate = e => {
		e.preventDefault();
		const updateUrl = "http://localhost:5000/api/user/update";
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
	return (
		<div>
			{isLoggedIn ? (
				<div>
					<h1>name: {currentUser.name}</h1>
					<h1>email: {currentUser.email}</h1>
					<h1>skill: {currentUser.skill}</h1>
					<ul>
						<li>
							Update skill level:
							<input name="skill" type="number" onChange={handleNewSkillInput} value={newSkillLevel} />
						</li>
						<li>
							<button onClick={submitUpdate}>update</button>
						</li>
					</ul>
				</div>
			) : null}
			{userMessage ? <p>{userMessage}</p> : null}
		</div>
	);
};

export default UserInfo;
