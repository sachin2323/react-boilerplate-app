import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import Reducers from './store/reducers';
import reportWebVitals from "./reportWebVitals";

// Redux
const store = createStore(Reducers);

const MyAppWithStore = () => (
	<Suspense fallback={<div>Loading... </div>}>
		<Provider store={store} >
			<App />
		</Provider>
	</Suspense>
);
ReactDOM.hydrate(<MyAppWithStore />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
