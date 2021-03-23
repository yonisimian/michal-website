import React from 'react'
import Welcome from './Welcome'
import About from './About'
import Contact from './Contact'

const Home = () => {
    return (
        <>
            <Welcome />
            <About />
            <Contact title="צרו איתנו קשר" />
        </>
    )
}

export default Home;