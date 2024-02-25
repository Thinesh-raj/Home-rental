import Banner_copy from "./Banner-copy/banner-copy"
import Banner from "./Banner/Banner"
import Blog from "./Blog/Blog"
import Test from "./Test/test"
import Contact from "./contact/contact"
import Footer from "./footer/footer"
import Header from "./header/header"
import Show from "./show/show"




function LinkAPP() {
    return <div>
        <Header />
        <Banner />
        <Show />
        <Banner_copy />
        <Blog />
        <Test />
        <Contact />
        <Footer />
    </div>
}
export default LinkAPP