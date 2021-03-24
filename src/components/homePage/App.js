import Welcome from './Welcome'
import About from './About'
import Contact from './Contact'
import ParallaxImage from '../others/ParallaxImage'
// import image1 from '../../assets/demoBG.jpg'
import image2 from '../../assets/demo2.jpg'
import image3 from '../../assets/demo3.jpg'
import image4 from '../../assets/demo4.jpg'
import image5 from '../../assets/demo5.jpg'

const Home = () => {
    return (
        <>
            <ParallaxImage image={image2} />
            <Welcome />
            <ParallaxImage image={image3} />
            <About />
            <ParallaxImage image={image4} />
            <Contact title="צרו איתנו קשר" />
            <ParallaxImage image={image5} />
        </>
    )
}

export default Home;