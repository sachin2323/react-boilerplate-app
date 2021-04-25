import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserToken } from "../store/actions/auth.action";
import { USER_TOKEN } from "../constants";

// Page
const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const RouterComponent = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem(USER_TOKEN);
		if (token) {
			dispatch(setUserToken(token));
		}
	}, []);

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
