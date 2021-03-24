import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar/*, NavDropdown, Image*/ } from 'react-bootstrap';
// import logo from '../../assets/logo-monochrome.svg'
import { scrollToElementID, scrollToTop } from './Utils'

const NavBar = () => {

    const scrollToHome = () => scrollToElementID("homeSection")
    const scrollToAbout = () => scrollToElementID("aboutSection")
    const scrollToContact = () => scrollToElementID("contactSection")
    const scrollToTopBlog = () => scrollToElementID("blogHeader")

    return (
        <Navbar variant="dark" expand="lg" sticky="top">
            <Navbar.Brand onClick={() => scrollToTop()}>
                <NavLink to="/">מיכל סימיאן</NavLink>
                {/* <Image src={logo} alt="מיכל סימיאן" className="App-logo" /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavLink to="/#Home" onClick={scrollToHome}>בית</NavLink>
                <NavLink to="/#About" onClick={scrollToAbout}>אודות</NavLink>
                {/* <NavDropdown title={<span className="text-dark">Dropdown</span>} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <NavLink to="/page1" onClick={scrollToTop}>סדנאות ריצה</NavLink>
                <NavLink to="/page2" onClick={scrollToTop}>אימוני כושר לארגונים</NavLink>
                <NavLink to="/page3" onClick={scrollToTop}>קבוצות ריצה למתחילים</NavLink>
                <NavLink to="/Blog" onClick={scrollToTopBlog}>בלוג</NavLink>
                <NavLink to="/#Contact" onClick={scrollToContact}>צרו קשר</NavLink>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;