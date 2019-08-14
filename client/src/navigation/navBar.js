import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavDropDown from "../components/NavDropDown";
import cls from "../styles/nav.module.scss";
import { LoggedInStatus } from "../App";

import navMenuIcon from "../images/svgs/icons/nav-menu-icon.svg";

const NavBar = () => {
	const [isLoggedIn] = useContext(LoggedInStatus);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className={cls.navContainer}>
			<span className={cls.navIconContainer} onClick={handleMenuToggle}>
				<img src={navMenuIcon} alt="nav menu icon" className={cls.menuIcon} />
				<NavDropDown isOpen={isMenuOpen} />
			</span>
			<div className={cls.navLinksContainer}>
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
			</div>
		</nav>
	);
};

export default NavBar;
