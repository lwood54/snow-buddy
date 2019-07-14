import React from "react";
import NavBar from "./navigation/navBar";
import AppRouter from "./router";

function App() {
	return (
		<div>
			<NavBar />
			<h1>Snow Buddy</h1>
			<AppRouter />
		</div>
	);
}

export default App;
