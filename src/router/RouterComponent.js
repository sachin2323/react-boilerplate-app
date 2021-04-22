import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import RoutesComponent from "./RoutesComponent";

const RouterComponent = (props) => {
  const user = props.user || {};
  return (
    <Router basename="/">
      <div>
        <RoutesComponent user={user} />
      </div>
    </Router>
  );
};

export default connect()(RouterComponent);
