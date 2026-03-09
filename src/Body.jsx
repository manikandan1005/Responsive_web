// App.jsx or Body.jsx
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import About from "./pages/About";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Join from "./pages/Join";
import Nav from "./pages/Nav";
import Pricing from "./pages/Pricing";
import Service from "./pages/services";
import Team from "./pages/Team";

function Body() {
    return (
        <>
            <Nav />

            <section id="home">
                <Hero />
            </section>

            <section id="about">
                <About />
            </section>

            <section id="service">
                <Service />
            </section>

            <section id="product">
                <Pricing />
            </section>

            <section id="team">
                <Team />

            </section>
            <Join />
            <section id="contact">

            </section>
            <Footer />
            <div className="flex w-full py-5 bg-gray-50 justify-between">
                <div className="mx-10 lg:mx-45 flex justify-between w-full items-center flex-wrap">
                    <p className="font-black text-gray-500 text-sm sm:text-base">
                        Made With Love By Figmaland | All Rights Reserved
                    </p>
                    <div className="flex gap-4 text-[#E74040] mt-2 sm:mt-0">
                        <FacebookOutlined className="text-lg sm:text-xl" />
                        <InstagramOutlined className="text-lg sm:text-xl" />
                        <TwitterOutlined className="text-lg sm:text-xl" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;