import { useEffect, useState } from 'react'
import Item from './Item'
import Pagination from '../others/Pagination'
import { Section } from '../others/Utils'
import { Row, Col } from 'react-bootstrap'
import Data from './demoDB.json'
import "./Blog.css"

const ArtList = (props) => {
    const [items, setItems] = useState([])
    const [curPage, setCurPage] = useState(0)
    const [curSection, setCurSection] = useState(0)
    const itemsPerPage = 3
    const pagesPerSection = 5
    const data = { items, itemsPerPage, curPage, setCurPage, pagesPerSection, curSection, setCurSection }

    useEffect(() => {
        // fetch('/getAllArticles')
        // .then(res => res)
        // .then(data => setItems(data))
        setItems(Data.articles)
    }, [])

    return (
        <Section id="blogSection">
            <Row>
                <Col/>
                <Col><Pagination data={data}/></Col>
                <Col/>
            </Row>

            {items
            .filter((item, index) => index >= curPage * itemsPerPage && index < (curPage + 1) * itemsPerPage)
            .map((item, index) => (
                <Row>
                    <Col>
                        <Item
                            key={index}
                            title={item.title}
                            summary={item.summary}
                            createdAt={item.createdAt}
                            setArticle={() => props.setArticle(item.src)}/>
                    </Col>
                </Row>
               )
            )}

            <Row>
                <Col/>
                <Col><Pagination data={data}/></Col>
                <Col/>
            </Row>
        </Section>
    )
}

export default ArtList;