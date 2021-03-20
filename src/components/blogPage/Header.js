import { Section } from '../others/Utils'

const Header = (props) => (
    <Section id="blogHeader" backgroundColor="#ddd">
        <h1>ברוכים הבאים!</h1>
        <p>אני מיכל סימיאן וזה <a href="#Articles" onClick={props.gotoBlog}>הבלוג</a> שלי</p>
        <p>
        הרצאת טד
https://www.ted.com/talks/wendy_suzuki_the_brain_changing_benefits_of_exercise/transcript

השפעת פעילות גופנית על תפקודי מוח
כנ"ל על דיכאון
תמונה של סריקת מוח לפני ואחרי פעילות גופנית

        </p>
    </Section>
)

export default Header