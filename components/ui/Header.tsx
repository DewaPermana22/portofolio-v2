import React from 'react'
import Link from 'next/link'
import Navbar from '../Navbar'
import Image from 'next/image'
function Header() {
  return (
    <header className='flex bg-[#ffe6a7] relative xl:-mt-9 justify-between items-center '>
    <Link href="/" >
    <Image
    src ="/Dewapermana..svg"
    alt='logo'
    className='w-32 lg:w-36 2xl:w-44'
    width="200"
    height="200"/>
    </Link>
  <Navbar/>    
    </header>
  )
}

export default Header