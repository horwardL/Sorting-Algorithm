import React, { Component } from "react";

import NavBar from "./components/Navbar/navbar.jsx";
import ArrayBar from "./components/ArrayBar/arrayBar.jsx";

export default class VirtualizationApp extends Component {
  state = {
    algorithmSelected: "selectionSort",
    size: "50",
    speed: "0",
    array: []
  };

  componentDidMount() {
    const array = this.generateArray(this.state.size);
    this.setState({ array });
  }

  algorithmSelect = eventKey => {
    console.log(eventKey);
    this.setState({ algorithmSelected: eventKey });
  };

  sizeChange = () => {
    const size = document.getElementById("array_size").value;
    const array = this.generateArray(size);
    this.setState({ size, array });
    //this.console.log(this.state.size);
  };

  speedChange = () => {
    this.setState({ speed: document.getElementById("speed").value });
    console.log(this.state.speed, "%");
  };

  startSelected = () => {
    console.log(
      "Start",
      this.state.algorithmSelected,
      "with size =",
      this.state.size,
      ", speed = +",
      this.state.speed,
      "%"
    );
  };

  generateArray(size) {
    const array = [];
    for (let i = 0; i < size; ++i) {
      array.push(getRandomInt(5, 888));
    }

    return array;
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          size={this.state.size}
          speed={this.state.speed}
          onAlgorithmSelect={this.algorithmSelect}
          onSizeChange={this.sizeChange}
          onSpeedChange={this.speedChange}
          onStartSelected={this.startSelected}
        />
        <ArrayBar array={this.state.array} size={this.state.size} />
      </React.Fragment>
    );
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
