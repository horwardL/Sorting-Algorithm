import React from "react";
import ReactDOM from "react-dom";
import VirtualizationApp from "./virtualizationApp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<VirtualizationApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
