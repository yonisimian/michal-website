import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    const slideToHome = () => document.getElementById("homeSection")?.scrollIntoView({behavior: "smooth"})
    const slideToAbout = () => document.getElementById("aboutSection")?.scrollIntoView({behavior: "smooth"})
    const slideToContact = () => document.getElementById("contactSection")?.scrollIntoView({behavior: "smooth"})

    return (
        <Navbar variant="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">Michal Simyan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link>
                    <Link to="/">Home</Link>
                    {/* <a onClick={slideToHome}>Home</a> */}
                </Nav.Link>
                <Nav.Link>
                    <a onClick={slideToAbout}>About</a>
                </Nav.Link>
                {/* <NavDropdown title={<span className="text-dark">Dropdown</span>} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link>
                    <Link to="/">סדנאות ריצה</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/">אימוני כושר לארגונים</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/">קבוצות ריצה למתחילים</Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="/Blog">Blog</Link>
                </Nav.Link>
                <Nav.Link>
                    <a onClick={slideToContact}>Contact Us</a>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;