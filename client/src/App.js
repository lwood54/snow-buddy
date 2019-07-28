import React, { useState, createContext } from "react";
import NavBar from "./navigation/navBar";
import AppRouter from "./appRouter";

export const LoggedInStatus = createContext("hello");

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	console.log("isLoggedIn @ App.js: ", isLoggedIn);
	return (
		<LoggedInStatus.Provider value={[isLoggedIn, setIsLoggedIn]}>
			<NavBar />
			<h1>Snow Buddy</h1>
			<AppRouter />
		</LoggedInStatus.Provider>
	);
}

export default App;
