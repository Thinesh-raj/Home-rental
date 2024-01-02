import "./client.css"
import {FaArrowLeft,FaArrowRight} from "react-icons/fa"
import bg from "../Images/testimonial-1.jpg"
import bg1 from "../Images/testimonial-2.jpg"
import Temp from "./temp"
function Client(){
    return <div className="client">
<h1>Our Clients Say!</h1>
<p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
<div className="template">
<Temp img={bg}/>
<Temp img={bg1}/>
</div>
<div className="left"><FaArrowLeft className="icon"/></div>
<div className="right"><FaArrowRight className="icon"/></div>
    </div>
    }
    export default Client