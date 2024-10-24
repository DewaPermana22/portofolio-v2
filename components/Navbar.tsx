"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Pivot as Hamburger } from 'hamburger-react';
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const Navigasi = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'contact',
    path: '/contact',
  },
  {
    name: 'resume',
    path: '/resume',
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // useState untuk mengontrol menu
  const menuRef = useRef<HTMLDivElement>(null); // Ref untuk menu
  const navMenu = usePathname();

  // Menggunakan GSAP untuk animasi
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { x: '100%', opacity: 0 }, // Menu mulai dari kanan luar layar
        { x: '0%', opacity: 1, duration: 0.5, ease: 'power3.out' } // Menu muncul ke layar dengan animasi
      );
    } else {
      gsap.to(menuRef.current, { x: '100%', opacity: 0, duration: 0.5, ease: 'power3.in' }); // Menu menghilang ke kanan
    }
  }, [isOpen]); // Hanya aktif ketika isOpen berubah

  return (
    <>
      {/* Navbar untuk layar besar */}
      <nav className="px-10 hidden lg:flex mt-5 font-JetBrain gap-6 text-lg xl:text-xl">
        {Navigasi.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${link.path === navMenu && "border-b-2 border-[#282a29]"} capitalize hover:text-[#bc6c25] text-[#282a29] duration-500 ease-in-out transition-all font-bold`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Icon Hamburger untuk layar kecil */}
      <div className="flex z-50 px-5 pt-5 lg:hidden">
        <Hamburger
          toggled={isOpen} // kontrol state
          toggle={setIsOpen} // mengubah state
          color="#282a29"
        />
      </div>

      {/* Menu navigasi untuk layar kecil */}
      <nav
        ref={menuRef}
        className="px-10 absolute lg:hidden mt-5 flex flex-col z-[49] right-0 top-0 pt-40 bg-[#ffe6a7] h-[150vh] w-full items-center font-JetBrain gap-6 text-lg xl:text-xl"
        style={{ opacity: 0, transform: 'translateX(100%)' }}
      >
        {Navigasi.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${link.path === navMenu && "border-b-2 border-[#282a29]"} capitalize hover:text-[#bc6c25] text-[#282a29] duration-500 ease-in-out transition-all font-bold`}
              onClick={() => setIsOpen(false)} 
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
