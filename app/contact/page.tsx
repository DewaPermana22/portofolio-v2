"use client";
import Qr from '@/components/ui/Qr';
import { motion } from 'framer-motion'
import { SiGmail } from "react-icons/si";
import { FaSquarePhone } from "react-icons/fa6";

import React from 'react'

function page() {
  return (
    <motion.section
    initial={{opacity:0}} animate={{opacity:1, transition:{delay:2, duration:0.4, ease : "easeIn"}}} className='flex justify-around max-sm:flex-col items-center max-sm:mt-5 mt-10'>
      <div className="flex ms-10 max-sm:ms-0 max-sm:px-10 flex-col text-justify gap-5 text-[#282a29]">
      <h1 className='text-4xl max-sm:text-2xl font-FiraBold'>Lets Work Together!</h1>
      <h1 className='text-xl max-sm:text-sm font-semibold font-JetBrain text=[#282a29]/80 max-w-[600px]'>
      I&apos;m here to help bring creative ideas to life. Let&apos;s connect and make something great together!
      </h1>
      <h1 className='text-sm max-sm:text-[12px] max-sm:hidden font-bold font-JetBrain'><span className='text-red-600 font-bold pr-1'>*</span>Scan The QR Code Beside To Contact Me</h1>
      <h1 className='text-sm max-sm:text-[12px] sm:hidden font-bold font-JetBrain'><span className='text-red-600 font-bold pr-1'>*</span>Scan The QR Code Bellow To Contact Me</h1>
      <div className='text-[#282a29] max-sm:py-5'>
        <a className='flex items-center gap-2 font-FiraMedium text-xl' href=""><SiGmail/> dewaprmnaptr@gmail.com</a>
        <a className='flex items-center gap-2 font-FiraMedium text-xl' href=""><FaSquarePhone/> +62 853 3517 6532</a>
      </div>
      </div>
      <Qr/>
    </motion.section>
  )
}

export default page