import React, { Component } from "react";

import NavBar from "./components/Navbar/navbar.jsx";
import ArrayContainer from "./components/ArrayContainer/arrayContainer";

class VirtualizationApp extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ArrayContainer />
      </React.Fragment>
    );
  }
}

export default VirtualizationApp;
