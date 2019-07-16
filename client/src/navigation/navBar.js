import React from "react";
import { Link } from "react-router-dom";
import cls from "./nav.module.scss";

const navBar = () => {
	return (
		<nav className={cls.navContainer}>
			<Link to="/" className={cls.linkStyle}>
				<div className={cls.container}>
					<div className={cls.inner}>Home</div>
				</div>
			</Link>
			<Link to="/about/" className={cls.linkStyle}>
				About
			</Link>
			<Link to="/userRegistration/" className={cls.linkStyle}>
				Users
			</Link>
		</nav>
	);
};

export default navBar;
