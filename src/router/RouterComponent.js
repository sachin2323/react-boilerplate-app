import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page
const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const RouterComponent = (props) => {

	return (
		<Router basename="/">
			<Suspense>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/login" component={LoginPage} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default RouterComponent;
