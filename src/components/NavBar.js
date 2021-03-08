import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

export const NavBar = () => (
<Navbar expand="lg">
    <Navbar.Brand href="/">Michal Simyan</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
        <Nav.Item>
        <Nav.Link>
            <Link to="/">Home</Link>
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link>
            <Link to="/about">About</Link>
        </Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link>
            <Link to="/contact">Contact</Link>
        </Nav.Link>
        </Nav.Item>
    </Nav>
    </Navbar.Collapse>
</Navbar>
)