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
            title: "כותרת המאמר",
            summary: "תת כותרת או תיאור המאמר בשני משפטים",
            src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true"
        },
        { title: "כותרת המאמר השני", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "כותרת המאמר השלישי", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Fourth כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Fifth כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Sixth כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Seventh כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Eighth כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "Ninth כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "10 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "11 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "12 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "13 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "14 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "15 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "16 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "17 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "18 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "19 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "20 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "21 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "22 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "23 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "24 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "25 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "26 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "27 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "28 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "29 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "30 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "31 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" },
        { title: "32 כותרת המאמר", summary: "תת כותרת או תיאור המאמר בשני משפטים", src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true" }
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