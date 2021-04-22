import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RouterComponent from "./router/RouterComponent";

import { setUserToken } from "./store/actions/auth.action";
import { USER_TOKEN } from "./constants";

const App = (props) => {
  useEffect(() => {
    const token = localStorage.getItem(USER_TOKEN);
    if (token) {
      props.setUserToken({ token });
    }
  }, []);

  const { user } = props || {};
  return (
    <div>
      <RouterComponent user={user} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ setUserToken }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(App);
