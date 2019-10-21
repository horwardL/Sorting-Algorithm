import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

import "./navbar.min.css";

class NavBar extends Component {
  render() {
    const {
      size,
      speed,
      onAlgorithmSelect,
      onSizeChange,
      onSpeedChange,
      onStartSelected
    } = this.props;

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
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-size">{size}</Tooltip>}
            >
              <input
                type="range"
                className="custom-range"
                id="array_size"
                min="4"
                max="520"
                defaultValue={size}
                onInput={() => onSizeChange()}
              />
            </OverlayTrigger>
            <Nav.Link href="">Sorting Speed</Nav.Link>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-size">+{speed}%</Tooltip>}
            >
              <input
                type="range"
                className="custom-range"
                id="speed"
                min="0"
                max="100"
                defaultValue={speed}
                onInput={() => onSpeedChange()}
              />
            </OverlayTrigger>
            <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
              <NavDropdown.Item
                onClick={() => onAlgorithmSelect("selectionSort")}
              >
                Selection Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onAlgorithmSelect("bubbleSort")}>
                Bubble Sort
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => onAlgorithmSelect("binaryInsertionSort")}
              >
                Binary Insertion Sort
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => onAlgorithmSelect("insertionSort")}
              >
                Insertion Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onAlgorithmSelect("mergeSort")}>
                Merge Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onAlgorithmSelect("quickSort")}>
                Quick Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onAlgorithmSelect("heapSort")}>
                Heap Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => onAlgorithmSelect("radixSort")}>
                Radix Sort
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#start" onClick={() => onStartSelected()}>
              Start
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
