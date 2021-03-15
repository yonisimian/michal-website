import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import CloseButton from 'react-bootstrap/CloseButton'

const Article = (props) => (
    <section>
        <CloseButton onClick={props.closeArticle}>Close</CloseButton>
        <ResponsiveEmbed>
            <iframe /*style={{border:"1px solid black"}}*/ src={props.src}></iframe>
        </ResponsiveEmbed>
    </section>
)

export default Article