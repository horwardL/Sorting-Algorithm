import React from "react";
import ReactDOM from "react-dom";
import VirtualizationApp from "./virtualizationApp";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <VirtualizationApp />
  </Provider>,
  document.getElementById("root")
);
