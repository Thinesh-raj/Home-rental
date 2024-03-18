import Top from "./Header/top"
import About from "./About/about"
import Propstype from "./Propstype/propstype"
import List from "./List/list"
import Call from "./Call/call"
import Agent from "./Agent/agent"
import Client from "./Client/client"
import Footer from "./Footer/footer"
import icon from "./Images/icon-deal.png";
import { FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react"

function LinkTask1() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    useEffect(() => {
        function handleScroll() {
            // const div = ref6.current
            // const pos = div.getBoundingClientRect();
            // pos.y<0?div.classList.add("sticky"):div.classList.remove("sticky");
            // pos.y<0?div.classList.remove("float"):div.classList.add("float")
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    function scroll(ref) {
        ref.current.scrollIntoView({ behaviour: "smooth", block: "start" })
    }
    return <div>
        <div className="float" ref={ref6}>
            <div className="part1">
                <div id="dotted">
                    <img src={icon} alt="404" />
                </div>
                <h1>Makaan</h1>
            </div>
            <div className="part2">
                <a className="diff" onClick={() => scroll(ref1)}>HOME</a>
                <a onClick={() => scroll(ref2)}>ABOUT</a>
                <a onClick={() => scroll(ref3)}>PROPERTY</a>
                <a onClick={() => scroll(ref4)}>PAGES</a>
                <a onClick={() => scroll(ref5)}>CONTACT</a>
            </div>
            <div className="part3">
                <a>Add Property</a>
            </div>
            <div className="menu"><FaBars /></div>
        </div>
        <div ref={ref1}><Top /></div>
        <Propstype />
        <div ref={ref2}><About /></div>
        <div ref={ref3}><List /></div>
        <div ref={ref5}><Call /></div>
        <Agent />
        <div ref={ref4}><Client /></div>
        <Footer />
    </div>
}
export default LinkTask1