import Photo from '@/components/Photo'
import './globals.css'
import React from 'react'
import Button from '@/components/Button'
import Footer from '@/components/ui/Footer'

function page() {
  return (
    <>
    <main className='bg-[#ffe6a7] flex max-sm:flex-col-reverse md:flex-row items-center md:px-12 lg:px-0 justify-around'>
      <div className='xl:ms-0 text-center xl:order-none md:text-start text-[#282a29]'>
     <h1 className=' xl:text-2xl text-sm sm:text-lg font-JetBrain font-extrabold'>
      JUNIOR SOFTWARE DEVELOPER.
     </h1>
     {/* judul utama */}
     <div className='text-[#282a29] mt-5 max-sm:mt-2'>
     <h1 className='2xl:text-8xl text-4xl xl:text-6xl lg:text-5xl font-JetBrain font-bold'>
      Hello I&apos;m
     </h1>
     <h1 className='2xl:text-8xl text-4xl xl:text-6xl lg:text-5xl font-FiraBold'>
      Dewa Permana.
     </h1>
     {/* Deskripsi */}
     <h1 className='2xl:text-xl lg:text-lg max-w-xl 2xl:mt-7 lg:mt-3 sm:mt-3 tracking-wider space max-sm:text-center sm:text-sm text-xs max-sm:px-10 max-sm:text-wrap font-FiraMedium '>
     Saya adalah Junior Software Developer yang senang belajar hal baru dan bersemangat mengembangkan solusi kreatif. Suka tantangan, kolaborasi, dan selalu siap berkembang bersama tim!
     </h1>
     {/* button */}
     <div className='2xl:mt-7 lg:mt-2 max-sm:mt-3 max-sm:flex max-sm:justify-center '>
     <Button/> 
     </div>
     </div>
      </div>
      {/* Photo */}
      <div>
      <Photo/>
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default page
