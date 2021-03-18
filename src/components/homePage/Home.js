import React from 'react'
import Welcome from './Welcome'
import About from './About'
import Contact from './Contact'

const Home = () => {
    return (
        <>
            <Welcome />
            <About />
            <section id="contactSection" style={{backgroundColor: "#E6E72E"}}>
                <Contact />
            </section>
        </>
    )
}

export default Home;