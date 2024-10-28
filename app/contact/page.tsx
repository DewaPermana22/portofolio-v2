"use client";
import FormCTA from '@/components/ui/FormCTA';
import Qr from '@/components/ui/Qr';
import { motion } from 'framer-motion'
import React from 'react'

function page() {
  return (
    <>
    <motion.div className='flex flex-col items-center'>
      <h1 className='text-3xl font-FiraBold ms-5 mt-5'>Call To Action</h1>
      <h1 className='text-xl font-JetBrain font-bold ms-5'>Silahkan hubungi saya menggunakan</h1>
    </motion.div>
    <div className='flex'>
      <div className='flex flex-col'>
        <FormCTA/>
      </div>
      <div>
        <Qr/>
      </div>
    </div>
    </>
  )
}

export default page