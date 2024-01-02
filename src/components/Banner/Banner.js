import "./Banner.css"
import bg from "../../../src/Images/slider-img.png"

function Banner() {
    return <div id="banner">
        <div id="part1">
            <h1>FOR ALL YOUR</h1>
            <h1>  FURNITURE NEEDS</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Minus quidem maiores perspiciatis, illo maxime
             voluptatem a itaque suscipit</p>
            <div id="btn"><button id="btn1">Contact Us</button><button id="btn2">About Us</button></div>
        </div>
        <div id="part2">
            <img src={bg} />
        </div>
    </div>
}
export default Banner;