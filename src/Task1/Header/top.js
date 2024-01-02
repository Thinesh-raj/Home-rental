import img from "../Images/topimg.jpg";
import img1 from "../Images/carousel-1.jpg";
import icon from "../Images/icon-deal.png";
import {FaChevronLeft,FaChevronRight,FaAngleDown,} from "react-icons/fa";
import "./top.css"
import "./top.css"
import React from "react";
function Top() {
    return <div id="top">
        <div className="top1">
        <div className="float">
            <div className="part1">
                <div id="dotted">
                    <img src={icon} />
                </div>
                <h1>Makaan</h1>
            </div>
            <div className="part2">
                <a href="" className="diff">HOME</a>
                <a href="">ABOUT</a>
                <a href="">PROPERTY</a><FaAngleDown className="down1"/>
                <a href="">PAGES</a><FaAngleDown className="down1"/>
                <a href="">CONTACT</a>
            </div>
            <div className="part3">
            <a href="">Add Property</a>
            </div>
        </div>
            <h1>Find A <span>Perfect Home</span> To Live With Your Family</h1>
            <p>Vero elitr justo clita lorem. Ipsum dolor at sed stetsit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
            <a href="#" className="t-a">Get Started</a>
        </div>
        <div className="topimg">
        <img src={img} />
        <img src={img1} />
        <img src={img} />
        </div>
        <div className="top2">
            <input id="search" placeholder="Search Keyword" />
            <input placeholder="Property Type"/>
            <FaAngleDown className="down"/>
            <input placeholder="Location" />
            <FaAngleDown className="down l-d"/>
            <button>Search</button>
        </div>
        <div className="arrow">
             <div className="arr"><FaChevronLeft/></div>
             <div className="arr"><FaChevronRight/></div>
        </div>
    </div>
}
export default Top