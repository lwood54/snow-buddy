import React from "react";
import { Link } from "react-router-dom";
import cls from "./nav.module.scss";

const navBar = () => {
	return (
		<nav className={cls.navContainer}>
			<Link to="/" className={cls.linkStyle}>
				Home
			</Link>
			<Link to="/about/">About</Link>
			<Link to="/users/">Users</Link>
		</nav>
	);
};

export default navBar;
