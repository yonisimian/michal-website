import React from 'react'
import {Jumbotron, Container} from 'react-bootstrap'

const Home = () => (
    <Jumbotron fluid style={{backgroundColor: "transparent"}}>
        <Container>
            <h1>ברוכים הבאים!</h1>
            <p>אני מיכל סימיאן וזה האתר שלי</p>
        </Container>
    </Jumbotron>
)

export default Home;