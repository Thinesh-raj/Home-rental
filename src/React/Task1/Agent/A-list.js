import {FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa"
import "./A-list.css"
function Alist(p){
    return <div className="Alist">
        <img src={p.img} alt="404"/>
        <div className="al-cont">
            <h3>Full Name</h3>
            <small>Designation</small>
        </div>
        <div className="Afloat fb"><FaFacebookF className="icon"/></div>
        <div className="Afloat tw"><FaTwitter className="icon"/></div>
        <div className="Afloat in"><FaInstagram className="icon"/></div>
    </div>
}
export default Alist