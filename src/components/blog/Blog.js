import { useEffect, useState } from 'react'
import Header from './BlogHeader'
import Article from './Article'
import Item from './Item'
import Pagination from '../others/Pagination'
import { Container, Row, Col } from 'react-bootstrap'
import Data from './demoDB.json'
import "./Blog.css"

const Blog = () => {
    let [article, setArticle] = useState()
    const [items, setItems] = useState(Data.articles) // later we fetch
    const [curPage, setCurPage] = useState(0)
    const [curSection, setCurSection] = useState(0)
    const itemsPerPage = 3
    const pagesPerSection = 5

    const data = { items, itemsPerPage, curPage, setCurPage, pagesPerSection, curSection, setCurSection }

    /*useEffect(() => {
        fetch('/getAllArticles')
        .then(res => res)
        .then(data => setItems(data))
    }, [])*/

    return (
        <>
            <span id="blogHeader">
                <Header />
            </span>
            <section id="blogSection" style={{padding: "0"}}>
                <Container>
                {
                    article ? <Article
                                    src={article}
                                    closeArticle={() => setArticle()}
                                />
                    :
                    <>
                    <Row>
                        <Col/>
                        <Col>
                            <Pagination data={data} />
                        </Col>
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
                        <Col>
                            <Pagination data={data} />
                        </Col>
                        <Col/>
                    </Row>
                    </>
                }
                </Container>
            </section>
        </>
    )
}

export default Blog;