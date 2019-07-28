import React, { useState, useContext } from "react";
import NavBar from "./navigation/navBar";
import AppRouter from "./appRouter";
import { LoggedInStatus } from "./pages/userLogin";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	let isLoggedIn = useContext(LoggedInStatus);
	console.log("isLoggedIn: ", isLoggedIn);
	return (
		<div>
			<NavBar />
			<h1>Snow Buddy</h1>
			<AppRouter />
		</div>
	);
}

export default App;
