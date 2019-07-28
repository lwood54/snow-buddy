import React, { useState, createContext } from "react";
import NavBar from "./navigation/navBar";
import AppRouter from "./appRouter";

export const LoggedInStatus = createContext("hello");
export const CurrentUserContext = createContext("hello");

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	return (
		<LoggedInStatus.Provider value={[isLoggedIn, setIsLoggedIn]}>
			<CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
				<NavBar />
				<h1>Snow Buddy</h1>
				<AppRouter />
			</CurrentUserContext.Provider>
		</LoggedInStatus.Provider>
	);
}

export default App;
