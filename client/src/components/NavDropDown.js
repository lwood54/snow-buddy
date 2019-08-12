import React from "react";
import { Link } from "react-router-dom";

import cls from "../styles/navDropDown.module.scss";

const NavDropDown = () => {
	return (
		<div>
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
		</div>
	);
};

export default NavDropDown;
