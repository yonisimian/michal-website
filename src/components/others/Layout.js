import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap'
import NavBar from './NavBar'
import { Footer, getNavbarHeight } from './Utils'

const Layout = (props) => {
    useEffect(() => {
        document.getElementsByTagName('body')[0].style.scrollPaddingTop = (getNavbarHeight() - 5) + "px"
    }, [])

    return (
        <>
            <NavBar />
            <>
                {/* <Header /> */}
                <Container className="main-container">
                    {props.children}
                </Container>
                <Footer />
            </>
        </>
    )
}

export default Layout;