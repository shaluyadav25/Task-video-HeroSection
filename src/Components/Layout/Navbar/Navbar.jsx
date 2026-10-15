import { useState } from "react"
import { MonitorCheck } from "lucide-react"
const Navbar = () => {
    const[openMenu,setOpenMenu]=useState(false)
  return (
    <>
    <nav className="absolute top-0 left-0 z-10 w-full min-h-screen">
        <div className="flex justify-between font-semibold text-2xl p-5 bg-transparent text-black">
       <MonitorCheck  size={55} className="text-white"/>
       
        <button className="lg:hidden text-3xl font-bold text-white" onClick={()=>setOpenMenu(!openMenu)}>
            {openMenu?"X" : "☰"}
        </button>
         <ul className="hidden lg:flex gap-7 text-white text-2xl font-semibold">
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>About</li>
            <li><a href="#"></a>Services</li>
            <li><a href="#"></a>Product</li>
            <li><a href="#">Contact</a></li>
        </ul>
                    <button className="hidden lg:block bg-blue-700 text-white  mx-5 p-3 text-center rounded-xl">Get Started</button>
         </div>
        {openMenu && (
             <ul className="flex flex-col gap-5 p-4 font-semibold text-2xl">
            <li><a href="#"></a>Home</li>
            <li><a href="#"></a>About</li>
            <li><a href="#"></a>Services</li>
            <li><a href="#"></a>Product</li>
            <li><a href="#">Contact</a></li>
            <button onClick={()=>setOpenMenu} className=" bg-blue-700 text-white w-full mx-3 p-2 text-center rounded-xl">Get Started</button>
        </ul>
        )}
    </nav>
    </>
  )
}

export default Navbar