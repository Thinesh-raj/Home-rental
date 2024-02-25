import bg from "../Images/map.png"
import "./contact.css"


function Contact(){
return <div id="contact">
    <div>
        <h2>CONTACT</h2>
        <input placeholder="Your Name"/>
        <input placeholder="Phone Number"/>
        <input placeholder="Email"/>
        <input id="msg" placeholder="Message" />
        <button>SEND</button>
    </div>
    <img src={bg}/>
</div>
}
export default Contact