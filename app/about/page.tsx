"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import AboutPhoto from "@/components/AboutPhoto";

type SkillBarProps = {
  skill: string;
  percentage: number;
};

const SkillBar: React.FC<SkillBarProps> = ({ skill, percentage }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const skillBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer : IntersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              barRef.current,
              { width: "0%" },
              {
                width: `${percentage}%`,
                duration: 8,
                ease: "power2.out",
              }
            );

            gsap.fromTo(
              numberRef.current,
              { innerText: 0 },
              {
                innerText: percentage,
                duration: 7,
                ease: "power2.out",
                snap: { innerText: 1 },
                onUpdate: function () {
                  if (numberRef.current) {
                    numberRef.current.innerText =
                      Math.round(this.targets()[0].innerText) + "%";
                  }
                },
              }
            );

            observer.unobserve(skillBarRef.current!);
          }
        });
      },
      { threshold: 1 }
    );

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }

    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, [percentage]);

  return (
    <div ref={skillBarRef}>
      <div className="flex">
        <h2 className="text-[#282a29] 2xl:text-2xl font-FiraMedium">{skill}</h2>
      </div>
      <div className="flex items-center gap-5">
      <div className="w-1/2 2xl:w-3/4 max-sm:w-full bg-[#ffe6a7] border-2 border-[#282a29] rounded h-3 overflow-hidden">
        <div ref={barRef} className="bg-[#282a29] h-full"></div>
      </div>
        <span ref={numberRef} className="text-[#282a29] 2xl:text-xl font-FiraMedium"></span>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <main className="bg-[#ffe6a7] max-sm:pb-20 overflow-auto">
      <div className="flex max-sm:flex-col justify-center 2xl:-mt-0 -mt-10 max-sm:-mt-5 px-14 2xl:px-24 2xl:gap-10 items-center">
        <AboutPhoto/>
        <div className="max-sm:text-center max-sm:-mt-5">
          <h1 className="2xl:text-2xl text-lg max-sm:text-sm text-[#282a29] font-FiraMedium">
            I am currently a third-semester student at SMKN 8 Jember. I began my career path when I entered the Software Engineering program at SMK Negeri 8 Jember.
          </h1>
          <h1 className="2xl:text-2xl text-lg max-sm:text-sm text-[#282a29] font-FiraMedium">
            From there, I have learned a lot about the programming world, from web development to desktop application development.
          </h1>
          <h1 className="text-2xl 2xl:text-4xl text-[#282a29] font-FiraMedium mt-5 mb-2">My Skills:</h1>
          <SkillBar skill="Fullstack" percentage={45} />
          <SkillBar skill="Frontend" percentage={60} />
          <SkillBar skill="Backend" percentage={40} />
          <SkillBar skill="Databases & Query" percentage={55} />
        </div>
        </div>
      
    </main>
  );
};

export default About;
