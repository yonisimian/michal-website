import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { scrollToElementID } from '../others/Utils'

const Item = (props) => {
    const [classes, setClasses] = useState('')
    const readArticle = () => {
        props.setArticle()
        scrollToElementID("blogSection")
    }

    return (
        <Card className={classes} style={{backgroundColor: props.color}}>
            <Card.Img variant="top" src="" />
            <Card.Body onDoubleClick={() => setClasses(classes === '' ? 'box bounce-7' : '')}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.summary}</Card.Text>
                <Button variant="outline-secondary" onClick={readArticle}>לקריאת המאמר -&gt;</Button>
            </Card.Body>
            <Card.Text className="createdAt">{props.createdAt}</Card.Text>
        </Card>
    )
}

export default Item