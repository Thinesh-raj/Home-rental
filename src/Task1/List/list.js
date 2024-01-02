import Grid from "./grid"
import bg1 from "../Images/property-1.jpg"
import bg2 from "../Images/property-2.jpg"
import bg3 from "../Images/property-3.jpg"
import bg4 from "../Images/property-4.jpg"
import bg5 from "../Images/property-5.jpg"
import bg6 from "../Images/property-6.jpg"
import "./list.css"
function List() {
    return <div className="list">
        <h1>Property Listing</h1>
        <div className="p-a">
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
        <div className="a">
        <a href="#">Featured</a>
        <a href="#" className="a-h">For Sell</a>
        <a href="#" className="a-h">For Rent</a>
        </div>
        </div>
        <div className="grid">
            <Grid  img={bg1} type="Apartment"  sale="For Sell"/>
            <Grid  img={bg2} type="Villa"  sale="For Rent"/>
            <Grid  img={bg3} type="Office"  sale="For Sell"/>
            <Grid  img={bg4} type="Building"  sale="For Rent"/>
            <Grid  img={bg5} type="Home"  sale="For Sell"/>
            <Grid  img={bg6} type="Shop"  sale="For Rent"/>
        </div>
        <a className="bottom" href="#">Browse More Property</a>
    </div>
}
export default List