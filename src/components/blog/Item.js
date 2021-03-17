import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './item.css'

const Item = (props) => {
    const [classes, setClasses] = useState('')

    const switchClasses = () => {
      setClasses(classes === '' ? 'box bounce-7' : '')
    }
    
    return (
        <Card className={classes} style={{backgroundColor: props.color}}>
            <Card.Img variant="top" src="" />
            <Card.Body onDoubleClick={switchClasses}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.summary}</Card.Text>
                <Button variant="primary" onClick={props.setArticle}>לקריאת המאמר -&gt;</Button>
            </Card.Body>
            <Card.Text className="createdAt">{props.createdAt}</Card.Text>
        </Card>
    )
}

export default Item