import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './item.css'

const Item = (props) => {
    return (
        <Card style={{backgroundColor: props.color}}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.summary}</Card.Text>
                <Button variant="primary" onClick={props.setArticle}>To The Article -&gt;</Button>
            </Card.Body>
        </Card>
    )
}

export default Item