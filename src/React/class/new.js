
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


function ApiCall() {
    const [data, setdata] = useState([])
    const [load, setload] = useState(false)
    const [start, setstart] = useState([])
    const [color, setcolor] = useState()
    function loaddata() {
        axios.get("https://dummyjson.com/todos?skip=0&limit=150")
            .then((res) => {
                setdata(res.data.todos)
                setstart(res.data.todos.slice(0, 10))
                console.log(res.data.todos)
                setload(false)
            })
            .catch((err) => {
                console.log("error" + err)
            })
    }
    console.log(start)
    useEffect(() => { loaddata();},[])
    // setstart(data.slice(0, 10));
    function buttonhandler(order) {
        let endindex = order * 10;
        let startindex = endindex - 10;
        setstart(data.slice(startindex, endindex))
        setcolor(order)
    }
    return <div> <h1 class="headapi">TODOS</h1>
        {/* <button onClick={loadData}>LOAD</button> */}
        {
            load && <p>loading......</p>
        }
        <div class="apis">
            {
                start.map((ele) => {
                    return <h1>{ele.todo}</h1>
                })
            }
            {
                Array(data.length / 10).fill('').map((ele, ind) => {
                    return <button onClick={() => buttonhandler(ind + 1)} className={color === ind + 1 && "change"} id="btn">{ind + 1}</button>
                })
            }
        </div>
    </div>

}
export default ApiCall