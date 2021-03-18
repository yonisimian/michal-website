import { useState } from 'react'
import Header from './Header'
import Article from './Article'
import ArtList from './ArtList'
import { scrollToElementID } from '../others/Utils'
import "./Blog.css"

const Blog = () => {
    const [curArticle, setCurArticle] = useState()
    const gotoBlog = () => {
        setCurArticle()
        scrollToElementID("blogSection")
    }

    return (
        <>
            <Header gotoBlog={gotoBlog} />
            {curArticle ?
                <Article
                    src={curArticle}
                    closeArticle={gotoBlog}
                />
                :
                <ArtList article={curArticle} setArticle={setCurArticle} />
            }
        </>
    )
}

export default Blog;