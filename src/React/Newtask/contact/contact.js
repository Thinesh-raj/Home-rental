import "./contact.css";
import bg1 from "../Images/destination-2.jpg"
import bg2 from "../Images/destination-3.jpg"
import bg3 from "../Images/package-1.jpg"
import bg5 from "../Images/package-2.jpg"
import bg6 from "../Images/package-3.jpg"
import bg4 from "../Images/images.jpeg"
import { FaRegCheckCircle,FaMapPin,FaPhoneAlt,FaEnvelope,FaFacebookF,FaTwitter,FaYoutube,FaLinkedinIn,FaAngleRight } from "react-icons/fa"
function Contact() {
  return <div className="contact">
    <div className="form">
      <div className="form-cont">
        <p className="green">MEGA OFFER</p>
        <h1><span>30% OFF</span> For weekdays</h1>
        <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum</p>
        <p>ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat</p>
        <p>ut sed diam sea ipsum est dolor</p>
        <p className="list"><FaRegCheckCircle className="check" />Labore eos amet dolor amet diam</p>
        <p className="list"><FaRegCheckCircle className="check" />Etsea et sit dolor amet ipsum</p>
        <p className="list"><FaRegCheckCircle className="check" />Diam dolor diam elitripsum vero.</p>
      </div>
      <div className="formbox">
        <h1>Sign Up Now</h1>
        <input placeholder="Your Name" />
        <input placeholder="Your Email" />
        <input placeholder="Select Destination" />
        <button>Sign Up</button>
      </div>
    </div>
    <div className="footer">
      <div className="one1">
        <h2>Get In Touch</h2>
        <p><FaMapPin className="f-icon" /> 023 Street, New York, USA</p>
        <p><FaPhoneAlt className="f-icon" />+012 345 67890</p>
        <p><FaEnvelope className="f-icon" />  mail@domain.com</p>
        <div className="icon">
          <span className="i1"><FaFacebookF className="social" /></span>
          <span className="i2"><FaTwitter className="social" /></span>
          <span className="i3"><FaYoutube className="social" /></span>
          <span className="i4"><FaLinkedinIn className="social" /></span>
        </div>
      </div>
      <div className="two2">
        <h2>Quick Links</h2>
        <p><FaAngleRight className="t-r" />About Us</p>
        <p><FaAngleRight className="t-r" />Contact Us</p>
        <p><FaAngleRight className="t-r" />Our Services</p>
        <p><FaAngleRight className="t-r" />Privacy Policy</p>
        <p><FaAngleRight className="t-r" />Terms & Conditions</p>
      </div>
      <div className="three3">
        <h2>Photo Gallery</h2>
        <div className="foto">
          <img src={bg1} alt="404" />
          <img src={bg2} alt="404" />
          <img src={bg3} alt="404" />
          <img src={bg4} alt="404" />
          <img src={bg5} alt="404" />
          <img src={bg6} alt="404" />
        </div>
      </div>
      <div className="four">
        <h2>Newsletter</h2>
        <p>Dolor amet sit justo dolor  amet elitr clita ipsum elitr est.</p>
        <input placeholder="Your email" />
        <a href="404" >SignUp</a>
      </div>
      <div className="five">
        <div className="five-1">
          <small className="small">©</small>
          <a href="404">Your Site Name</a>
          <small>, All Rights Reserved. Designed By </small>
          <a className="a-center" href="404">HTML codex</a>
        </div>
        <div className="five-2">
          <a href="404" className="f-a m-l">Home</a>
          <a href="404" className="f-a b-s">Cookies</a>
          <a href="404" className="f-a b-s">Help</a>
          <a href="404" className="f-a b-s last">FAQs</a>
        </div>
      </div>
    </div>
  </div >
}
export default Contact