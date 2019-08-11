import React, { useState, createContext } from "react";
import NavBar from "./navigation/navBar";
import AppRouter from "./appRouter";

export const LoggedInStatus = createContext(false);
export const CurrentUserContext = createContext({});

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	return (
		<div>
			<LoggedInStatus.Provider value={[isLoggedIn, setIsLoggedIn]}>
				<CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
					<NavBar />
					<AppRouter />
				</CurrentUserContext.Provider>
			</LoggedInStatus.Provider>
		</div>
	);
}

export default App;
