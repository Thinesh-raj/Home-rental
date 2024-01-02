import bg from "../Images/about.jpg"
import {FaCheck} from "react-icons/fa";
import "./about.css"
function About() {
    return <div className="bggreen">
        <div className="img">
            <img src={bg} />
        </div>
        <div className="cont">
            <h1>#1 Place To Find The Perfect Property</h1>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
            <p><FaCheck className="check"/>Tempor erat elitr rebum at clita</p>
            <p><FaCheck className="check"/>Aliqu diam amet diam et eos</p>
            <p className="mb"><FaCheck className="check"/>Clita duo justo magna dolore erat amet</p>
            <a href="">Read More</a>
        </div>
    </div >
}
export default About