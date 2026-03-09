import { FacebookOutlined, InstagramOutlined,TwitterOutlined } from '@ant-design/icons';
import About from "./pages/About"
import Footer from "./pages/Footer"
import Hero from "./pages/Hero"
import Join from "./pages/Join"
import Nav from "./pages/Nav"
import Pricing from "./pages/Pricing"
import Service from "./pages/services"
import Team from "./pages/Team"

function Body() {
    return (<>
        <div className=" ">
            <Nav />
            <Hero />
            <About />
            <Service />
            <Pricing />
            <Team />
            <Join />
            <Footer></Footer>
            <div className='flex w-full  py-5 bg-gray-50 justify-between'>
               <div className='mx-10 lg:mx-45 flex justify-between w-full items-center'>
                 <div>
                    <p className=' font-black text-gray-500'>Made With Love By Figmaland All Right Reserved</p>
                </div>
                <div className="flex gap-4 text-[#E74040]">
                    <FacebookOutlined />
                    <InstagramOutlined />
                    <TwitterOutlined />
                </div>
               </div>
            </div>
        </div>
    </>)
}
export default Body