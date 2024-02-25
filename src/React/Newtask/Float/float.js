import { useEffect } from "react";
import logo from "../Images/logo1.png"
import "./float.css";
function Float(){
    useEffect(() => {
        const handleScroll = () => {
            const isFloat = document.getElementById('float');
            const divposition = isFloat.getBoundingClientRect();
            divposition.top<=0?isFloat.classList.add("isFloat"):isFloat.classList.remove("isFloat");
            console.log(divposition.top)
        };  
      window.addEventListener('scroll', handleScroll);
      return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return <>
    <p className="p"></p>
    <div id="float" className="float">
    <div className="part1">
        <img src={logo} alt="404" />
        <h2>Tours and Travels</h2>
    </div>
    <div className="part2">
        <a href="404">Home</a>
        <a href="404">About</a>
        <a href="404">Travel</a>
        <a href="404">Blog</a>
        <a href="404">Contact</a>
    </div>
</div>
</>
}
export default Float