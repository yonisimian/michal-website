import React from 'react';
import { Container } from 'react-bootstrap';
import { NavBar } from './NavBar'
import { Header, Footer } from './Utils'

export const Layout = (props) => (
    <>
        <NavBar />
        <Header />
        <Container>
            {props.children}
        </Container>
        <Footer />
    </>
)