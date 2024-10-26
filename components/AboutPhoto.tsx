import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";


const AboutPhoto = () => {
  return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out hover:scale-105 lg:w-[550px] max-sm:w-[400px] max-sm:h-[400px] lg:h-[550px] 2xl:w-[498px] 2xl:h-[498px]"
        >
          <Image
            src="/about.svg"
            priority
            quality={100}
            fill
            alt="ProfilPict"
            className="object-contain"
          />
        </motion.div>
  )
}

export default AboutPhoto