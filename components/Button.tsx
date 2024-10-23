import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";


const Button = () => {
  return (
    <a className='bg-[#282a29] rounded-md text-[#ffe6a7] py-3 justify-center w-48 max-sm:text-lg font-bold font-JetBrain flex items-center text-xl gap-1' href="https://drive.google.com/file/d/1jpDQg8NGmoZJkZKH_UW8P2E-nSDVUw6B/view?usp=sharing">Download CV
    <span className='text-2xl'><MdOutlineFileDownload/></span></a>
  )
}

export default Button