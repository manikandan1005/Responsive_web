import React from 'react'
import{Typography} from "antd"
export default function 
() {
    const {Title}=Typography
  return (
    <div className='flex mt-15 items-center justify-center '>
        <div className='lg:mx-45 mx-10 my-20'>
            <div className='flex items-center justify-center'>
                            <div className='text-center flex flex-col w-3/4' >
                <p className='text-[#E74040] font-bold'>Newsletter</p>
                <Title className='font-bold'>Join Us</Title>
                <p>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
</p>
            </div>
            </div >
            <div className='mt-15 flex '>
                <input type="text" placeholder='Your Email ' className='border p-5 w-full bg-[#F9F9F9]' />
                <button className='bg-[#FF685B] !text-white px-3 py-5'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}
