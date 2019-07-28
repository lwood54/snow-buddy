import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import UserRegistration from "./pages/userRegistration";
import UserLogin from "./pages/userLogin";
import AnotherPage from "./pages/anotherPage";

function AppRouter() {
	return (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/about/" component={About} />
			<Route path="/userRegistration/" component={UserRegistration} />
			<Route path="/userLogin/" component={UserLogin} />
			<Route path="/anotherPage/" component={AnotherPage} />
		</Switch>
	);
}

export default AppRouter;
