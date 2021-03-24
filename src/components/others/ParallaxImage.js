import { Parallax } from 'react-parallax'

const ParallaxImage = (props) => (
    <Parallax
        //blur={{ min: -15, max: 15 }}
        bgImage={props.image}
        strength={500}
    >
        {props.children ?? <div style={{ height: props.height ?? "100vh" }} />}
    </Parallax>
)

export default ParallaxImage;