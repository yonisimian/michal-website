import { Section } from '../others/Utils'
import { Form, Button } from 'react-bootstrap'

const Contact = (props) => (
    <Section id="contactSection" backgroundColor="#6D7A78">
        {props.title && <h2>{props.title}</h2>}
        <Form>
            <Form.Group controlId="formName">
                <Form.Label>שם מלא</Form.Label>
                <Form.Control type="name" placeholder="פלוני אלמוני" />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>כתובת אימייל</Form.Label>
                <Form.Control type="email" placeholder="example@gmail.com" />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group controlId="formPhone">
                <Form.Label>טלפון לחזרה</Form.Label>
                <Form.Control type="phone" placeholder="050-1234567" />
            </Form.Group>

            <Form.Group controlId="formText">
                <Form.Label>מלל חופשי</Form.Label>
                <Form.Control as="textarea" placeholder="רשמו כאן כל מה שמתחשק לכם..." />
            </Form.Group>
            <Button variant="secondary" type="submit">
                שלח/י
            </Button>
        </Form>
    </Section>
)

export default Contact;