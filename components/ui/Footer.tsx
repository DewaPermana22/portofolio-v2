import React from 'react'
import { FaWhatsapp,FaInstagram,FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#ffe6a7] text-[#282a29] flex xl:flex-row max-sm:flex-col-reverse px-24 max-sm:px-0  justify-between lg:mt-2 2xl:mt-32 sm:mt-48 pt-8'>
        <div className='max-sm:justify-center max-sm:flex max-sm:flex-col max-sm:items-center'>
        <h1 className='font-FiraBold sm:text-2xl  2xl:text-3xl'>Designed to Inspire. Built to Last.</h1>
        <h1 className='font-FiraMedium 2xl:text-lg sm:text-sm'>&copy; 2024 Dewa Permana. All Rights Reserved</h1>

        </div>
        <div className='flex flex-col items-center max-sm:mt-5 gap-2'>
            <h1 className='xl:text-lg max-sm:text-sm font-JetBrain font-bold'>More Action : </h1>
            <div className='flex'>
                    <a href="https://wa.me/6285335176532" className='cursor-pointer group flex flex-col items-center'>
                    <FaWhatsapp className='text-3xl'/>
                    <span className='text-xs inset-0 font-FiraMedium group-hover:opacity-100 transition-all duration-500 opacity-0'>Whatsapp</span>
                    </a>
                    <a href="https://www.instagram.com/dewaprmnasty._/" className='cursor-pointer group flex flex-col items-center'>
                    <FaInstagram className='text-3xl'/>
                    <span className='text-xs font-FiraMedium inset-0 group-hover:opacity-100 transition-all duration-500 opacity-0'>Instagram</span>
                    </a>
                    <a href="" className='cursor-pointer group flex pe-3 flex-col items-center'>
                    <FaLinkedin className='text-3xl'/>
                    <span className='text-xs font-FiraMedium inset-0 group-hover:opacity-100 transition-all duration-500 opacity-0'>Linkedin</span>
                    </a>
                    <a href="https://github.com/DewaPermana22" className='cursor-pointer group flex flex-col items-center'>
                    <FaGithub className='text-3xl'/>
                    <span className='text-xs font-FiraMedium inset-0 group-hover:opacity-100 transition-all duration-500 opacity-0'>Github</span>
                    </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer