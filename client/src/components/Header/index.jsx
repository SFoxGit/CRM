import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top">
      <Navbar.Brand className="brand" href="/">C R M</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/about">Customers</Nav.Link>
          {/* <NavDropdown title="Work" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/work">All Projects</NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link href="/resume">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
