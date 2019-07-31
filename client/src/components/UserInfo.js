import React from "react";

const UserInfo = props => {
	return (
		<div>
			<h1>name: {props.currentUser.name}</h1>
			<h1>email: {props.currentUser.email}</h1>
			<h1>skill: {props.currentUser.skill}</h1>
			<button onClick={props.submitUpdate}>update</button>
		</div>
	);
};

export default UserInfo;
