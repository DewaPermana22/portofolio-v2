"use client";

import Image from 'next/image';
import React from 'react'

const Qr = () => {
  return (
    <div className='flex flex-col pt-8 gap-10 px-12 items-center rounded-lg bg-[#f6bd60] '>
        <h1 className='text-3xl font-FiraBold text-center'> Scan Qr Code </h1>
        <div className='w-[250px] h-[250px] border-2 border-[#282a29] rounded-sm'>
            <div className='relative h-full w-full'>
        <Image src ="/qrcode.svg" fill alt="Qr Code" className='object-contain' />
            </div>
        </div>
    </div>
  )
}

export default Qr