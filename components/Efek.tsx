import { motion } from 'framer-motion'
import React from 'react'

const Animation = {
    initial : {
        top : "0%",
    },
    animate:{
        top : "100%",
    },
    exit:{
        top : ["100%","0%"],
    },
};
const reverseIndex = (index : number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}
const Efek = () => {
  return (
    <>
    {[...Array(6)].map((_, index) => {
        return(
            <motion.div key={index} variants={Animation} initial="initial" animate="animate" exit="exit" 
            transition={{duration:0.4, ease : "easeInOut", delay: reverseIndex(index) * 0.1}}
            className='h-full w-full bg-[#282a29] relative'/>
        );
    })}
    </>
  )
}

export default Efek