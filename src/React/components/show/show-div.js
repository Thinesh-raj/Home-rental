
import "./show-div.css"
function Show_div(p){
    return <div id="cont">
         <img src={p.path}/>
         <p>{p.heading}</p>
         <div>
            <span><span id="dollar">$</span>{p.price}</span>
            <a>BUY NOW</a>
         </div>
    </div>
}
export default Show_div