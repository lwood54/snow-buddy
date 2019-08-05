import React, { useState, createContext } from "react";
import NavBar from "./navigation/navBar";
import AppRouter from "./appRouter";
import cls from "./styles/app.module.scss";

export const LoggedInStatus = createContext(false);
export const CurrentUserContext = createContext({});

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	return (
		<div className={cls.mainContainer}>
			<div className={cls.slopeContainer}>
				<svg width="100%" height="100%" version="1.1" viewBox="0 0 297 210" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<clipPath id="clipPath3862">
							<rect x="139.24" y="158.6" width="157.97" height="138.67" fill="#f00" stroke-width=".155" />
						</clipPath>
					</defs>
					<g transform="translate(0,-87)">
						<path
							transform="matrix(1.9065 0 0 1.5283 -264.7 -156.3)"
							d="m0.3984 216.22v-81.05l7.3471-0.27256c17.191-0.63776 38.109 1.3852 56.822 5.4952 3.3527 0.73635 16.747 15.799 33.105 16.253 89.493 2.4851 132.03 42.246 186.88 34.067 0 0 49.922-9.0265 37.85-2.7613 0.23221 4.3165-24.48 10.914-24.175 41.968 0.18402 18.743 0.48276 41.565 0.66388 50.715l0.32932 16.636h-298.82z"
							clip-path="url(#clipPath3862)"
							fill="#0ff"
							stroke-width=".44079"
						/>
					</g>
				</svg>
			</div>
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
