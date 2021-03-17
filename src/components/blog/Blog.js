import { useEffect, useState } from 'react'
import Article from './Article'
import Item from './Item'
import Pagination from '../others/Pagination'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Data from './demoDB.json'

const Blog = () => {
    let [article, setArticle] = useState()
    const [items, setItems] = useState(Data.articles) // later we fetch
    const [curPage, setCurPage] = useState(0)
    const [curSection, setCurSection] = useState(0)
    const itemsPerPage = 3
    const pagesPerSection = 5
    const pagination = <Pagination
                            items={items}
                            itemsPerPage={itemsPerPage}
                            curPage={curPage}
                            setCurPage={setCurPage}
                            pagesPerSection={pagesPerSection}
                            curSection={curSection}
                            setCurSection={setCurSection} />

    /*useEffect(() => {
        fetch('/getAllArticles')
        .then(res => res)
        .then(data => setItems(data))
    }, [])*/

    return (
        <section id="blogSection">
            {
                article ? <Article
                                src={article}
                                closeArticle={() => setArticle()}
                            />
            :
            <>
            <Row>
                <Col/>
                <Col>{pagination}</Col>
                <Col/>
            </Row>
            {items
            .filter((item, index) => index >= curPage * itemsPerPage && index < (curPage + 1) * itemsPerPage)
            .map((item, index) => {
                return (
                <>
                <Row>
                    <Col>
                        <Item
                            key={index}
                            title={item.title}
                            summary={item.summary}
                            createdAt={item.createdAt}
                            setArticle={() => setArticle(item.src)}/>
                    </Col>
                </Row>
                </>)
            })
            }
            <Row>
                <Col/>
                <Col>{pagination}</Col>
                <Col/>
            </Row>
            </>
            }
        </section>
    )
}

export default Blog;