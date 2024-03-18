import img from "../Images/topimg.jpg";
import img1 from "../Images/carousel-1.jpg";
import { FaChevronLeft, FaChevronRight, FaAngleDown, FaBars, FaArrowUp } from "react-icons/fa";
import "./top.css"
import "./top.css"
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Top() {
    const [type, setType] = useState("All");
    const [location, setLocation] = useState("");
    const Navigate = useNavigate();
    return <div id="top">
        <div className="top1">
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
            <select onChange={(e) => setType(e.target.value)}>
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Home</option>
                <option>Office</option>
                <option>Building</option>
                <option>Townhouse</option>
            </select>
            <select onChange={(e) => setLocation(e.target.value)}>
                <option>Location</option>
                <option>Chennai</option>
                <option>Bengaluru</option>
                <option>Coimbatore</option>
                <option>Mumbai</option>
            </select>
            <button onClick={() => Navigate(`/property/${type}`)}>Search</button>
        </div>
        <div className="arrow">
            <div className="arr"><FaChevronLeft /></div>
            <div className="arr"><FaChevronRight /></div>
        </div>
        <div className="top" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}><FaArrowUp /></div>    </div>
}
export default Top