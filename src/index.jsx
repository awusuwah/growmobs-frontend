import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import { configureStore } from "./redux";

import "./styles/Application.scss";
import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/bulma.sass";

const configuredStore = configureStore();

/**
 * The entry-point for the application's rendering process.
 */
ReactDOM.render(
  <Provider store={configuredStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
