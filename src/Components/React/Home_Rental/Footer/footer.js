import "./footer.css"
import bg1 from "../Images/property-1.jpg"
import bg2 from "../Images/property-2.jpg"
import bg3 from "../Images/property-3.jpg"
import bg4 from "../Images/property-4.jpg"
import bg5 from "../Images/property-5.jpg"
import bg6 from "../Images/property-6.jpg"
import {FaMapPin,FaPhoneAlt,FaEnvelope,FaFacebookF,FaTwitter,FaYoutube,FaLinkedinIn,FaAngleRight} from "react-icons/fa"


function Footer() {
    return <div className="footer">
        <div className="one">
            <h2>Get In Touch</h2>
            <p><FaMapPin className="f-icon"/> 023 Street, New York, USA</p>
            <p><FaPhoneAlt className="f-icon"/>+012 345 67890</p>
            <p><FaEnvelope className="f-icon"/>  mail@domain.com</p>
            <div className="icon">
            <span className="i1"><FaFacebookF className="social"/></span>
            <span className="i2"><FaTwitter className="social"/></span>
            <span className="i3"><FaYoutube className="social"/></span>
            <span className="i4"><FaLinkedinIn className="social"/></span>
            </div>
        </div>
        <div className="two">
            <h2>Quick Links</h2>
            <p><FaAngleRight className="t-r"/>About Us</p>
            <p><FaAngleRight className="t-r"/>Contact Us</p>
            <p><FaAngleRight className="t-r"/>Our Services</p>
            <p><FaAngleRight className="t-r"/>Privacy Policy</p>
            <p><FaAngleRight className="t-r"/>Terms & Conditions</p>
        </div>
        <div className="three">
            <h2>Photo Gallery</h2>
            <div className="foto">
                <img src={bg1} alt="404"/>
                <img src={bg2} alt="404"/>
                <img src={bg3} alt="404"/>
                <img src={bg4} alt="404"/>
                <img src={bg5} alt="404"/>
                <img src={bg6} alt="404"/>
            </div>
        </div>
        <div className="four">
            <h2>Newsletter</h2>
            <p>Dolor amet sit justo dolor  amet elitr clita ipsum elitr est.</p>
            <input placeholder="Your email"/>
            <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/" >SignUp</a>
        </div>
        <div className="five">
            <div className="five-1">
            <small className="small">©</small>
            <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/">Your Site Name</a>
            <small>, All Rights Reserved. Designed By </small>
            <a className="a-center" href="">HTML codex</a>
            </div>
            <div className="five-2">
            <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/" className="f-a m-l">Home</a>
            <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/" className="f-a b-s">Cookies</a>
            <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/" className="f-a b-s">Help</a>
            <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/" className="f-a b-s last">FAQs</a>
            </div>
        </div>
    </div>
}
export default Footer