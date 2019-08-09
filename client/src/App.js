import React, { useState, createContext } from "react";
import NavBar from "./navigation/navBar";
import AppRouter from "./appRouter";
import cls from "./styles/app.module.scss";

import bgSlopeSVG from "./images/svgs/slope-cropped.svg";
import bgSlopeSVG3 from "./images/svgs/slope-3.svg";
import bgSlopeSVG4 from "./images/svgs/slope4-white.svg";

export const LoggedInStatus = createContext(false);
export const CurrentUserContext = createContext({});

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	return (
		<div className={cls.mainContainer}>
			<svg>
				<path d="M0,0 Q10,10 Z" />
			</svg>
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
