import { useState } from "react"

function State() {
    const [text, setText] = useState(()=>"hello")
    return <>
        <h1>{text}</h1>
        <button onClick={() => {text==="hello"?setText(()=>"welcome"):setText(()=>"hello") }}>change</button>
    </>
}
export default State