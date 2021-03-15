import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container } from 'react-bootstrap'
import './footer.css'

export const Header = () => (
    <Jumbotron fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>Welcome</h1>
            <p>I am Michal Simyan and this is my website</p>
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
            <li className="list-inline-item"><Link to="/">Home</Link></li>
            <li className="list-inline-item"><Link to="/">About</Link></li>
            <li className="list-inline-item"><Link to="/">Contact</Link></li>
            <li className="list-inline-item"><Link to="/Blog">Blog</Link></li>
            <li className="list-inline-item"><Link to="#">Privacy Policy</Link></li>
        </ul>
        <p className="copyright">Yehonatan Simian © 2021</p>
    </footer>
)