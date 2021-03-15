import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const Main = () => {
    return (
        <>
            <section id="homeSection">
                <Home/>
            </section>
            <section id="aboutSection">
                <About/>
            </section>
            <section id="contactSection">
                <Contact/>
            </section>
        </>
    )
}

export default Main;