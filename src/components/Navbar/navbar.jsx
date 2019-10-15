import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "./navbar.min.css";

class NavBar extends Component {
  state={
    algorithmSelected: "selectionSort",
    size: "50",
    speed: "0",
  }

  handleSelect = eventKey => {
    console.log(eventKey);
    this.setState({algorithmSelected: eventKey});
  };

  onSizeChange = () => {
    this.setState({size: document.getElementById("array_size").value});
    console.log(this.state.size);
  };

  onSpeedChange = () => {
    this.setState({speed: document.getElementById("speed").value});
    console.log(this.state.speed,"%");
  };

  onStartSelected = () => {console.log("Start", this.state.algorithmSelected, "with size =", this.state.size, ", speed = +", this.state.speed, "%")}

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar fixed"
      >
        <Navbar.Brand href="#home">
          {"Sorting Algorithm  "}
          <img
            alt=""
            src="https://media1.tenor.com/images/d3e3bb1edd13218f434b5d2ac6d0c09e/tenor.gif"
            width="30"
            height="30"
            className="d-inline-block align-top rounded-circle"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="">Array Size</Nav.Link>
            <input 
              type="range" 
              className="custom-range" 
              id="array_size"
              min="4"
              max="100"
              defaultValue={this.state.size}
              onInput={() => this.onSizeChange()}
              />
            <Nav.Link href="">Sorting Speed</Nav.Link>
            <input 
              type="range" 
              className="custom-range" 
              id="speed"
              min="0"
              max="100"
              defaultValue={this.state.speed}
              onInput={() => this.onSpeedChange()}
              />
            <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
              <NavDropdown.Item 
                onClick={() => this.handleSelect("selectionSort")}>
                Selection Sort
              </NavDropdown.Item>
              <NavDropdown.Item 
                onClick={() => this.handleSelect("bubbleSort")}>
                Bubble Sort
              </NavDropdown.Item>
              <NavDropdown.Item 
                onClick={() => this.handleSelect("binaryInsertionSort")}>
                Binary Insertion Sort
              </NavDropdown.Item>
              <NavDropdown.Item 
                onClick={() => this.handleSelect("insertionSort")}>
                Insertion Sort
              </NavDropdown.Item>
              <NavDropdown.Item 
                onClick={() => this.handleSelect("mergeSort")}>
                Merge Sort
              </NavDropdown.Item>
              <NavDropdown.Item 
                onClick={() => this.handleSelect("quickSort")}>
                Quick Sort
              </NavDropdown.Item>
              <NavDropdown.Item 
                onClick={() => this.handleSelect("heapSort")}>
                  Heap Sort
              </NavDropdown.Item>
              <NavDropdown.Item 
                onClick={() => this.handleSelect("radixSort")}>
                Radix Sort
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#start" onClick={() => this.onStartSelected()}>Start</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
