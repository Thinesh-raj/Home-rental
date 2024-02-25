import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Content from "./content"

function Routerlink(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/content/:id" element={<Content/>}/>
        {/* <Route path="*" element={}/> */}
    </Routes>
    </BrowserRouter>
    </>
}
export default Routerlink