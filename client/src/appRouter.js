import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import UserRegistration from "./pages/userRegistration";
import UserProfile from "./pages/userProfile";

function AppRouter() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/about/" component={About} />
			<Route path="/userRegistration/" component={UserRegistration} />
			<Route path="/userProfile/" component={UserProfile} />
		</Switch>
	);
}

export default AppRouter;
