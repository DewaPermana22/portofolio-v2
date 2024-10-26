import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";


const Button = () => {
  return (

    <a className='before:content-[""] before:absolute before:w-0 before:h-full before:top-0 before:left-0 before:bg-[#ffff] before:z-[-1] hover:before:w-[100%] hover:scale-105 hover:bg-[#ffe6a7] ease-in-out hover:text-[#282a29] hover:border-[#282a29] hover:border-2 transition-all duration-500 bg-[#282a29] rounded-md text-[#ffe6a7] py-3 justify-center 2xl:w-48 w-36 font-bold font-JetBrain flex items-center 2xl:text-xl text-[16px] gap-1 border-2 border-[#ffe6a7]' href="https://drive.google.com/file/d/1jpDQg8NGmoZJkZKH_UW8P2E-nSDVUw6B/view?usp=sharing">Download CV
    <span className='text-xl 2xl:text-2xl'
    ><MdOutlineFileDownload/></span></a>

  )
}

export default Button