import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  OverlayTrigger,
  Tooltip,
  ButtonGroup,
  Button
} from "react-bootstrap";
import { connect } from "react-redux";

import setArray from "../../action/arrayAction";
import selectionSort from "../../action/algorithms/selectionSort";
import insertionSort from "../../action/algorithms/insertionSort";
import bubbleSort from "../../action/algorithms/bubbleSort";
import binaryInsertionSort from "../../action/algorithms/binaryInsertionSort";
import cocktailSort from "../../action/algorithms/cocktailSort";
import mergeSort from "../../action/algorithms/mergeSort";
import quickSort from "../../action/algorithms/quickSort";
import heapSort from "../../action/algorithms/heapSort";
import radixSort from "../../action/algorithms/radixSort";

import "./navbar.min.css";
import { TOGGLE_STATE, SHAPE_CHANGE, MODE_CHANGE } from "../../action/types";

class NavBar extends Component {
  componentDidMount() {
    this.props.arrayChanged(this.props.size);
  }

  sizeChange = () => {
    this.props.arrayChanged(document.getElementById("array_size").value);
  };

  speedChange = () => {
    this.props.speedChanged(document.getElementById("speed").value);
  };

  startSelected = () => {
    this.props.toggleState();
    switch (this.props.algorithm) {
      case "SELECTION_SORT":
        this.props.selection_sort();
        return;
      case "BUBBLE_SORT":
        this.props.bubble_sort();
        return;
      case "INSERTION_SORT":
        this.props.insertion_sort();
        return;
      case "BINARY_INSERTION_SORT":
        this.props.binary_insertion_sort();
        return;
      case "COCKTAIL_SORT":
        this.props.cocktail_sort();
        return;
      case "MERGE_SORT":
        this.props.merge_sort();
        return;
      case "QUICK_SORT":
        this.props.quick_sort();
        return;
      case "HEAP_SORT":
        this.props.heap_sort();
        return;
      case "RADIX_SORT":
        this.props.radix_sort();
        return;
      default:
        return;
    }
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
                max={Math.floor((window.screen.width - 222) / 3.11)}
                defaultValue={size}
                onInput={() => this.sizeChange()}
                disabled={this.props.curState}
              />
            </OverlayTrigger>
            <Nav.Link href="">Sorting Speed</Nav.Link>
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-size">+{speed}ms</Tooltip>}
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
                onClick={() => algorithmChanged("SELECTION_SORT")}
              >
                Selection Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => algorithmChanged("BUBBLE_SORT")}>
                Bubble Sort
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => algorithmChanged("INSERTION_SORT")}
              >
                Insertion Sort
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => algorithmChanged("BINARY_INSERTION_SORT")}
              >
                Binary Insertion Sort
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => algorithmChanged("COCKTAIL_SORT")}
              >
                Cocktail Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => algorithmChanged("MERGE_SORT")}>
                Merge Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => algorithmChanged("QUICK_SORT")}>
                Quick Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => algorithmChanged("HEAP_SORT")}>
                Heap Sort
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => algorithmChanged("RADIX_SORT")}>
                Radix Sort
              </NavDropdown.Item>
            </NavDropdown>
            <ButtonGroup aria-label="shape">
              <Button
                variant="dark"
                onClick={() => this.props.shapeChanged("bar")}
                disabled={this.props.curState}
              >
                Bar
              </Button>
              <Button
                variant="dark"
                onClick={() => this.props.shapeChanged("dot")}
                disabled={this.props.curState}
              >
                Dot
              </Button>
            </ButtonGroup>
            <ButtonGroup aria-label="mode">
              <Button
                variant="dark"
                onClick={() => {
                  this.props.modeChanged(true);
                }}
              >
                Normal Mode
              </Button>
              <Button
                variant="dark"
                onClick={() => {
                  this.props.modeChanged(false);
                }}
              >
                Kreygas Mode
              </Button>
            </ButtonGroup>
            <ButtonGroup aria-label="start-stop">
              <Button
                variant="dark"
                onClick={() => this.startSelected()}
                disabled={this.props.curState}
              >
                Start
              </Button>
              <Button
                variant="dark"
                onClick={() => this.props.toggleState()}
                disabled={!this.props.curState}
              >
                Stop
              </Button>
            </ButtonGroup>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = state => ({
  array: state.array.array,
  size: state.array.size,
  speed: state.speed,
  algorithm: state.algorithm,
  curState: state.curState
});

const mapDispathToProps = dispatch => {
  return {
    arrayChanged: size => {
      dispatch(setArray(size));
    },
    algorithmChanged: algorithm => {
      dispatch({ type: "ALGORITHM_SELECT", algorithm: algorithm });
    },
    speedChanged: speed => {
      dispatch({ type: "SPEED_CHENGE", speed: speed });
    },
    shapeChanged: shape => {
      dispatch({ type: SHAPE_CHANGE, shape: shape });
    },
    modeChanged: mode => {
      dispatch({ type: MODE_CHANGE, mode: mode });
    },
    toggleState: () => {
      dispatch({ type: TOGGLE_STATE });
    },
    selection_sort: () => {
      dispatch(selectionSort());
    },
    insertion_sort: () => {
      dispatch(insertionSort());
    },
    bubble_sort: () => {
      dispatch(bubbleSort());
    },
    binary_insertion_sort: () => {
      dispatch(binaryInsertionSort());
    },
    cocktail_sort: () => {
      dispatch(cocktailSort());
    },
    merge_sort: () => {
      dispatch(mergeSort());
    },
    quick_sort: () => {
      dispatch(quickSort());
    },
    heap_sort: () => {
      dispatch(heapSort());
    },
    radix_sort: () => {
      dispatch(radixSort());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(NavBar);
