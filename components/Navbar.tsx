"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <nav className=" px-10 hidden lg:flex font-JetBrain xl:pt-0 pt-10 gap-6 text-lg xl:text-xl">
        {Navigasi.map((link, index) => {
            return <Link href={link.path} key={index} className={`${link.path === navMenu && "border-b-2 border-[#282a29]"} capitalize hover:text-[#bc6c25] duration-500 ease-in-out transition-all font-bold`}>
                    {link.name}
                    </Link>
        })}
    </nav>
)
}

export default Navbar;