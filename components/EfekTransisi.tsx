"use client";
import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'
import { usePathname } from 'next/navigation'
import Efek from './Efek';
const EfekTransisi = () => {
    const pathName = usePathname();
  return (
    <>
    <AnimatePresence mode="wait">
        <div key={pathName}>
            <div className='h-screen w-screen fixed top-0 left-0 flex z-[100] pointer-events-none right-0'>
                <Efek/>
            </div>

            <motion.div
            className='h-screen w-screen fixed bg-[#99582a] top-0 pointer-events-none'
            initial={{opacity:1}}
            animate={{
                opacity:0,
                transition : {delay: 1, duration : 0.4, ease:"easeInOut"}
            }}/>
        </div>
    </AnimatePresence>
    </>
  );
};

export default EfekTransisi