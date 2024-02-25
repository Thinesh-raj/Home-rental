import "./banner-copy.css"
import bg from "../Images/about-img.png"

function Banner_copy() {
    return <div id="banner">
        <div id="part1">
            <img src={bg} />
        </div>
        <div id="part2">
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore</p>
            <button id="btn">Read More</button>
        </div>
    </div>
}
export default Banner_copy;