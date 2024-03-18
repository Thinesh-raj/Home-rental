import { FaMapPin, FaRulerCombined, FaBed, FaBath } from "react-icons/fa"
import "./grid.css"

function Grid(p) {
    return <div id="grid">
        <div className="G-img" >
            <img src={p.img} alt="404" />
        </div>
        <div id="G-cont">
            <h3>{p.price}</h3>
            <h3 className="h3">Golden Urban House For Sell</h3>
            <p><FaMapPin className="map" />{p.Location}</p>
        </div>
        <div className="foot"><FaRulerCombined className="foot-i" />{p.sqft}sqft</div>
        <div className="foot center"><FaBed className="foot-i i1" />{p.bed} Bed</div>
        <div className="foot"><FaBath className="foot-i i2" />2 Bath</div>
        {!p.soldOut && <div className="f1">{p.sale}</div>}
        <div className="f2">{p.type}</div>
        {p.soldOut && <div className="f3">Sold out</div>}
        {p.soldOut && <div className="soldout"></div>}
    </div>
}
export default Grid