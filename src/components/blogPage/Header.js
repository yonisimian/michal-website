import { Section } from '../others/Utils'

const Header = (props) => (
    <Section id="blogHeader" backgroundColor="#ddd">
        <h1>ברוכים הבאים!</h1>
        <p>אני מיכל סימיאן וזה <a href="#Articles" onClick={props.gotoBlog}>הבלוג</a> שלי</p>
    </Section>
)

export default Header