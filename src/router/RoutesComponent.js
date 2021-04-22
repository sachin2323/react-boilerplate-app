import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";

// Page
const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const RoutesComponent = () => {
  return (
    <div>
      <Suspense>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
      </Suspense>
    </div>
  );
};

export default RoutesComponent;
