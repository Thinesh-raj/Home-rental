import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

function Content() {
    const [show, SetShow] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => SetShow(res.data))
            .catch((res) => console.log(res))
    }, [id])
    console.log(show)
    return <>
        <Link to="/">Home page</Link>
        <Link to="/about">About page</Link>
        <h1>post{show.id}</h1>
        <p>{show.title}</p>
        <small>{show.body} </small>
    </>
}
export default Content