"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay} from 'swiper/modules';
import { Swiper as SwiperTypes } from 'swiper/types';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import 'swiper/css/autoplay';


const Projects = [
  {
    num : "01",
    category : "fullstack",
    title : "E-Mading ESKALABER",
    desxription : 
    "E-Mading Eskalaber is a digital platform featuring the wall magazine works of SMK Negeri 8 Jember students. It provides a creative space for students to showcase their ideas and artwork online with an easy-to-use, modern interface.",
    stack : [
      {name : 'mongo DB'},{name : "express"}, {name:"react Js"},
    {name : "node Js"}],
    image : '/mading.svg'
  },
  {
    num : "02",
    category : "mobile app",
    title : "Simaska App",
    desxription : 
    "SIMASKA App is a mobile application for school management, designed to streamline administrative tasks, student data, and communication between teachers, students, and parents. It offers a user-friendly interface to manage schedules, attendance, grades, and announcements efficiently.",
    stack : [
      {name : 'flutter'},{name : "laravel"}, {name:"mySql"}],
    image : '/simaska.svg'
  },
];

function Page() {
  const [Project,SetProject] = useState(Projects[0]);

  const handleSlideChange = (swiper : SwiperTypes) => {
    const currentIndex = swiper.activeIndex;
    SetProject(Projects[currentIndex])
  }
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease : "easeIn"}}}
    className='flex flex-col min-h-[80vh] justify-center xl:py-0 xl:mt-5 2xl:py-12 xl:px-0 max-sm:px-10 max-sm:py-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[20px] max-sm:gap-[10px]'>
          <div className='w-full xl:w-[50%] xl:h-[406px] xl:flex text-[#282a29] flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col xl:gap-[30px] max-sm:gap-[20px]'>
              <div className='2xl:text-8xl lg:text-6xl font-JetBrain font-extrabold leading-none text-outline max-sm:text-5xl'>{Project.num}</div>
              <h2 className='2xl:text-[42px] lg:text-[25px] leading-none text-[#282a29] font-JetBrain font-bold capitalize'>{Project.category} Project</h2>
              <h2 className='text-[42px] max-sm:text-[30px] leading-none text-[#282a29] lg:-mt-2 2xl:-mt-0 font-JetBrain font-bold capitalize'> {Project.title}
              </h2>
              <p className='text-[#282a29]/80 font-FiraMedium max-sm:text-xs text-justify xl:max-w-[450px] 2xl:text-lg xl:text-sm'>{Project.desxription}</p>
              <ul className='text-lg font-JetBrain font-bold capitalize flex gap-4'>
                {Project.stack.map((item, index) => {
                  return <li key={index}>{item.name}
                  {index !== Project.stack.length -1 && ","}</li>
                })}
              </ul>
              <div className='border border-[#282a29]/70'></div>
              <h1 className='text-xl flex items-center gap-1 text-[#282a29] xl:-mt-3 max-sm:text-lg font-JetBrain font-bold'>Swipe Left to Explore My Project <span className='text-4xl'><MdOutlineArrowRightAlt/></span></h1>
            </div>
            </div>
          <div className='w-full xl:w-[50%]'>
          <Swiper 
          modules={[Autoplay]}
          autoplay={{delay: 5000, disableOnInteraction: false}}
          spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12'
          onSlideChange={handleSlideChange}
          grabCursor={true} touchRatio={1} resistanceRatio={0.85}
          >
            {Projects.map((Project, index) => {
              return ( <SwiperSlide key={index} className='w-full'>
                <div className='h-[460px] max-sm:h-[360px] relative group flex justify-center items-center bg-pink-50'>
                  <div></div>
                  <div className='relative w-full h-full'>
                    <Image src={Project.image} fill className='object-cover pointer-events-none' alt='project'/>
                  </div>
                </div>
              </SwiperSlide>
              );
            })}
          </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Page