import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

interface propsEvent{
  onMouseEnter : () => void
  onMouseLeave : () => void
}
const Button = ({onMouseEnter,onMouseLeave} : propsEvent) => {
  return (
    <a className='bg-[#282a29] rounded-md text-[#ffe6a7] py-3 justify-center w-48 max-sm:text-lg font-bold font-JetBrain flex items-center text-xl gap-1' href="https://drive.google.com/file/d/1jpDQg8NGmoZJkZKH_UW8P2E-nSDVUw6B/view?usp=sharing"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
      Download CV
    <span className='text-2xl'
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
    <MdOutlineFileDownload/>
    </span>
    </a>
  )
}

export default Button