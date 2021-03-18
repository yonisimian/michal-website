import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container } from 'react-bootstrap'
import './utils.css'

export const Header = () => (
    <Jumbotron fluid className="jumbo">
        <Container>
            <h1>ברוכים הבאים!</h1>
            <p>אני מיכל סימיאן וזה האתר שלי</p>
        </Container>
    </Jumbotron>
)

export const Footer = () => (
    <footer>
        <div className="social">
            <Link to="#"><i className="icon ion-social-instagram"></i></Link>
            <Link to="#"><i className="icon ion-social-snapchat"></i></Link>
            <Link to="#"><i className="icon ion-social-twitter"></i></Link>
            <Link to="#"><i className="icon ion-social-facebook" /></Link>
        </div>
        <ul className="list-inline">
            <li className="list-inline-item"><Link to="/" onClick={() => scrollToElementID("homeSection")}>בית</Link></li>
            <li className="list-inline-item"><Link to="/" onClick={() => scrollToElementID("aboutSection")}>אודות</Link></li>
            <li className="list-inline-item"><Link to="/" onClick={() => scrollToElementID("contactSection")}>צרו קשר</Link></li>
            <li className="list-inline-item"><Link to="/Blog" onClick={() => scrollToElementID("blogHeader")}>בלוג</Link></li>
            <li className="list-inline-item"><Link to="#">מדיניות הפרטיות</Link></li>
        </ul>
        <p className="copyright">Yehonatan Simian © 2021</p>
    </footer>
)

const getNavbarHeight = () => {
    let nav = document.getElementsByClassName('navbar')[0]
    if (!nav)
        return

    let navHeight = parseFloat(window.getComputedStyle(nav).getPropertyValue('height'))
    return (navHeight) ?? 0
}

export const scrollToElementID = (id) => {
    const el = document.getElementById(id)
    if (el) {
        //el.scrollIntoView({behavior: "smooth"})
        window.scrollTo({top: el.offsetTop - getNavbarHeight() , behavior: "smooth"})
        return
    }

    const observer = new MutationObserver(() => {
        let el2 = document.getElementById(id)
        if (el2) {
            //el2.scrollIntoView({behavior: "smooth"})
            window.scrollTo({top: el2.offsetTop - getNavbarHeight(), behavior: "smooth"})
            observer.disconnect()
        }
    })
    observer.observe(document.body, {attributes: false, childList: true, subtree: true })
}

export const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"})