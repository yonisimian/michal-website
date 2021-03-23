import { Section } from '../others/Utils'

const Colors = () => {   
    return (
        <Section>
            <strong>להלן פלטת הצבעים שלנו:</strong>
            <Sample color="#1B3547" title="Logo's Font" />
            <Sample color="#6D7A78" title="Logo's Slogen" />
            <Sample color="#E9F1EF" title="Logo's Background" />
        </Section>
    )
}

const Sample = (props) => (
    <div>
        <h6>{props.title}: {props.color}</h6>
        <div style={{backgroundColor: props.color, height: "50px", width: "210px", textAlign: "center"}}>
            <span style={{color: "white"}}>white text</span>
            <br/>
            <span style={{color: "black"}}>black text</span>
        </div>
        <br/>
    </div>
)

export default Colors