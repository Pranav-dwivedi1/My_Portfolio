import Link from 'next/link'
import React from 'react'
// import workshop from "../../assets/blog/joinWorkshop.webp"
import Image from "next/image";
import { GrWorkshop } from "react-icons/gr";

const JoinWorkshop = () => {
  return (
    <div className='rounded-xl bg-white shadow'>
        {/* <Image src={workshop} alt='Join Free WorkShop' className='rounded-t-xl'/> */}
        <Link className='' href={'https://webinar.egniol.co.in/'} target='_blank'                       rel="noopener noreferrer"
        >
        <div className="relative group">
        {/* Outer glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-[24px] blur opacity-25"></div>
        
        {/* Button container */}
        <div className="relative bg-[#03518F] rounded-b-xl flex justify-center items-center ">
          <button className="px-6 py-3 rounded-[24px] text-white flex items-center justify-center text-xl relative overflow-hidden">
            {/* Shine effect overlay */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 "></div>
            
            {/* Phone icon wrapper */}
            <span className="relative flex items-center justify-center mr-3">
              {/* Phone icon */}
              <GrWorkshop
                className="transform  transition-all duration-300 group-hover:scale-110" 
                size={22} 
              />
              {/* Ping effect */}
              <span className="absolute animate-ping h-3/4 w-3/4 rounded-full bg-blue-400 opacity-20"></span>
              {/* Pulse ring */}
              <span className="absolute h-full w-full rounded-full border border-blue-400/50 animate-pulse"></span>
            </span>
            
            {/* Phone number */}
            <span className="relative">
              <span className="bg-clip-text  bg-gradient-to-r from-white via-blue-100 to-white transition-colors duration-300">
              Join Free Workshop
              </span>

            </span>
          </button>
        </div>
      </div>
       </Link>

      
    </div>
  )
}

export default JoinWorkshop
