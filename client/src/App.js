import React, { useState, createContext } from "react";
import NavBar from "./navigation/navBar";
import AppRouter from "./appRouter";
import cls from "./styles/app.module.scss";

import bgSlopeSVG from "./images/svgs/slope-cropped.svg";
import bgSlopeSVG3 from "./images/svgs/slope-3.svg";

export const LoggedInStatus = createContext(false);
export const CurrentUserContext = createContext({});

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	return (
		<div className={cls.mainContainer}>
			<img className={cls.slopeContainer} src={bgSlopeSVG} alt="background slope" />
			<img className={cls.slope3Container} src={bgSlopeSVG3} alt="background slope" />

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
