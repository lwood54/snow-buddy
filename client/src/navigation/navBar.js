import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import NavDropDown from "../components/NavDropDown";
import cls from "../styles/navigation/nav.module.scss";
import { LoggedInStatus } from "../App";
import { withRouter } from "react-router-dom";

import navMenuIcon from "../images/svgs/icons/nav-menu-icon.svg";

const NavBar = props => {
	const [isLoggedIn, setIsLoggedIn] = useContext(LoggedInStatus);
	const [isMenuOpen, setIsMenuOpen] = useState("");
	const [menuWasOpen, setMenuWasOpen] = useState(false);

	useEffect(() => {
		// this sets flag to change one time so that the animation for
		// for menu slideIn/Out does not run on page load
		if (!menuWasOpen) {
			if (isMenuOpen) {
				setMenuWasOpen(true);
			}
		}
	}, [isMenuOpen, menuWasOpen]);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleLogout = () => {
		// if (isLoggedIn) setIsLoggedIn(false);
		if (isLoggedIn) setIsLoggedIn(false);
	};

	return (
		<nav className={cls.navContainer}>
			<span className={cls.navIconContainer} onClick={handleMenuToggle}>
				<img src={navMenuIcon} alt="nav menu icon" />
				<NavDropDown isOpen={isMenuOpen} wasOpen={menuWasOpen} />
			</span>
			<div className={cls.navLinksContainer}>
				<Link to="/" className={cls.linkStyle}>
					<div className={cls.inner}>Home</div>
				</Link>
				<Link to="/slopes/" className={cls.linkStyle}>
					Slopes
				</Link>
				<Link to="/general-tips/" className={cls.linkStyle}>
					Tips
				</Link>
				{!isLoggedIn ? (
					<Link to="/userProfile" className={cls.linkStyle}>
						Login
					</Link>
				) : (
					<Link to="/" onClick={handleLogout} className={cls.linkStyle}>
						Logout
					</Link>
				)}
			</div>
		</nav>
	);
};

export default withRouter(NavBar);
