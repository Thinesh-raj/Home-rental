import "./apicall.css"
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Wrapper from "./wrapper";

function ApiCall() {
    const [call, setCall] = useState([]);
    const [load, setLoad] = useState(false);
    const [limit, setLimit] = useState([0, 10]);
    const [colour, setColour] = useState({});
    useEffect(() => {
        function isCall(from,to) {
            // axios.get(`https://dummyjson.com/products?skip=${from}&limit=${to}`)
            axios.get(`https://dummyjson.com/products?skip=&limit=100`)
                .then((getData) => {
                    console.log(getData.data.products)
                    setCall(getData.data.products);
                    setLoad(false);
                })
                .catch(() => setLoad(true))
        } isCall(0,10)
    }, []);

    // pages slicing
    let copy = call.slice(limit[0], limit[1]);
    console.log(colour.colour1)
    return <div className="apiwrap">
        {load && <div className="loader"><div className="anime"></div></div>}
        <div className="page">
            <button className={colour.colour1 && "change"} onClick={() => { setLimit([0, 10]); setColour({ colour1: true }) }}>1</button>
            <button className={colour.colour2 && "change"} onClick={() => { setLimit([10, 20]); setColour({ colour2: true }) }}>2</button>
            <button className={colour.colour3 && "change"} onClick={() => { setLimit([20, 30]); setColour({ colour3: true }) }}>3</button>
            <button className={colour.colour4 && "change"} onClick={() => { setLimit([30, 40]); setColour({ colour4: true }) }}>4</button>
            <button className={colour.colour5 && "change"} onClick={() => { setLimit([40, 50]); setColour({ colour5: true }) }}>5</button>
            <button className={colour.colour6 && "change"} onClick={() => { setLimit([50, 60]); setColour({ colour6: true }) }}>6</button>
            <button className={colour.colour7 && "change"} onClick={() => { setLimit([60, 70]); setColour({ colour7: true }) }}>7</button>
            <button className={colour.colour8 && "change"} onClick={() => { setLimit([70, 80]); setColour({ colour8: true }) }}>8</button>
            <button className={colour.colour9 && "change"} onClick={() => { setLimit([80, 90]); setColour({ colour9: true }) }}>9</button>
            <button className={colour.colour10 && "change"} onClick={() => { setLimit([90, 100]); setColour({ colour10: true }) }}>10</button>
        </div>
        <p className="p"></p>
        {
            copy.map((e) => {
                return <Wrapper key={e.id} image={e.thumbnail} title={e.title} rate={e.rating} price={e.price}
                    discount={e.discountPercentage} category={e.category} stock={e.stock} description={e.description} />
            })
        }
    </div>
}
export default ApiCall;