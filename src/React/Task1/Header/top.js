import img from "../Images/topimg.jpg";
import img1 from "../Images/carousel-1.jpg";
import icon from "../Images/icon-deal.png";
import { FaChevronLeft, FaChevronRight, FaAngleDown, FaBars, FaArrowUp } from "react-icons/fa";
import "./top.css"
import "./top.css"
import React from "react";
function Top() {
    return <div id="top">
        <div className="top1">
            <div className="float">
                <div className="part1">
                    <div id="dotted">
                        <img src={icon} alt="404" />
                    </div>
                    <h1>Makaan</h1>
                </div>
                <div className="part2">
                    <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/" className="diff">HOME</a>
                    <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/">ABOUT</a>
                    <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/">PROPERTY</a><FaAngleDown className="down1" />
                    <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/">PAGES</a><FaAngleDown className="down1" />
                    <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/">CONTACT</a>
                </div>
                <div className="part3">
                    <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/">Add Property</a>
                </div>
                <div className="menu"><FaBars /></div>
            </div>
            <h1>Find A <span>Perfect Home</span> To Live With Your Family</h1>
            <p>Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
            <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/" className="t-a">Get Started</a>
        </div>
        <div className="topimg">
            <img src={img} alt="404" />
            <img src={img1} alt="404" />
            <img src={img} alt="404" />
        </div>
        <div className="top2">
            <input id="search" placeholder="Search Keyword" />
            <input placeholder="Property Type" />
            <FaAngleDown className="down" />
            <input placeholder="Location" />
            <FaAngleDown className="down l-d" />
            <button>Search</button>
        </div>
        <div className="arrow">
            <div className="arr"><FaChevronLeft /></div>
            <div className="arr"><FaChevronRight /></div>
        </div>
        (<div className="top" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}><FaArrowUp /></div>)
    </div>
}
export default Top