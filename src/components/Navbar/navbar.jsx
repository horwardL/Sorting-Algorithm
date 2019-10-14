import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class NavBar extends Component {
  handleSelect = eventKey => alert(`selected ${eventKey}`);

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        onSelect={this.handleSelect}
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
            <input type="range" className="custom-range" id="array_size" />
            <Nav.Link href="">Sorting Speed</Nav.Link>
            <input type="range" className="custom-range" id="sorting_speed" />
            <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#Selection_Sort">
                Selection Sort
              </NavDropdown.Item>
              <NavDropdown.Item href="#Bubble_Sort">
                Bubble Sort
              </NavDropdown.Item>
              <NavDropdown.Item href="#Binary_Insertion_Sort">
                Binary Insertion Sort
              </NavDropdown.Item>
              <NavDropdown.Item href="#Insertion_Sort">
                Insertion Sort
              </NavDropdown.Item>
              <NavDropdown.Item href="#Merge_Sort">Merge Sort</NavDropdown.Item>
              <NavDropdown.Item href="#Quick_Sort">Quick Sort</NavDropdown.Item>
              <NavDropdown.Item href="#Heap_Sort">Heap Sort</NavDropdown.Item>
              <NavDropdown.Item href="#Radix_Sort">Radix Sort</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#start">Start</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
