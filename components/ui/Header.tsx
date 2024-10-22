import React from 'react'
import Link from 'next/link'
import Navbar from '../Navbar'
function Header() {
  return (
    <header className='flex relative -top-10 justify-between items-center '>
    <Link href="/" >
       <img className='w-32 xl:w-44' src="/Dewapermana..svg" alt="" />
    </Link>
  <Navbar/>    
    </header>
  )
}

export default Header