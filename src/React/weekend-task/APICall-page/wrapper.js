import "./wrapper.css";
import { FaImage, FaStar, FaStarHalfAlt } from "react-icons/fa"
function Wrapper(p) {
    let star = [];
    let rate = Math.floor(p.rate);
    if (p.rate % rate === 0) {
        for (let i = 1; i <= p.rate; i++) {
            star.push(< FaStar className="icon" />)
        }
    }
    else {
        for (let i = 1; i <= p.rate; i++) {
            star.push(< FaStar className="icon" />)
        }
        star.push(< FaStarHalfAlt className="icon" />)
    }
    return <div className="wrapper">
        <div className="img"><img  src={p.image} alt="404"/></div>
        <div className="cont">
            <h3 className="title">{p.title}</h3>
            <div className="rate">{star}</div>
            <p className="desripc">{p.description} </p>
            <div className="sell"><span className="price"><span className="symbol">$</span><div className="money">{p.price}</div></span><span className="discount">{p.discount}%  @Off</span></div>
            <div className="store"><span className="category"><span className="cat">Category</span>  :  {p.category}</span><span className="stock"><span className="instock">In stock</span>:{p.stock}</span></div>
        </div>
    </div>
}
export default Wrapper