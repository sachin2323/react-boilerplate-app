import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

// Redux
import store from "./store/store";
const MyContext = React.createContext();

const MyAppWithStore = () => (
  <Provider store={store} context={MyContext}>
    <Suspense fallback={<div>Loading... </div>}>
      <App />
    </Suspense>
  </Provider>
);
ReactDOM.hydrate(<MyAppWithStore />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
