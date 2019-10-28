import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import { connect } from "react-redux";

import "./navbar.min.css";

class NavBar extends Component {
  componentDidMount() {
    this.props.arrayChanged(this.props.size);
  }

  sizeChange = () => {
    this.props.arrayChanged(document.getElementById("array_size").value);
  };

  speedChange = () => {
    this.props.speedChanged(document.getElementById("speed").value);
    console.log(`+${this.props.speed}%`);
  };

  startSelected = () => {
    console.log(
      `Start ${this.props.algorithm} with size = ${this.props.size}, speed = +${this.props.speed}%`
    );
  };

  render() {
    const { size, speed, algorithmChanged } = this.props;

    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar fixed"
      >
        <Navbar.Brand href="">
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
                min="5"
                max={Math.floor((window.screen.width - 222) / 3.33)}
                defaultValue={size}
                onInput={() => this.sizeChange()}
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
                onInput={() => this.speedChange()}
              />
            </OverlayTrigger>
            <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
              <NavDropdown.Item
                onClick={() => algorithmChanged("selectionSort")}
              >
                Selection Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => algorithmChanged("bubbleSort")}>
                Bubble Sort
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => algorithmChanged("binaryInsertionSort")}
              >
                Binary Insertion Sort
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => algorithmChanged("insertionSort")}
              >
                Insertion Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => algorithmChanged("mergeSort")}>
                Merge Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => algorithmChanged("quickSort")}>
                Quick Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => algorithmChanged("heapSort")}>
                Heap Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => algorithmChanged("radixSort")}>
                Radix Sort
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#start" onClick={() => this.startSelected()}>
              Start
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  size: state.array.size,
  speed: state.array.speed,
  algorithm: state.algorithm
});

const mapDispathToProps = dispatch => {
  return {
    arrayChanged: size => {
      dispatch({ type: "ARRAY_CHANGE", size: size });
    },
    algorithmChanged: algorithm => {
      dispatch({ type: "ALGORITHM_SELECT", algorithm: algorithm });
    },
    speedChanged: speed => {
      dispatch({ type: "SPEED_CHENGE", speed: speed });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(NavBar);
