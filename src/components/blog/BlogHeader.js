import {Container, Jumbotron} from 'react-bootstrap'
import { scrollToElementID } from '../others/Utils'

const Header = () => (
    <Jumbotron fluid>
        <Container>
            <h1>ברוכים הבאים!</h1>
            <p>אני מיכל סימיאן וזה <a href="#" onClick={() => scrollToElementID("blogSection")}>הבלוג</a> שלי</p>
        </Container>
    </Jumbotron>
)

export default Header