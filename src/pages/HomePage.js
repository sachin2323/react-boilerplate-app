import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { USER_TOKEN } from "../constants";
import { logout } from "../store/actions/auth.action";

import Landing from "../components/Landing";
import Home from "../components/Home";

const HomePage = (props) => {
  const onClick = (e) => {
    e.preventDefault();
    localStorage.removeItem(USER_TOKEN);
    props.logout();
  };

  const { user } = this.props || {};
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

export default connect(mapStateToProps, matchDispatchToProps)(HomePage);
