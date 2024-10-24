import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

interface propsEvent{
  onMouseEnter : () => void
  onMouseLeave : () => void
}
const Button = ({onMouseEnter,onMouseLeave} : propsEvent) => {
  return (

    <a className='bg-[#282a29] rounded-md text-[#ffe6a7] py-3 justify-center 2xl:w-48 w-36 font-bold font-JetBrain flex items-center 2xl:text-xl text-[16px] gap-1' href="https://drive.google.com/file/d/1jpDQg8NGmoZJkZKH_UW8P2E-nSDVUw6B/view?usp=sharing">Download CV
    <span className='text-xl 2xl:text-2xl'
     onMouseEnter={onMouseEnter}
     onMouseLeave={onMouseLeave}><MdOutlineFileDownload/></span></a>

  )
}

export default Button