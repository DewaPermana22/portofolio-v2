import React from 'react'
import { FaWhatsapp,FaInstagram,FaLinkedin, FaGithub } from "react-icons/fa";

interface propsEvent{
  onMouseEnter : () => void
  onMouseLeave : () => void
}
const Footer = ({onMouseEnter,onMouseLeave} : propsEvent) => {
  return (
    <footer className='border-t-2 flex xl:flex-row max-sm:flex-col px-24 max-sm:px-0 justify-between border-[#282a29] mt-24 xl:mt-32 sm:mt-48 p-10'>
        <div className='max-sm:ms-10'>
        <h1 className='font-FiraBold sm:text-2xl xl:text-3xl' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>Designed to Inspire. Built to Last.</h1>
        <h1 className='font-FiraMedium xl:text-lg sm:text-sm' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>&copy; 2024 Dewa Permana. All Rights Reserved</h1>
        </div>
        <div className='flex flex-col items-center max-sm:mt-5 gap-2'>
            <h1 className='xl:text-lg max-sm:text-sm font-JetBrain font-bold'>More Action : </h1>
            <div className='flex'>
                    <a href="https://wa.me/6285335176532" className='cursor-pointer group flex flex-col items-center'
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
                    <FaWhatsapp className='text-3xl'/>
                    <span className='text-xs inset-0 font-FiraMedium group-hover:opacity-100 transition-all duration-500 opacity-0'>Whatsapp</span>
                    </a>
                    <a href="https://www.instagram.com/dewaprmnasty._/" className='cursor-pointer group flex flex-col items-center'
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
                    <FaInstagram className='text-3xl'/>
                    <span className='text-xs font-FiraMedium inset-0 group-hover:opacity-100 transition-all duration-500 opacity-0'>Instagram</span>
                    </a>
                    <a href="" className='cursor-pointer group flex pe-3 flex-col items-center'
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
                    <FaLinkedin className='text-3xl'/>
                    <span className='text-xs font-FiraMedium inset-0 group-hover:opacity-100 transition-all duration-500 opacity-0'>Linkedin</span>
                    </a>
                    <a href="https://github.com/DewaPermana22" className='cursor-pointer group flex flex-col items-center'
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}>
                    <FaGithub className='text-3xl'/>
                    <span className='text-xs font-FiraMedium inset-0 group-hover:opacity-100 transition-all duration-500 opacity-0'>Github</span>
                    </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer