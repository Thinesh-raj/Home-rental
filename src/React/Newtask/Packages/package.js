import Block from "./block";
import "./package.css";
import bg1 from "../Images/package-1.jpg";
import bg2 from "../Images/package-2.jpg";
import bg3 from "../Images/package-3.jpg";
import { useEffect } from "react";

function Packages() {
    let arr = [
        {
            img: bg1,
            country: "Thailand",
            price: "129",
            star: 5,
        },
        {
            img: bg2,
            country: "Australia",
            price: "139",
            star: 4.5,
        },
        {
            img: bg3,
            country: "Malaysia",
            price: "169",
            star: 3.5,
        }
    ]
    useEffect(() => {
        let scrollshrink = () => {
            let topHit = document.getElementById("topHit");
            let shrinkElem = document.getElementById("shrink");
            console.log(shrinkElem)
            let topposition = topHit.getBoundingClientRect();
            topposition.top <= 75 ? shrinkElem.classList.add("zoom") : shrinkElem.classList.remove("zoom");
            topposition.top <= 75 ? shrinkElem.classList.remove("shrink") : shrinkElem.classList.add("shrink");
        }
        window.addEventListener("scroll", scrollshrink);
        return () => {
            window.removeEventListener("scroll", scrollshrink);
        }
    }
        , [])
    return <div id="topHit" className="packages">
        <h3>Packages</h3>
        <h1>Our Awesome Packages</h1>
        <div className="block">
            {arr.map((e) => {
                return <Block  img={e.img} country={e.country} price={e.price} star={e.star} />
            })
            }
        </div>
    </div>
}
export default Packages