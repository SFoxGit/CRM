import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import { useHistory } from "react-router-dom";


export default function Header() {
  const history = useHistory()

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
      <Navbar.Brand className="brand" onClick={() => history.push("/")} style={{color: "black", cursor: "pointer"}}>C R M</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={() => history.push("/customers")} style={{color: "black" }}>Customers</Nav.Link>
          {/* <NavDropdown title="Work" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/work">All Projects</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link onClick={() => history.push("/login")} style={{color: "black"}}>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
