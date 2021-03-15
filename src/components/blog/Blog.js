import { useState } from 'react'
import Article from './Article'
import Item from './Item'
import Pagination from '../others/Pagination'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Blog = () => {
    let [article, setArticle] = useState();
    let data = [
        {
            title: "First Article's Title",
            summary: "a short preview of the article's content",
            src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true"
        },
        { title: "Second Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Third Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Fourth Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Fifth Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Sixth Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Seventh Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Eighth Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Ninth Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "10 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "11 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "12 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "13 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "14 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "15 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "16 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "17 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "18 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "19 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "20 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "21 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "22 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "23 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "24 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "25 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "26 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "27 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "28 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "29 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "30 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "31 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "32 Article's Title", summary: "a short preview of the article's content", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" }
    ]
    const items = Array.from(data)
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
                {pagination}
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
                            setArticle={() => setArticle(item.src)}/>
                    </Col>
                </Row>
                </>)
            })
            }
            <Row>
                <Col/>
                {pagination}
                <Col/>
            </Row>
            </>
            }
        </section>
    )
}

export default Blog;