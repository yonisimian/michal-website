import { useState } from 'react'
import Article from './Article'
import Item from './Item'
import Container from 'react-bootstrap/Container'

const Blog = () => {
    let [article, setArticle] = useState();
    let items = {
        1: {
            title: "Article's Title",
            summary: "a short preview of the article's content",
            src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true"
        },
        2: {
            title: "Article's Title",
            summary: "a short preview of the article's content",
            src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true"
        },
        3: {
            title: "Article's Title",
            summary: "a short preview of the article's content",
            src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true"
        },
        4: {
            title: "Article's Title",
            summary: "a short preview of the article's content",
            src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true"
        },
        5: {
            title: "Article's Title",
            summary: "a short preview of the article's content",
            src: "https://docs.google.com/document/d/e/2PACX-1vRozLnYZYaToNoi6lzXTZDA2bGOrGX9bW2VFoOUmCi8t4zLvjUvrmExp6VjV_eW9HfcUUzeBgPt36C8/pub?embedded=true"
        }
    }
    console.log("items is a " + typeof items)

    return (
        <section>
            {
                article ? <Article
                                src={article}
                                closeArticle={() => setArticle()}
                            />
            :
                <Container fluid>
                    {Object.values(items)?.map(item => <Item
                        title={item.title}
                        summary={item.summary}
                        setArticle={() => setArticle(item.src)}
                    />)}
                </Container>
            }
        </section>
    )
}

export default Blog;