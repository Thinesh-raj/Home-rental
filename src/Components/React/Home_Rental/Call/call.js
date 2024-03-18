import bg from "../Images/call-to-action.jpg"
import {FaCalendarDay,FaPhoneAlt} from "react-icons/fa"
import "./call.css"
function Call() {
    return <div className="call">
        <div className="C-outer">
            <div className="C-inner">
                <div className="C-img">
                <img src={bg} alt="404"/>
                </div>
                <div className="C-cont">
                <h1>Contact With Our Certified Agent</h1>
                <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/"><FaPhoneAlt className="phn"/>Make A Call</a>
                <a className="C-a" href=""><FaCalendarDay className="day"/>Get Appointment</a>
                </div>
                </div>
        </div>
    </div>
}
export default Call