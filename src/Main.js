import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

const Main = () => {
    return (
        <>
            <section id="homeSection" style={{backgroundColor: "#82E4D5"}}>
                <Home/>
            </section>
            <section id="aboutSection" style={{backgroundColor: "#FDD0C1"}}>
                <About/>
            </section>
            <section id="contactSection" style={{backgroundColor: "#E6E72E"}}>
                <Contact/>
            </section>
        </>
    )
}

export default Main;