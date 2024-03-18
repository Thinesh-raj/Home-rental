import Grid from "./grid"
import bg1 from "../Images/property-1.jpg"
import bg2 from "../Images/property-2.jpg"
import bg3 from "../Images/property-3.jpg"
import bg4 from "../Images/property-4.jpg"
import bg5 from "../Images/property-5.jpg"
import bg6 from "../Images/property-6.jpg"
import "./list.css"
function List() {
    let arr = [
        {
            img: bg1,
            sale: "For sell",
            type: "Apartment",
            soldOut: false,
            price: "1,20,0000",
            bed: 2,
            sqft: 2000,
            Location: "Bengaluru"
        },
        {
            img: bg2,
            sale: "For rent",
            type: "Villa",
            soldOut: false,
            price: "1,20,0000",
            bed: 2,
            sqft: 2000,
            Location: "Chennai"
        },
        {
            img: bg3,
            sale: "For sell",
            type: "Office",
            soldOut: true,
            price: "1,20,0000",
            bed: 2,
            sqft: 2000,
            Location: "Chennai"
        },
        {
            img: bg4,
            sale: "For rent",
            type: "Building",
            soldOut: false,
            price: "1,20,0000",
            bed: 2,
            sqft: 2000,
            Location: "Mumbai"
        },
        {
            img: bg5,
            sale: "For sell",
            type: "Home",
            soldOut: true,
            price: "1,20,0000",
            bed: 2,
            sqft: 2000,
            Location: "Chennai"
        },
        {
            img: bg6,
            sale: "For rent",
            type: "Shop",
            soldOut: false,
            price: "1,20,0000",
            bed: 2,
            sqft: 2000,
            Location: "Coimbatore"
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
            {
                arr.map((ele) => {
                    return <Grid img={ele.img} type={ele.type} sale={ele.sale} soldOut={ele.soldOut}
                        price={ele.price} bed={ele.bed} sqft={ele.sqft} Location={ele.Location} />
                })
            }
        </div>
        <p></p>
        <a className="bottom" href="https://www.free-css.com/assets/files/free-css-templates/preview/page295/makaan/">Browse More Property</a>
    </div>
}
export default List