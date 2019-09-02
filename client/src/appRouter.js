import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Resorts from "./pages/resorts";
import Slopes from "./pages/slopes";
import GeneralTips from "./pages/generalTips";
import EquipmentTips from "./pages/equipmentTips";
import TravelTips from "./pages/travelTips";
import UserProfile from "./pages/userProfile";

function AppRouter() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/slopes/" component={Slopes} />
			<Route path="/resorts/" component={Resorts} />
			<Route path="/general-tips/" component={GeneralTips} />
			<Route path="/equipment-tips/" component={EquipmentTips} />
			<Route path="/travel-tips/" component={TravelTips} />
			<Route path="/userProfile/" component={UserProfile} />
		</Switch>
	);
}

export default AppRouter;
