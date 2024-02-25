
import "./block.css";
import { FaMapPin, FaCalendarDay, FaUser, FaStar, FaStarHalfAlt } from "react-icons/fa"

function Block(p) {
    let star = [];
    let rate = Math.floor(p.star);
    if (p.star % rate === 0) {
        for (let i = 1; i <= p.star; i++) {
            star.push(< FaStar className="icon" />)
        }
    }
    else {
        for (let i = 1; i <= p.star; i++) {
            star.push(< FaStar className="icon" />)
        }
         star.push(< FaStarHalfAlt className="icon" />)
    }
    return <div className="blkCont">
        <div id="shrink"  className="zoom">
            <div className="bimg">
                <img src={p.img} alt="404" />
            </div>
            <div className="one"><small><FaMapPin className="i" />{p.country}</small></div>
            <div className="one two"><small><FaCalendarDay className="i" />3 days</small></div>
            <div className="one"><small><FaUser className="i" />2 Person</small></div>
            <div className="stat">
                <h1>${p.price}</h1>
                <div className="star">{star}</div>
                <p>Tempor erat elitr rebum at clita. Diam dolor diam </p><p>ipsum sit diam amet diam eos</p>
                <div className="r-b">
                    <span className="read">Read More</span>
                    <span className="book">Book Now</span>
                </div>
            </div>
        </div>
    </div>
}
export default Block;