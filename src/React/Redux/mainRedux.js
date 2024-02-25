import { useDispatch, useSelector } from "react-redux"
import { decre, incre, sam, selectcount, selecttype } from "./reducer";

function Counter() {
    const dispatch=useDispatch();
    const data=  useSelector(selectcount);
    const data1=useSelector(selecttype)
    return <>
    <button onClick={()=>dispatch(incre())}>+</button>
    <p>{data}</p>
    <button onClick={()=>dispatch(decre())}>-</button>
    <input onChange={(e)=>dispatch(sam(e))}/>
    <p>{data1}</p>
    </>
}
export default Counter