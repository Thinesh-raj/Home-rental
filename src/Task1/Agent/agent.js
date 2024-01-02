import Alist from "./A-list"
import bg from "../Images/team-1.jpg"
import bg1 from "../Images/team-2.jpg"
import bg2 from "../Images/team-3.jpg"
import bg3 from "../Images/team-4.jpg"
import "./agent.css"
function Agent(){
    return <div className="agent">
     <h1>Property Agents</h1>
     <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
     <div className="A-list">
        <Alist img={bg}/>
        <Alist img={bg1}/>
        <Alist img={bg2}/>
        <Alist img={bg3}/>
     </div>
    </div>
}
export default Agent