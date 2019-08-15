import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import cls from "../styles/navDropDown.module.scss";
import "../styles/navDropDown.module.scss";

import { LoggedInStatus } from "../App";

const NavDropDown = ({ isOpen }) => {
	const [isLoggedIn] = useContext(LoggedInStatus);

	useEffect(() => {
		setTimeout(() => {
			let hideContainer = document.getElementsByClassName(cls.hide);
			console.log(hideContainer);
			hideContainer[0].classList.remove(cls.hide);
			console.log(hideContainer);
		}, 300);
		// return clearTimeout(removeHide);
	}, []);
	return (
		<div className={cls.hide} id="hideContainer">
			<div className={[cls.navLinksContainer, isOpen ? cls.menuSlideIn : cls.menuSlideOut, "hide"].join(" ")}>
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
