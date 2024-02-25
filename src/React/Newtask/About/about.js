import "./about.css"
import img from "../Images/nature.jpg"
import cover from "../Images/cover.jpg"
import {FaArrowRight} from "react-icons/fa"
function About() {
    return <div className="about">
        <div className="img">
            <img src={img} alt="404" />
        </div>
        <div className="cont">
          <div className="inner">
                <h4>About Us</h4>
                <h1>Welcome to our <span>Travels</span></h1>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                <div className="section1">
                    <p><FaArrowRight className="i"/>First Class Flights</p>
                    <p><FaArrowRight className="i"/>5 Star Accommodations</p>
                    <p><FaArrowRight className="i"/>150 Premium City Tours</p>
                </div>
                <div className="section2">
                    <p><FaArrowRight className="i"/>Handpicked Hotels</p>
                    <p><FaArrowRight className="i"/>Latest Model Vehicles</p>
                    <p><FaArrowRight className="i"/>24/7 Service</p>
                </div>
                <button>Read more</button>
          </div>
        </div>
        <div className="cover">
            <img src={cover} alt="404"/>
        </div>
    </div>
}
export default About