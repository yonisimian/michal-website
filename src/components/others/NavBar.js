import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar/*, NavDropdown*/, Image } from 'react-bootstrap';
import logo from '../../assets/logo-monochrome.svg'
import { scrollToElementID } from './Utils'

const NavBar = () => {

    const scrollToHome = () => scrollToElementID("homeSection")
    const scrollToAbout = () => scrollToElementID("aboutSection")
    const scrollToContact = () => scrollToElementID("contactSection")
    const scrollToTopBlog = () => scrollToElementID("blogSection")

    return (
        <Navbar variant="light" expand="lg" sticky="top">
            {/* <Navbar.Brand href="/">Michal Simyan</Navbar.Brand> */}
            <Navbar.Brand href="/"><Image src={logo} alt="Michal Simyan" className="App-logo" /></Navbar.Brand>
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
                <NavLink to="/">Running Workshops</NavLink>
                <NavLink to="/">Fitness training for organizations</NavLink>
                <NavLink to="/">Running groups for beginners</NavLink>
                <NavLink to="/Blog" onClick={scrollToTopBlog}>Blog</NavLink>
                <NavLink to="/" onClick={scrollToContact}>Contact Us</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;