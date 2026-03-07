import img from "../assets/body.png"
import {RightOutlined} from '@ant-design/icons';
function About(){
    const stats = [
  {
    value: "15K",
    label: "Happy Customers",
  },
  {
    value: "150K",
    label: "Monthly Visitors",
  },
  {
    value: "15",
    label: "Countries Worldwide",
  },
  {
    value: "100+",
    label: "Top Partners",
  },
];

    return(
        <>
            <div className="mt-15 min-h-screen mx-10 lg:mx-45    flex p-3 items-center justify-center">
                <div className="w-full">
                    {/* status */}
                        <div className="flex justify-evenly flex-wrap gap-6 items-center  p-6">
                            {
                                stats.map((i,index)=>(
                                    <div className="text-center">
                                        <h1 className="text-orange-600 font-bold text-4xl lg:text-6xl">{i.value}</h1>
                                        <h1 className="text-black font-bold lg:text-xl mt-2 lg:mt-3">{i.label}</h1>
                                    </div>
                                ))
                            }
                        </div>

                    {/* body */}
                    <div className="lg:mt-[200px] mt-20 mb-20 flex lg:flex-row gap-4 flex-col items-center">
                        <div className="lg:w-1/2 flex  items-center justify-center">
                            <div className="flex-col gap-10 flex">
                                <div className="bg-orange-500 p-1 w-20"></div>
                            <h1 className="text-6xl font-bold">Meet Our Experts</h1>
                            <p className="text-gray-400 w-1/2">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                            <a href="" className="text-orange-700 flex items-center  font-bold">Learn More<RightOutlined style={{fontSize:'20px'}}/></a>
                            </div>
                        </div>
                        <div className="w-1/2 items-center justify-center flex">
                            <img src={img} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default About;