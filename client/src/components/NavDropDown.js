import React, { useContext } from "react";
import { Link } from "react-router-dom";

import cls from "../styles/navDropDown.module.scss";

import { LoggedInStatus } from "../App";

const NavDropDown = ({ isOpen, wasOpen }) => {
	const [isLoggedIn] = useContext(LoggedInStatus);

	return (
		<div>
			<div className={[cls.navLinksContainer, isOpen ? cls.menuSlideIn : wasOpen ? cls.menuSlideOut : ""].join(" ")}>
				<Link to="/" className={cls.linkStyle}>
					<div className={cls.inner}>Home</div>
				</Link>
				<Link to="/resorts/" className={cls.linkStyle}>
					Resorts
				</Link>
				<Link to="/equipment-tips/" className={cls.linkStyle}>
					Equipment Tips
				</Link>
				<Link to="/travel-tips/" className={cls.linkStyle}>
					Travel Tips
				</Link>
				<Link to="/userProfile/" className={cls.linkStyle}>
					{isLoggedIn ? "User Profile" : "Login/Register"}
				</Link>
			</div>
		</div>
	);
};

export default NavDropDown;
