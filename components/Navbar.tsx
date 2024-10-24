"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Pivot as Hamburger } from 'hamburger-react'

const Navigasi = [
    {
        name : 'home',
        path : '/',
    },
    {
        name : 'about',
        path : '/about',
    },
    {
        name : 'projects',
        path : '/projects',
    },
    {
        name : 'contact',
        path : '/contact',
    },
    {
        name : 'resmue',
        path : '/resume',
    },
    
]
const Navbar = () => {
    const navMenu = usePathname();
return(
    <>
    <nav className=" px-10 hidden lg:flex font-JetBrain 2xl:pt-0 pt-10 gap-6 text-lg xl:text-xl">
        {Navigasi.map((link, index) => {
            return <Link href={link.path} key={index} className={`${link.path === navMenu && "border-b-2 border-[#282a29]"} capitalize hover:text-[#bc6c25] text-[#282a29] duration-500 ease-in-out transition-all font-bold`}>
                    {link.name}
                    </Link>
        })}
    </nav>
        <div className="flex px-5 pt-5 lg:hidden">
            <Hamburger/>
        </div>
    </>
)
}

export default Navbar;