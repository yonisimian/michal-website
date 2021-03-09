import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const NavBar = () => (
<Navbar variant="light" expand="lg">
    <Navbar.Brand href="/">Michal Simyan</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
        <Nav.Link>
            <Link to="/">Home</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to="/about">About</Link>
        </Nav.Link>
        <NavDropdown title={<span className="text-dark">Dropdown</span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link>
            <Link to="/">Blog</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to="/contact">Contact Us</Link>
        </Nav.Link>
    </Nav>
    </Navbar.Collapse>
</Navbar>
)