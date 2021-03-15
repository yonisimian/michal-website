import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar/*, NavDropdown*/ } from 'react-bootstrap';

const NavBar = () => {
    const scrollToHome = () => document.getElementById("homeSection")?.scrollIntoView({behavior: "smooth"})
    const scrollToAbout = () => document.getElementById("aboutSection")?.scrollIntoView({behavior: "smooth"})
    const scrollToContact = () => document.getElementById("contactSection")?.scrollIntoView({behavior: "smooth"})
    const scrollToTopBlog = () => document.getElementsByTagName("section")[0]?.scrollIntoView({behavior: "smooth"})

    return (
        <Navbar variant="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">Michal Simyan</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavLink to="/" onClick={scrollToHome}>Home</NavLink>
                <NavLink to="/" onClick={scrollToAbout}>About</NavLink>
                {/* <NavDropdown title={<span className="text-dark">Dropdown</span>} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <NavLink to="/">סדנאות ריצה</NavLink>
                <NavLink to="/">אימוני כושר לארגונים</NavLink>
                <NavLink to="/">קבוצות ריצה למתחילים</NavLink>
                <NavLink to="/Blog" onClick={scrollToTopBlog}>Blog</NavLink>
                <NavLink to="/" onClick={scrollToContact}>Contact Us</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;