import Grid from "./grid"
import bg1 from "../Images/property-1.jpg"
import bg2 from "../Images/property-2.jpg"
import bg3 from "../Images/property-3.jpg"
import bg4 from "../Images/property-4.jpg"
import bg5 from "../Images/property-5.jpg"
import bg6 from "../Images/property-6.jpg"
import "./list.css"
function List() {
    let arr=[
        {
            img:bg1,
            sale:"For sell",
            type:"Apartment",
            soldOut:false,
        },
        {
            img:bg2,
            sale:"For rent",
            type:"Villa",
            soldOut:false,
        },
        {
            img:bg3,
            sale:"For sell",
            type:"Office",
            soldOut:true,
        },
        {
            img:bg4,
            sale:"For rent",
            type:"Building",
            soldOut:false,
        },
        {
            img:bg5,
            sale:"For sell",
            type:"Home",
            soldOut:true,
        },
        {
            img:bg6,
            sale:"For rent",
            type:"Shop",
            soldOut:false,
        }

    ]
    return <div className="list">
        <h1>Property Listing</h1>
        <div className="p-a">
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
        <div className="a">
        <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/">Featured</a>
        <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/" className="a-h">For Sell</a>
        <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/" className="a-h">For Rent</a>
        </div>
        </div>
        <div className="grid">
            {/* <Grid  img={bg1} alt="404" type="Apartment"  sale="For Sell"/>
            <Grid  img={bg2} alt="404" type="Villa"  sale="For Rent"/>
            <Grid  img={bg3} alt="404" type="Office"  sale="For Sell"/>
            <Grid  img={bg4} alt="404" type="Building"  sale="For Rent"/>
            <Grid  img={bg5} alt="404" type="Home"  sale="For Sell"/>
            <Grid  img={bg6} alt="404" type="Shop"  sale="For Rent"/> */}
            {
                arr.map((ele)=>{
                    return <Grid img={ele.img} type={ele.type} sale={ele.sale} soldOut={ele.soldOut}/>
                })
            }
        </div>
        <p></p>
        <a className="bottom" href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/">Browse More Property</a>
    </div>
}
export default List