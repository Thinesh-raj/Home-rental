import axios from "axios";
import { useParams } from "react-router-dom";
import Grid from "../List/grid";
import { useState } from "react";

function Property() {
    const type = useParams();
    const [prop, setProp] = useState([]);
    function fetchData() {
        console.log(type)
        axios.get("http://localhost:3000/Property", { headers: { Authorization: 'Basic U2FtOjIwNTY=' } })
            .then(res => setProp((res.data[0][type.type])))
            .catch(err => console.log(err.message))
    }
    return <div>
        <h1>{type.type}</h1>
        <button onClick={fetchData}>Click</button>
        {prop.map(ele => <Grid img={ele.Img} type={type.type} sale={ele.sale} soldOut={ele.soldOut} />)}
    </div>
}
export default Property;