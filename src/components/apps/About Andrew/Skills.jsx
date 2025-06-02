import React from "react";

// Badges -> https://github.com/inttter/md-badges?tab=readme-ov-file

const Skills = () => {
  return (
    <div className="w-full">
      <p className="mb-6">
        <p className="font-bold text-center text-[25px]">Skills</p>
        <p className="text-center text-xl">࿔━━━━━━━━━━━━࿔</p>
      </p>

      <p className="tracking-tight text-sm md:text-base">
        <p className="text-sm md:text-base mt-4">
          I've worked with a wide variety of programming languages & frameworks.
        </p>
        <p className="text-sm md:text-base mt-4">
          <p>Here are my most frequently used:</p>
        </p>
      </p>

      <div className="w-full flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages & Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
              alt="andrew javascript"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white"
              alt="andrew c++"
            />
            <img
              className="m-1"
              src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
              alt="andrew python"
            />
            <a
              href="https://www.google.com/search?q=is+html+a+language%3F"
              target="_blank"
              rel="noreferrer"
            >
              <img
                title="yes it's a language!"
                className="m-1"
                src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff"
                alt="andrew HTML"
              />
            </a>
            <img
              className="m-1"
              src="https://img.shields.io/badge/Java-%23ED8B00.svg?logo=openjdk&logoColor=white"
              alt="andrew java"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/AssemblyScript-007AAC?logo=assemblyscript&logoColor=fff"
              alt="assembly java"
            />
            <img
              src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff"
              alt="andrew git"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white"
              alt="andrew vercel"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/Claude-D97757?logo=claude&logoColor=fff"
              alt="andrew vercel"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=ffffff"
              alt="andrew next"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff"
              alt="andrew react"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff"
              alt="andrew vite"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
              alt="andrew tailwind css"
            />
            <img
              src="https://img.shields.io/badge/-Nodejs-339933?style=flat&logo=Node.js&logoColor=ffffff"
              alt="andrew node.js"
              className="m-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
