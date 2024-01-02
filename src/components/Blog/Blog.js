import Blog_div from "./Blog-div"
import bg from "../../Images/b1.jpg"
import bg1 from "../../Images/b2.jpg"
import bg2 from "../../Images/b3.jpg"
import "./Blog.css"

function Blog() {
    return <div id="Blog">
        <h1>LATEST BLOG</h1>
        <div id="blog-div">
            <Blog_div title="Look even slightly believable. If you are" src={bg} />
            <Blog_div title="Anything embarrassing hidden in the middle" src={bg1} />
            <Blog_div title="Molestias magni natus dolores odio commodi. Quaerat" src={bg2} />
        </div>
    </div>
}
export default Blog