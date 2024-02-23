"use client";
import Brain from "@/components/brain";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex">
        {/* TEXT CONTAINER */}
        <div className="p-8 sm:p-8 md:p-12 lg:p-20 l:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
              {/* BIOGRAPHY QUOTE */}
            </p>
            <span className="italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILL TITLE */}
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML/CSS
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ES6
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Webpack
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML/CSS
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Shell/Bash
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                PostgreSQL
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Ruby
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                RoR
              </div>

              <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* EXPERIENCE TITLE */}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}
            <div className="">
              {/* EXPERIENCE LIST ITEM 1 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">Fullstack Learner</div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat !
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold">2021 - Present</div>
                  {/* COMPANY NAME */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">The Hacking Project (THP)</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-700 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-700 bg-black -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
               {/* EXPERIENCE LIST ITEM 2 */}
               <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-700 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-700 bg-black -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                    {/* JOB TITLE */}
                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">Learner</div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold">2022 - Present</div>
                  {/* COMPANY NAME */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Dyma.fr</div>
                </div>
                
              </div>
              {/* EXPERIENCE LIST ITEM 3 */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg w-fit">C and Shell/bash Learner</div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat quibusdam dolores numquam incidunt.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold">August 2023</div>
                  {/* COMPANY NAME */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">42 - Mulhouse</div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-700 rounded relative">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-700 bg-black -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              </div>
            </div>
          </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:1/2">
          <Brain />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
