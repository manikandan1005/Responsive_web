import { ShoppingCart } from "lucide-react";
import { Card, Button } from "antd"
import { DownloadOutlined, StarFilled, ShoppingCartOutlined,EyeOutlined, HeartOutlined } from "@ant-design/icons"
//import { Button } from "antd/es/radio";
import img1 from "../assets/sales1.png"
import img2 from "../assets/sales2.png"
import img3 from "../assets/sales3.png"
//const { Meta } = Card;

function Service() {
  const cardsData = [
    {
      tag: "Painless procedures",
      img: img1,
      title: "Quick examination",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      rating: 4.9,
      sales: 15,
      oldPrice: 16.48,
      newPrice: 6.48,
    },
    {
      tag: "Cancer Care", img: img2,
      title: "Online Appointment",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      rating: 4.9,
      sales: 15,
      oldPrice: 16.48,
      newPrice: 6.48,
    },
    {
      tag: "Best dental surgeons", img: img3,
      title: "Emergency Case",
      description:
        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      rating: 4.9,
      sales: 15,
      oldPrice: 16.48,
      newPrice: 6.48,
    },
  ];

  return (
    <div className=" bg-[#E5F9F7]">
      <div className="flex items-center  justify-center h-full mx-10 py-30 lg:mx-45">
        <div className="flex items-center justify-center flex-col w-full mx-5  ">
          <div className=" flex flex-col w-full mt-10" >
            <p className="text-[#FF685B] font-bold">Practical Advice</p>
            <h1 className="text-4xl font-bold">Our Department</h1>
            <p className="text-gray-500 font-medium">Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics</p>
          </div>
          {/* card */}
          <div className="flex gap-7 mt-13 w-full flex-wrap justify-between">
            {
              cardsData.map((data, index) => (
                <div key={index} className=" relative h-100 w-[350px] h-[622px]">
                  <Card
                    hoverable
                    style={{ width: 350, position: 'relative', borderRadius: "0px" }}
                    cover={
                      <>

                        
                        {/* icons */}
                        <div className=" relative bottom-0 m-0 left-0 w-full flex justify-center ">
                          <img
                          style={{ borderRadius: "0px",width:"100%"  }}
                          draggable={false}
                          alt="example"
                          src={data.img}
                        />
                          <div className="flex gap-5 justify-center w-full absolute bottom-3">
                            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white">
                              <EyeOutlined/>
                            </div>
                            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white">
                              <HeartOutlined />
                            </div>
                            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white">
                              <ShoppingCartOutlined />
                            </div>
                            
                            
                          </div>
                        </div>
                      </>
                    }
                  >
                    {/* sale */}
                    <div className="bg-[#E74040] absolute top-5 left-5  py-1 px-3 rounded text-white">sale</div>
                    {SimpleCart(data)}
                    <div>

                    </div>
                  </Card>
                  {/* icons */}

                </div>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  );
}
export default Service

function SimpleCart(data) {
  return (
    <div className="relative">
      <div className=" absolute rounded-4xl px-3 text-white bg-[#26335D] right-1"><StarFilled style={{ color: '#FFCE31' }} /> {data.rating}</div>
      <h1 className="text-[#FF685B]">{data.tag}</h1>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p><DownloadOutlined /> {data.sales} sales</p>
      <p className="text-gray-400 font-bold">${data.oldPrice} <span className="text-[#5AACA8]"> ${data.newPrice}</span></p>
      <Button type="primary" className="!bg-white !text-[#FF685B] !border-[#FF685B]" shape="round" icon={<DownloadOutlined />} size={20}>
        Download
      </Button>
    </div>
  )
}