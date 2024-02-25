import Show_div from "./show-div"
import bg from "../Images/f1.png"
import bg1 from "../Images/f2.png"
import bg2 from "../Images/f3.png"
import bg3 from "../Images/f4.png"
import bg4 from "../Images/f5.png"
import bg5 from "../Images/f6.png"
import "./show.css"

function Show() {
    return <div id="show">
        <h1>OUR FURNITURE</h1>
        <p>which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an</p>
        <div id="show-div">
            <Show_div  heading="BROWN CHAIR DESIGN" path={bg} price="100"  />
            <Show_div  heading="DOUBLE BED DESIGN" path={bg1} price="200"  />
            <Show_div  heading="HOUSE CHAIR DESIGN" path={bg2} price="200"  />
            <Show_div  heading="BROWN TABLE DESIGN" path={bg3} price="100"  />
            <Show_div  heading="BLUE CHAIR DESIGN" path={bg4} price="200"  />
            <Show_div  heading="BROWN TABLE DESIGN" path={bg5} price="200"  />
        </div>
    </div>
}
export default Show