import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Resorts from "./pages/resorts";
import EquipmentTips from "./pages/equipmentTips";
import TravelTips from "./pages/travelTips";
import UserProfile from "./pages/userProfile";
import cls from "./styles/routes.module.scss";

function AppRouter() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/resorts/" component={Resorts} />
			<Route path="/equipment-tips/" component={EquipmentTips} />
			<Route path="/travel-tips/" component={TravelTips} />
			<Route path="/userProfile/" component={UserProfile} />
		</Switch>
	);
}

export default AppRouter;
