import { FaPhone } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"
import { FaSearchLocation } from "react-icons/fa"
import bg from "../../Images/f1.png"
import bg1 from "../../Images/f2.png"
import bg2 from "../../Images/f3.png"
import bg3 from "../../Images/f4.png"
import bg4 from "../../Images/f5.png"
import bg5 from "../../Images/f6.png"
import "./footer.css"

function Footer(){
    return<div id="footer">
        <div id="foot1"> 
            <span><FaPhone className="i"/><span className="span">Call : +01 123455678990</span></span>
            <span><FaMailBulk className="i"/><span className="span">Email : mail@domain.com</span></span>
            <span><FaSearchLocation className="i icon"/><span className="span">Location</span></span>
        </div>
        <div id="foot2">
            <div id="one">
                <h3>OUICK LINKS</h3>
                <p>Home</p>
                <p>About</p>
                <p>Furniture</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </div>
            <div id="two"> 
            <h2>INSTAGRAM FEEDS</h2>
            <div><img src={bg}/></div>
            <div><img src={bg1}/></div>
            <div><img src={bg2}/></div>
            <div><img src={bg3}/></div>
            <div><img src={bg4}/></div>
            <div><img src={bg5}/></div>
            </div>
            <div id="three">
                <h2>SIGN UP TO OUR NEWSLETTER</h2>
                <input placeholder="Enter Your Email"/>
                <button>Subscribe</button>
            </div>
        </div>

    </div>
}
export default Footer