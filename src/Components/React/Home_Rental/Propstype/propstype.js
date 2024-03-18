import Block from "./block"
import bg1 from "../Images/icon-apartment.png"
import bg2 from "../Images/icon-villa.png"
import bg3 from "../Images/icon-house.png"
import bg4 from "../Images/icon-housing.png"
import bg5 from "../Images/icon-building.png"
import bg6 from "../Images/icon-neighborhood.png"
import bg7 from "../Images/icon-condominium.png"
import bg8 from "../Images/icon-luxury.png"
import "./propstype.css"
function Propstype(){
let arr=[
    {
        img:bg1,
        title:"Apartment",
    },
    {
        img:bg2,
        title:"Villa",
    },
    {
        img:bg3,
        title:"Home",
    },
    {
        img:bg4,
        title:"Office",
    },
    {
        img:bg5,
        title:"Building",
    },
    {
        img:bg6,
        title:"Townhouse",
    },
    {
        img:bg7,
        title:"Shop",
    },
    {
        img:bg8,
        title:"Garage",
    }
]
return <div className="Propstype">
    <h1>Property Types</h1>
    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
    <div className="block">
{/* <Block img={bg2} alt="404" title="Villa" />
<Block img={bg1} alt="404" title="Apartment" />
<Block img={bg3} alt="404" title="Home" />
<Block img={bg4} alt="404" title="Office" />
<Block img={bg5} alt="404" title="Building" />
<Block img={bg6} alt="404" title="Townhouse" />
<Block img={bg7} alt="404" title="Shop" />
<Block img={bg8} alt="404" title="Garage" /> */}
{
    arr.map((ele)=>{
      return <Block img={ele.img} title={ele.title}/>})
}
    </div>
</div>
}
export default Propstype