import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function About(){
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((resData)=>setData(resData.data.slice(0,13)))
        .catch((errData)=>console.log(errData))
    },[])
    return <>
    <h1>posts</h1>
    {
        data.map(e=>{return <Link key={e.id} to={`/content/${e.id}`} ><h3 style={{display:"inline",margin:"2%"}}>Post{e.id}</h3></Link>})
    }
    </>
}
export default About