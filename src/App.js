import React, { useEffect } from "react";
import RouterComponent from "./router/RouterComponent";
import { setUserToken } from "./store/actions/auth.action";
import { USER_TOKEN } from "./constants";
import { useDispatch } from 'react-redux';

const App = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem(USER_TOKEN);
		if (token) dispatch(setUserToken(token));
	}, []);

	return (
		<RouterComponent />
	);
};

export default App;

