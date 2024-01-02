import Top from "./Header/top"
import About from "./About/about"
import Propstype from "./Propstype/propstype"
import List from "./List/list"
import Call from "./Call/call"
import Agent from "./Agent/agent"
import Client from "./Client/client"
import Footer from "./Footer/footer"

function LinkTask1() {
    return <div>
        <Top />
        <Propstype />
        <About/>
        <List/>
        <Call/>
        <Agent/>
        <Client/>
        <Footer/>
    </div>
}
export default LinkTask1