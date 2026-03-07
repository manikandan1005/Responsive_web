import About from "./pages/About"
import Hero from "./pages/Hero"
import Join from "./pages/Join"
import Nav from "./pages/Nav"
import Pricing from "./pages/Pricing"
import Service from "./pages/services"
import Team from "./pages/Team"

function Body(){
    return(<>
    <div className=" ">
        <Nav/>
    <Hero/>
    <About/>
    <Service/>
    <Pricing/>
    <Team/>
    <Join/>
    </div>
    </>)
}
export default Body