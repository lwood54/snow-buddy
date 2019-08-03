import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cls from "./nav.module.scss";
import { LoggedInStatus } from "../App";

const NavBar = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);

	return (
		<nav className={cls.navContainer}>
			<div className={cls.linkContainer}>
				<Link to="/" className={cls.linkStyle}>
					<div className={cls.container}>
						<div className={cls.inner2}>Home</div>
						<div className={cls.inner}>Home</div>
					</div>
				</Link>
			</div>
			<Link to="/about/" className={cls.linkStyle}>
				About
			</Link>
			<Link to="/userProfile/" className={cls.linkStyle}>
				{isLoggedIn ? "User Profile" : "Login/Register"}
			</Link>
		</nav>
	);
};

export default NavBar;
