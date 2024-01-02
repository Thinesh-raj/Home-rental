import {FaMapPin,FaRulerCombined,FaBed,FaBath} from "react-icons/fa"
import "./grid.css"

function Grid(p) {
    return <div id="grid">
        <div className="G-img">
        <img src={p.img} />
        </div>
        <div id="G-cont">
            <h3>$12,345</h3>
            <h3 className="h3">Golden Urban House For Sell</h3>
            <p><FaMapPin className="map"/>123 Street, New York, USA</p>
        </div>
        <div className="foot"><FaRulerCombined className="foot-i"/>1000 sqft</div>
        <div className="foot center"><FaBed className="foot-i i1"/>3 Bed</div>
        <div className="foot"><FaBath className="foot-i i2"/>2 Bath</div>
        <div className="f1">{p.sale}</div>
        <div className="f2">{p.type}</div>
    </div>
}
export default Grid