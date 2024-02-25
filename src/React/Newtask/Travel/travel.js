
import img1 from "../Images/destination-1.jpg";
import img2 from "../Images/destination-2.jpg";
import img3 from "../Images/destination-3.jpg";
import img4 from "../Images/destination-4.jpg";
import "./travel.css";
import { useEffect } from "react";
function Travel() {
    useEffect(() => {
        let handlescroll = () => {
            let Elem = document.getElementById("img1");
            let Elem1 = document.getElementById("img2");
            let Elem2 = document.getElementById("img3");
            let Elem3 = document.getElementById("img4");
            let touch = document.getElementById("touch");
            let elemPosition = touch.getBoundingClientRect();
            elemPosition.top < 75 ? Elem.classList.add("img1") : Elem.classList.add("slide");
            elemPosition.top < 75 ? Elem.classList.remove("slide") : Elem.classList.remove("img1");
            elemPosition.top < 75 ? Elem1.classList.add("img2") : Elem1.classList.add("slide1");
            elemPosition.top < 75 ? Elem1.classList.remove("slide1") : Elem1.classList.remove("img2");
            elemPosition.top < 75 ? Elem2.classList.add("img3") : Elem2.classList.add("slide2");
            elemPosition.top < 75 ? Elem2.classList.remove("slide2") : Elem2.classList.remove("img3");
            elemPosition.top < 75 ? Elem3.classList.add("img4") : Elem3.classList.add("slide3");
            elemPosition.top < 75 ? Elem3.classList.remove("slide3") : Elem3.classList.remove("img4");
            console.log(elemPosition.top)
        };
        window.addEventListener("scroll", handlescroll)
        return () => { window.removeEventListener("scroll", handlescroll) }
    }, [])
    return <div id="touch" className="travel">
        <h3>Travel</h3>
        <h1 >Popular Destination</h1>
        <div className="img_cont">
            <div className="cont1">
                <div id="img1" >
                    <img src={img1} alt="404" />
                    <span className="off off1">30% OFF</span>
                    <span className="ctry ctry1">Bali</span>
                </div>
                <div id="img2">
                    <img src={img2} alt="404" />
                    <span className="off">30% OFF</span>
                    <span className="ctry">Australia</span>
                </div>
                <div id="img3" className="img3">
                    <img src={img3} alt="404" />
                    <span className="off">30% OFF</span>
                    <span className="ctry">Thailand</span>
                </div>
            </div>
            <div className="cont2">
                <div id="img4" className="img4">
                    <img src={img4} alt="404" />
                    <span className="off">30% OFF</span>
                    <span className="ctry">Malayasia</span>
                </div>
            </div>
        </div>
    </div>
}
export default Travel