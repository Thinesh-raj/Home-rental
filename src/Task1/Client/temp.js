import bg from "../Images/testimonial-1.jpg"
import "./temp.css"
function Temp(p){
    return <div className="T-outer">
        <div className="T-inner">
              <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
              <div className="Cl-img">
                <img src={p.img}/>
                <div className="Cl-cont">
                    <h4>Client Name</h4>
                    <small>Profession</small>
                </div>
              </div>
        </div>
</div>
}
export default Temp