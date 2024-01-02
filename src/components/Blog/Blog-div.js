import "./Blog-div.css"
import bg from "../../Images/b1.jpg"

function Blog_div(p) {
    return <div id="Blog-div">
        <img src={p.src} />
        <div id="Blog-div1">
            <h2>{p.title}</h2>
            <p>alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <button>Read More</button>
        </div>
    </div>
}
export default Blog_div