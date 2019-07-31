import React, { useState, useContext, useEffect } from "react";
import { LoggedInStatus, CurrentUserContext } from "../App";
import UserInfo from "../components/UserInfo";

const UserProfile = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);
	const [currentUser, setCurrentUser] = useContext(CurrentUserContext);
	const [newSkillLevel, setNewSkillLevel] = useState("");
	const [userMessage, setUserMessage] = useState("");
	const [showUserMessage, setShowUserMessage] = useState(false);
	const [userIsUpdated, setIsUserUpdated] = useState("");

	useEffect(() => {
		const timer = setTimeout(() => {
			setUserMessage("");
			setShowUserMessage(false);
			setIsUserUpdated(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, [userIsUpdated]);

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
						setShowUserMessage(true);
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
	return <UserInfo currentUser={currentUser} submitUpdate={submitUpdate} />;
	// return (
	// 	<div>
	// 		{showUserMessage ? <h3>{userMessage}</h3> : null}
	// 		<br />
	// 		<h2>Current User Info: </h2>
	// 		<ul>
	// 			<li>Name: {isLoggedIn ? currentUser.name : ""}</li>
	// 			<li>email: {isLoggedIn ? currentUser.email : ""}</li>
	// 			<li>
	// 				Skill Level: {isLoggedIn ? currentUser.skill : ""}
	// 				{isLoggedIn ? (
	// 					<ul>
	// 						<li>
	// 							Update skill level: <input name="skill" type="number" onChange={handleNewSkillInput} value={newSkillLevel} />
	// 						</li>
	// 						<li>
	// 							<button onClick={submitUpdate}>update</button>
	// 						</li>
	// 					</ul>
	// 				) : null}
	// 			</li>
	// 		</ul>
	// 	</div>
	// );
};

export default UserProfile;
