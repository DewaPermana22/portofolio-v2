"use client"
import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "February 2023 - December 2024",
    title: "I Joined Industrial Class With PT. HUMMATECH",
    description: "Here I learned about Java and Laravel programming",
  },
  {
    year: "September 2024 - 2026",
    title: "Mobile Application Developer at Teaching Factory SMKN 8 JEMBER",
    description:
      "I was recruited to become a member of the teaching factory at SMKN 8 JEMBER which collaborates with PT JINGGOLABS. especially in the field of mobile application development with Flutter.",
  },
  {
    year: "November 2024",
    title: "2nd Place in Web Development Competition at Politeknik Negeri Malang",
    description:
      "2nd place in the Web Development Competition in the best presentation category.",
  },
  {
    year: "December 2024",
    title: "Bootcamp at PT UNIVERSAL BIG DATA",
    description: "Here I learned a lot of application development, starting from creating Backend APIs, Mobile Application Development with Kotlin and Desktop Application Development with .NET",
  },
  {
    year: "January 2025 - June 2025",
    title: "Internship at PT UNIVERSAL BIG DATA",
    description: "Here I joined the web scraping division, for 6 months and developed ODOO software.",
  },
];

const ResumePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        Resume - Dewa Permana
      </h1>
      <div className="w-full max-w-4xl">
        <div className="relative border-l-4 border-[#282a29]">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -90 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.5, delay: index * 0.5 }}
            >
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full">
                <span className="w-3 h-3 bg-white rounded-full"></span>
              </span>
              <div className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <time className="block text-sm text-gray-500 mb-2">
                  {item.year}
                </time>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
