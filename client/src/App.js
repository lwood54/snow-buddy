import React, { useState } from "react";
import NavBar from "./navigation/navBar";
import AppRouter from "./appRouter";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	return (
		<div>
			<NavBar />
			<h1>Snow Buddy</h1>
			<AppRouter />
		</div>
	);
}

export default App;
