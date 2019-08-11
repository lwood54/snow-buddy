import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cls from "../styles/nav.module.scss";
import { LoggedInStatus } from "../App";

const NavBar = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);

	return (
		<nav className={cls.navContainer}>
			<div className={cls.linkContainer}>
				<Link to="/" className={cls.linkStyle}>
					<div className={cls.inner}>Home</div>
				</Link>
			</div>
			<Link to="/resorts/" className={cls.linkStyle}>
				Resorts
			</Link>
			<Link to="/equipment-tips/" className={cls.linkStyle}>
				Equipment Tips
			</Link>
			<Link to="/travel-tips/" className={cls.linkStyle}>
				Travel Tips
			</Link>
		</nav>
	);
};

export default NavBar;
