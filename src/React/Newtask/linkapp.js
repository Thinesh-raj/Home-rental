import About from "./About/about"
import Float from "./Float/float"
import Packages from "./Packages/package"
import Top from "./Top/top"
import Travel from "./Travel/travel"
import Contact from "./contact/contact"
function Newtask() {
    return <div style={{ backgroundColor: "#D7FCFF", backdropFilter: "blur", position: "relative" }}>
        <Float />
        <Top />
        <About />
        <Travel/>
        <Packages/>
        <Contact/>
    </div>
}
export default Newtask