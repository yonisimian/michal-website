import React from 'react';
import { Jumbotron, Container, Image } from 'react-bootstrap';

export const Header = () => (
    <Jumbotron fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>Welcome</h1>
            <p>I am Michal Simyan and this is my website</p>
        </Container>
    </Jumbotron>
)

export const Footer2 = () => (
    <footer>
        <Jumbotron fluid className="jumbo footer">
            <div className="overlay"></div>
            <Container>
                <h4>copyright and shit</h4>
                <p>here are some <a href="/">links</a> to places</p>
            </Container>
        </Jumbotron>
    </footer>
)

export const Footer = () => (
    <footer>
        <div class="social">
            <a href="#"><i className="icon ion-social-instagram"></i></a>
            <a href="#"><i className="icon ion-social-snapchat"></i></a>
            <a href="#"><i className="icon ion-social-twitter"></i></a>
            <a href="#"><i className="icon ion-social-facebook" /></a>
        </div>
        <ul class="list-inline">
            <li class="list-inline-item"><a href="/">Home</a></li>
            <li class="list-inline-item"><a href="/About">About</a></li>
            <li class="list-inline-item"><a href="/Contact">Contact</a></li>
            <li class="list-inline-item"><a href="#">Terms</a></li>
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        </ul>
        <p class="copyright">Yehonatan Simian © 2021</p>
    </footer>
)