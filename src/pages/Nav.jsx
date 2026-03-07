import { Menu, X } from "lucide-react";
import { useState } from "react";

function Nav(){
    const menu=[{name:"Home" , link:"home"},{name:"Product",link:"product"},{name:"Pricing",link:"pricing"},{name:"Contact",link:"contact"}]
    const [open,setOpen]=useState(false);
    function isOpen(){
        setOpen(!open);
        console.log(open)
    }
    return(
        <>
        <nav className="fixed left-0 top-0 z-10 w-full  bg-white">
        <div className="  flex   items-center justify-around py-2 ">
            {/* title */}
            <div className="flex md:w-full md:justify-around lg:w-auto gap-10 justify-between items-center">
                <h1 className="text-black text-center  font-bold text-2xl">
                    MedicalRecov
                </h1>
                <div className="md:flex gap-4 text-gray-400 hidden">
                {
                    menu.map((title,index)=>(
                        <a key={index}  href={title.link}>{title.name}</a>
                    ))
                }
            </div>
            </div>
            {/* menu */}

            {/* login */}
            <div className="hidden lg:flex gap-4">
                <button className="px-6 py-2 font-bold rounded text-orange-600 ">Login</button>
                <button className="px-6 py-2 font-bold  uppercase bg-orange-600 text-white rounded ">Join us</button>
            </div>
            {/* mobile view */}
            <div className="md:hidden">
                <button onClick={isOpen}>
                    {open?<X/>:<Menu/>}
                </button>
            </div>

        </div>
        {
            open&&(
                <div className="flex flex-col gap-4 my-4 items-center justify-center">
                    {
                    menu.map((title,index)=>(
                        <a key={index} onClick={()=>setOpen(false)}  href={title.link}>{title.name}</a>
                    ))
                }
                </div>
            )
        }
        </nav>
        </>
    );
}
export default Nav;