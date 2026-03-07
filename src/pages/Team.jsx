import React from 'react'
import img1 from "../assets/user-cover-1.png"
import img2 from "../assets/user-cover-2.png"
import img3 from "../assets/user-cover-3.png"
import img4 from "../assets/user-cover-4.png"
import {Card, Typography} from "antd"

function Team() {
  const { Title } = Typography;
  const {Meta}=Card;
  const terms=[
  {
    "id": 1,
    "name": "Julian Jameson",
    "profession": "Profession",image:img1
  },
  {
    "id": 2,
    "name": "Julian Jameson",image:img2,
    "profession": "Profession"
  },
  {
    "id": 3,
    "name": "Julian Jameson",
    "profession": "Profession",image:img3
  },
  {
    "id": 4,
    "name": "Julian Jameson",
    "profession": "Profession",image:img4
  }
]
  return (
    <div className='flex items-center justify-center '>
        <div className="lg:mx-45 mx-10 my-20 ">
            <div className='md:w-1/2'>
              <p className='text-[#E74040] font-bold'>Team</p>
              <Title className='font-bold' >Our Team</Title>
              <p className='text-[#737373]'>Problem trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
            </div>
            <div className='flex items-center justify-center mt-20'>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                  terms.map(i=>(
<Card key={i.id}
    hoverable
    // style={{ width: 240 }}
    cover={
      <img
        draggable={false}
        alt="example"
        src={i.image}
      />
    }
  >
    <Meta title={i.name} description={i.profession} />
  </Card>
                  ))
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default Team