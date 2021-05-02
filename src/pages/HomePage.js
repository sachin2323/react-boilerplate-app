import React from "react";
import { useSelector } from "react-redux";
import { USER_TOKEN } from "../constants";
import Landing from "../components/Landing";
import Home from "../components/Home";

const HomePage = (props) => {
	const user = useSelector((state) => state.user);

	const onClick = (e) => {
		e.preventDefault();
		localStorage.removeItem(USER_TOKEN);
		props.logout();
	};

	return user && user.token ? <Home logout={(e) => onClick(e)} /> : <Landing />;
};

export default HomePage;
