"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

const Qr = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay:2.2, duration:0.4, ease : "easeIn"}}}
    whileHover={{translateY:-10}}
    className='flex flex-col max-sm:pt-5 max-sm:pb-5 max-sm:px-10 pt-8 pb-8 gap-5 shadow-lg px-12 items-center rounded-lg bg-[#f6bd60] '>
        <h1 className='text-3xl max-sm:text-2xl font-FiraBold text-center'> Get In Touch. </h1>
        <div className='w-[200px] h-[200px] max-sm:h-[150px] max-sm:w-[150px] rounded-sm'>
            <div className='relative h-full w-full'>
        <Image src ="/qrcode.svg" fill alt="Qr Code" className='object-contain' />
            </div>
        </div>
    </motion.div>
  )
}

export default Qr