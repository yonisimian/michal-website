import { Section } from '../others/Utils'

const FontsDemo = () => {
    const fonts = ['Gisha', 'Guttman Hatzvi', 'Guttman Kav-Light', 'Guttman-CourMir', 'Lucida Sans Unicode', 'Rod', 'Segoe UI Light']
    
    return (
        <Section>
            <h3>להלן משפחות הפונטים שבחרנו לאתר:</h3>
            {fonts.map(name => <FontName name={name} />)}
        </Section>
    )
}

const FontName = (props) => (
    <p style={{fontFamily: props.name}}>הפונט הזה נקרא <b>{props.name}</b> והוא נראה ככה: אבגדהוזחטיכלמנסעפצקרשת abcdefghijklmnopqrstuvwxyz</p>
)

export default FontsDemo