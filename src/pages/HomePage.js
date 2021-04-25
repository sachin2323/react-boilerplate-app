import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";

import { USER_TOKEN } from "../constants";
import { logout } from "../store/actions/auth.action";

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

// Store
function mapStateToProps(state) {
	return {
		user: state.user,
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({ logout }, dispatch);
}

export default HomePage;
