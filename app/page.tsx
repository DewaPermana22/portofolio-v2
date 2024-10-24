"use client";

import Photo from '@/components/Photo'
import './globals.css'
import React, { useEffect, useState } from 'react'
import Button from '@/components/Button'
import Footer from '@/components/ui/Footer'
import { Variants, motion } from 'framer-motion';

const  Page = () => {
  const [cursorVariant, setCursorVariant] = useState('default');
  const [cursorPosition, setCursorPosition] = useState({x:0,y:0});

  const ambilPosisiKursor = (e : MouseEvent) => {
    setCursorPosition({x : e.clientX, y : e.clientY});
  };

  useEffect(()=>{
    window.addEventListener('mousemove', ambilPosisiKursor);
    return () => {
        window.removeEventListener('mousemove', ambilPosisiKursor)
    };
  }, []);

  const textEnter = () => setCursorVariant('hover')
  const textLeave = () => setCursorVariant('default')

  const variants : Variants = {
    default : {
      x : cursorPosition.x -16,
      y : cursorPosition.y -16,
      scale : 1,
      backgroundColor : "#282a29",
   },
    hover : {
      x : cursorPosition.x - 36,
      y : cursorPosition.y - 36,
      scale : 2,
      backgroundColor : "#ffe6a7",
      mixBlendMode : "difference",
    },
  };
 
  return (
    <>
    {/* cursor */}
    <motion.div className='fixed top-0 left-0 w-8 h-8 bg-black rounded-full pointer-events-none z-50'
    variants={variants}
    animate={cursorVariant}
    transition={{type : "spring", stiffness:500, damping:30}}/>

    {/* main content */}
    <main className='flex max-sm:flex-col-reverse md:flex-row items-center md:px-12 lg:px-0 justify-around'>
      <div className='max-sm:mt-0 mt-10 xl:ms-0 text-center xl:order-none md:text-start text-[#282a29]'>
     <h1 className=' xl:text-2xl text-sm sm:text-lg font-JetBrain font-extrabold'
     onMouseEnter={textEnter}
     onMouseLeave={textLeave}>
      JUNIOR SOFTWARE DEVELOPER.
     </h1>
     {/* judul utama */}
     <div className='text-[#282a29] mt-5 max-sm:mt-2'>
     <h1 className='2xl:text-8xl text-4xl xl:text-6xl lg:text-5xl font-JetBrain font-bold'
     onMouseEnter={textEnter}
     onMouseLeave={textLeave}
     >
      Hello I&apos;m
     </h1>
     <h1 className='2xl:text-8xl text-4xl xl:text-6xl lg:text-5xl font-FiraBold'
     onMouseEnter={textEnter}
     onMouseLeave={textLeave}>
      Dewa Permana.
     </h1>
     {/* Deskripsi */}
     <h1 className='xl:text-xl max-w-xl xl:mt-7 lg:mt-3 sm:mt-3 tracking-wider space max-sm:text-center sm:text-sm text-xs max-sm:px-10 max-sm:text-wrap font-FiraMedium '
     onMouseEnter={textEnter}
     onMouseLeave={textLeave}>
     Saya adalah Junior Software Developer yang senang belajar hal baru dan bersemangat mengembangkan solusi kreatif. Suka tantangan, kolaborasi, dan selalu siap berkembang bersama tim!
     </h1>
     {/* button */}
     <div className='mt-7 max-sm:mt-3 max-sm:flex max-sm:justify-center '>
     <Button
     onMouseEnter={textEnter}
     onMouseLeave={textLeave}
     /> 
     </div>
     </div>
      </div>
      {/* Photo */}
      <div>
      <Photo/>
      </div>
    </main>
    <Footer
     onMouseEnter={textEnter}
     onMouseLeave={textLeave}/>
    </>
  )
}

export default Page
