import bg from "../assets/bg-img.png"
import { HeartPulse, Stethoscope, ClipboardPlus } from "lucide-react";
function Hero() {
    const services = [
        {
            icons: <HeartPulse className="text-white  w-10 h-10 " />,
            head: "Online Appointment",
            desc: "The gradual accumulation of information about atomic and small-scale behaviour..."
        },
        {
            icons: <Stethoscope className="text-white  w-10 h-10 " />,
            head: "Emergency Case",
            desc: "The gradual accumulation of information about atomic and small-scale behaviour..."
        },
        {
            icons: <ClipboardPlus className="text-white  w-10 h-10 " />,
            head: "Cancer Care",
            desc: "The gradual accumulation of information about atomic and small-scale behaviour..."
        }
    ];

    return (
        <>
            <div className="items-center justify-center flex mx-10 lg:mx-45 ">
                <div className=" relative  mb-12 flex min-h-screen items-center ">

                    <div className=" relative items-center justify-center h-full lg:flex-row w-full " >
                        {/* img */}
                        <div className="h-[300px">
                            <img className="absolute hidden lg:block w-120 right-0 top-30 object-fill " src={bg} alt="Back ground img" />

                        </div>
                        <div className="relative mt-10 lg:mt-40 lg:w-1/2    justify-center px-8  py-5">
                            <h1 className=" text-orange-600 font-bold ">join us</h1>
                            <h1 className="lg:text-6xl text-5xl font-bold  mt-8 text-center lg:text-start">
                                A Great Place to Receive Care
                            </h1>

                            <p className="text-gray-400 mt-8 lg:w-1/2 text-center lg:text-start">Medical Recover is most focused in helping you discover your most beauiful smile</p>

                            <div className="flex w-full justify-center">
                                <div className="mt-8 flex flex-row gap-4">
                                    <button className="px-4 py-3 rounded text-white bg-orange-600 w-40 lg:w-50">Get Quote Now</button>
                                    <button className="px-4 py-3 rounded text-orange-600 border-2 w-40 lg:w-50 border-orange-600">learn More</button>
                                </div>
                            </div>



                        </div>

                        <div className=" flex  relative  flex-wrap items-center justify-center   mt-18 gap-6 ">

                            {services.map(i => (
                                <div className="p-4">
                                    <div className=" flex flex-col  shadow-2xl gap-6 p-6 h-80 w-80 bg-white">
                                        <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center">
                                            <div>{i.icons}</div>
                                        </div>


                                        <h1 className="font-bold line-clamp-1">{i.head}</h1>
                                        <div className="bg-orange-700 w-15 pt-1"></div>
                                        <p>{i.desc}</p>
                                    </div>
                                </div>
                            ))}



                            {/* <div className="flex shadow p-3"></div>
                        <div className="flex shadow p-3"></div> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero;