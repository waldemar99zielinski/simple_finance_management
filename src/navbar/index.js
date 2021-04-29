import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const index = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>Simple Finance Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>

            <Nav.Link href="/add-transaction">Add transaction</Nav.Link>

            <Nav.Link href="/stats">Stats</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default index;
