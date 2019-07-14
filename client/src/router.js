import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Users from "./pages/users";

function AppRouter() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/about/" component={About} />
			<Route path="/users/" component={Users} />
		</Switch>
	);
}

export default AppRouter;
