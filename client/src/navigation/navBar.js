import React from "react";
import { Link } from "react-router-dom";
import cls from "./nav.module.scss";

const navBar = () => {
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
			<Link to="/userRegistration/" className={cls.linkStyle}>
				Registration
			</Link>
			<Link to="/userLogin/" className={cls.linkStyle}>
				Login
			</Link>
		</nav>
	);
};

export default navBar;
