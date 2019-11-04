import React from "react";
import ReactDOM from "react-dom";
import VirtualizationApp from "./virtualizationApp";
import { Provider } from "react-redux";
import configureStore from "./store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <VirtualizationApp />
  </Provider>,
  document.getElementById("root")
);
