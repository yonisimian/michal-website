import React from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar'
import { Footer } from './Utils'

const Layout = (props) => (
    <>
        <NavBar />
        {/* <Header /> */}
        <Container className="main-container">
            {props.children}
        </Container>
        <Footer />
    </>
)

export default Layout;