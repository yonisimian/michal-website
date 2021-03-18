import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import CloseButton from 'react-bootstrap/CloseButton'
import { Section } from '../others/Utils'

const Article = (props) => (
    <Section id="blogSection">
        <CloseButton onClick={props.closeArticle}>Close</CloseButton>
        <ResponsiveEmbed>
            <iframe title="article" scrolling="no" /*style={{border:"1px solid black"}}*/ src={props.src}></iframe>
        </ResponsiveEmbed>
    </Section>
)

export default Article