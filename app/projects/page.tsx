"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Swiper as SwiperTypes } from 'swiper';
import { MdOutlineArrowRightAlt } from "react-icons/md";


const Projects = [
  {
    num : "01",
    category : "fullstack",
    title : "Project  1",
    desxription : 
    "lorem ipsum dolor sit amet adipicing elit",
    stack : [
      {name : 'mongo DB'},{name : "express"}, {name:"react Js"},
    {name : "node Js"}],
    image : '/project1.svg'
  },
  {
    num : "02",
    category : "mobile app",
    title : "Project  1",
    desxription : 
    "lorem ipsum dolor sit amet adipicing elit",
    stack : [
      {name : 'flutter'},{name : "laravel"}, {name:"mySql"}],
    image : '/project2.svg'
  },
];

function page() {
  const [Project,SetProject] = useState(Projects[0]);

  const handleSlideChange = (swiper : SwiperTypes) => {
    const currentIndex = swiper.activeIndex;
    SetProject(Projects[currentIndex])
  }
  return (
    <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay:2.4, duration:0.4, ease : "easeIn"}}}
    className='flex flex-col min-h-[80vh] justify-center py-12 xl:px-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px] '>
          <div className='w-full xl:w-[50%] xl:h-[406px] xl:flex text-[#282a29] flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px]'>
              <div className='text-8xl font-JetBrain font-extrabold leading-none text-outline'>{Project.num}</div>
              <h2 className='text-[42px] leading-none text-[#282a29] font-JetBrain font-bold capitalize'>{Project.category} P</h2>
              <p className='text-[#282a29]/80 font-FiraMedium text-lg'>{Project.desxription}</p>
              <ul className='text-lg font-JetBrain font-bold capitalize flex gap-4'>
                {Project.stack.map((item, index) => {
                  return <li key={index}>{item.name}
                  {index !== Project.stack.length -1 && ","}</li>
                })}
              </ul>
              <div className='border border-[#282a29]/70'></div>
              <h1 className='text-xl flex items-center gap-1 text-[#282a29] font-JetBrain font-bold'>Swipe Left to Explore My Project <span className='text-4xl'><MdOutlineArrowRightAlt/></span></h1>
            </div>
            </div>
          <div className='w-full xl:w-[50%]'>
          <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12'
          onSlideChange={handleSlideChange}>
            {Projects.map((Project, index) => {
              return ( <SwiperSlide key={index} className='w-full'>
                <div className='h-[460px] relative group flex justify-center items-center bg-pink-50'>
                  <div></div>
                  <div className='relative w-full h-full'>
                    <Image src={Project.image} fill className='object-cover' alt='project'/>
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

export default page