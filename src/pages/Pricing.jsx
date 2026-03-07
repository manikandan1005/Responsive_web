import {Typography,Rate, Button, Card} from "antd"
import { useState } from "react";
function Pricing(){
    const { Title } = Typography;
    const testimonials = [
  {
    rating: 4,
    description: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    name: "Regina Miles",
    role: "Designer",
    image: "path/to/image1.jpg"
  },
  {
    rating: 4,
    description: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    name: "Regina Miles",
    role: "Designer",
    image: "path/to/image2.jpg"
  },
  {
    rating: 4,
    description: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
    name: "Regina Miles",
    role: "Designer",
    image: "path/to/image3.jpg"
  }
];




    return(
        <>
            <div className="flex items-center justify-center w-full">
                <div className="lg:mx-45 mx-10 my-20 ">
                    <div className="lg:w-1/2 py-20">
                        <Title className="!text-[#E74040]" level={5}>Practice Advice</Title>
                        <Title  level={1}>Leading Medicine</Title>
                        <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                    </div>
                    {/* ratings */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                        {
                            testimonials.map((data,index)=>(
                                <div key={index} className="w-45 text-center mt-10 flex flex-col gap-5">
                                    <Rate disabled defaultValue={data.rating} />
                                    <p>{data.description}</p>
                                    <div className="flex justify-center items-center gap-3">
                                        <img src="" className="w-15 h-15 rounded-full" alt="" />
                                        <div className="flex flex-col">
                                            <p className="text-[#E74040] font-bold">{data.name}</p>
                                            <p className="font-semibold">{data.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                           
            </div>


        </>
    )
}
export default Pricing