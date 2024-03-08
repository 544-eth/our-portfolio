'use client'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import BrainPage from '../component/brain'

export default function AboutPage() {


    const containerRef = useRef()
    const {scrollYProgress} = useScroll({container:containerRef})


  return (
    <motion.div 
         className='bg-gradient-to-bl from-blue-50 to-yellow-50' 
         initial={{y: "-200vh"}} 
         animate={{y: "0%"}} 
         transition={{duration: 1.2}}>


            {/* CONTAINER */}
          <div className=' h-full  lg:flex' ref={containerRef}>
                {/* TEXT CONTAINER */}
                  <div className=' flex flex-col p-4 sm:p-8 md:p-12 lg:p-20 gap-24 md:gap-32 lg:gap-44 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
                    {/* BIOGRAPHY CONTAINER */}
                      <div className=' flex flex-col gap-12 justify-center'>
                      {/* BIOGRAPHY */}
                          <h1 className=' text-3xl font-extrabold'>BIOGRAPHY</h1>
                          {/* BIOGRAPHY DESCRIPTION */}
                          <p className=' text-wrap'>My name is Francis Elioku, I am a Next.JS junior DEV from Anambra State but based in Lagos State Nigeria, I started React Development six months ago and I believe with my experience I can work and excel beyond greater height and and achieve greatness with team around the world if given the opportunity. </p>
                          {/* BIOGRAPHY QUOTES */}
                          <span className=' italic'>BEING 1% HAS PAVED WAY FOR MANY ENTERPRENEURS</span>
                          {/* SIGNATURE SVG */}
                          <div className='  self-end'>
                              <svg width="157" height="103" viewBox="0 0 378 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M64 34C64 26.764 53.3568 25 47.8333 25C40.2242 25 32.0801 24.229 24.5556 25.6111C20.9351 26.2761 13.8655 27.4932 11.6111 31C7.52562 37.3552 9.04252 55.2031 11.7222 61.6111C18.058 76.7619 29.3348 80 44.5 80C60.9576 80 80.5007 76.7876 96.2222 82.2222C105.03 85.2668 113.51 91.863 120 98.4444C125.277 103.795 126 111.187 126 118.444C126 126.9 120.308 132.408 115.333 138.667C108.85 146.824 102.119 150.296 92 152.778C86.3283 154.169 57.6698 154.798 68.6667 141.444C72.1217 137.249 78.4584 134.529 83.1111 131.944C92.8233 126.549 103.084 122.402 113 117.444C125.673 111.108 138.097 104.779 151.056 98.8889C166.376 91.9249 187.101 82.5426 196.722 68.1111C199.514 63.9236 207.891 47.5915 199 45.1667C190.536 42.8582 178.449 44.7533 169.833 45.0555C146.283 45.8819 139.682 78.0928 155.5 93.0555C173.147 109.749 201.045 116.841 223.667 123.667C230.724 125.796 237.834 127.601 245.222 127.944C247.96 128.072 250.381 128.095 253 129C260.535 131.603 269.672 138.427 272.333 146.222C276.182 157.493 259.912 163.687 252.111 166.778C240.46 171.394 227.889 174.106 215.333 174C207.982 173.938 193.403 171.5 189.444 164C187.634 160.569 188.895 153.135 189 149.444C189.278 139.715 200.447 132.183 207.556 127.222C216.468 121.002 227.52 117.724 235.333 110.111C247.061 98.6845 262.547 90.2278 275.389 80C289.937 68.4126 302.95 56.2589 310.444 39C314.293 30.1366 319.024 21.4843 317.889 11.5555C316.385 -1.60459 281.167 0.629643 275.556 8.11111C270.412 14.9686 269.438 25.4597 269 33.6667C268.514 42.7781 263.329 60.0339 272.278 66C278.036 69.839 284.909 71.6114 291.444 73.6111C308.045 78.6903 324.565 84.0825 340.556 90.8889C353.958 96.5936 364.076 102.295 370.222 115.444C374.929 125.514 378.999 140.798 373.889 151.444C367.311 165.147 352.088 175.796 338.444 181C319.931 188.062 301.437 190.909 281.667 191C273.156 191.039 264.461 191.434 256.056 189.833C246.462 188.006 237.086 184.33 227.778 181.444C176.933 165.68 126.426 145.348 79.5556 120C75.8553 117.999 28.1249 94.9569 46.2222 87.3889C62.7342 80.4839 85.5906 80.0885 103 83.2222C114.737 85.3349 126.084 89.7326 137.333 93.5555C146.603 96.7058 156.119 99.3033 164.944 103.611C171.712 106.914 177.686 111.077 185.333 112C199.45 113.704 213.924 113.169 228.111 114.056C235.145 114.495 300.778 121.003 300.778 110.944C300.778 106.218 290.126 103.554 287.444 102.444C271.821 95.9775 255.699 90.185 240.944 81.8333C228.667 74.8839 221.174 67.0953 218.889 52.8889C217.307 43.058 219.317 33.0461 219.944 23.2222C220.301 17.6371 220.721 12.0366 220.944 6.44444C221.205 -0.0678077 221.632 5.81965 221.778 8.55555C223.406 39.086 222.766 71.1915 218.556 101.444C214.789 128.504 205.751 155.273 195.056 180.333C188.393 195.946 179.263 215.343 163.333 223.556C144.034 233.506 124.306 227.489 105.111 220.722C83.0747 212.954 62.5407 202.368 41.1111 193.222C30.2437 188.584 19.4986 185.855 8.00001 183.556C6.06529 183.169 0.182841 181.877 2.8889 178.444C7.44105 172.671 22.0318 173.388 28.1111 173.167C51.3609 172.321 74.7399 173 98 173C184.667 173 271.333 173 358 173" stroke="url(#paint0_linear_1_2)" stroke-width="3" stroke-linecap="round"/>
                                  <defs>
                                  <linearGradient id="paint0_linear_1_2" x1="189.223" y1="2.08604" x2="189.223" y2="228.817" gradientUnits="userSpaceOnUse">
                                  <stop stop-color="#1D2144"/>
                                  <stop offset="1" stop-color="#D32626"/>
                                  </linearGradient>
                                  </defs>
                              </svg>
                          </div>
                          {/* SCROLL SVG */}

                          <div>
                                <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 6V14" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15 11L12 14L9 11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                          </div>
                      </div>
                    {/* SKILLSKILL CONTAINER */}
                      <div className=' flex flex-col gap-12 justify-center'>
                      {/* SKILLS */}
                          <h1 className=' text-3xl font-extrabold'>SKILL SET</h1>
                          {/* SKILL LIST */}
                          <div className=' flex flex-wrap gap-4'>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700 hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out '>JavaScript</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>TypeScript</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>React.js</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Next.js</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>SCSS</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Tailwind CSS</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>MongoDB</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>PostgreSQL</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Node.js</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Express.js</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>GraphQL</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Apollo</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Redux</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Framer Motion</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Three.js</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>WebGL</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Webpack</button>
                              <button className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Web3.js</button>
                              
                          </div>
                          {/* SKILL SCROLL SVG */}
                          <div>
                            <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/ 2000/svg">
                                  <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M12 6V14" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  <path d="M15 11L12 14L9 11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </div>
                      </div>
                    {/* EXPERIENCE CONTAINER */}
                      <div className=' flex flex-col  justify-center '>
                      {/* EXPIRIENCE */}
                          <h1 className=' text-3xl font-extrabold'>EXPERIENCE</h1>                    
                          {/* EXPERIENCE LIST */}
                          <div className=''>
                              {/* EXPERIENCE LIST ITEM */}
                               <div className=' flex justify-between h-48'>

                                    {/* LEFT */}
                                      <div className=' w-1/3 '>
                                        {/* JOB TITLE */}
                                          <div className=' bg-purple-500 p-3  text-white font-bold rounded-tl-[20px] rounded-b-[20px]'> Junior Next Js Developer. </div>
                                        {/* JOB DESCRIPTION */}
                                          <div className=' p-3 italic'> My Current employment. Way better than the position before! </div>
                                        {/* JOB DATE */}
                                          <div className=' p-3'> School attended: Univelcity. </div>
                                        {/* JOB DATE */}
                                          <div className=' p-1 border-[1px] border-purple-800 rounded text-black w-fit'>D.O.E - Sept - Dec 2023. </div>
                                       
                                      </div>
                                    {/*  CENTER */}
                                    <div className=' flex items-center justify-center w-1/6 '>
                                        {/* LINE */}
                                          <div className=' w-1 h-full bg-purple-500 rounded relative'>
                                          {/* LINE CIRCLE */}
                                            <div className=' absolute w-5 h-5 -left-2 rounded-full ring-4 bg-white ring-green-500'></div>
                                          </div>
                                    </div>
                                    {/* RIGHT */}
                                    <div className=' w-1/3 '></div>

                               </div>
                              {/* EXPERIENCE LIST ITEM */}
                               <div className=' flex justify-between h-48'>

                                    {/* LEFT */}
                                      <div className=' w-1/3 '>
                                        
                                       
                                      </div>
                                    {/*  CENTER */}
                                    <div className=' flex items-center justify-center w-1/6 '>
                                        {/* LINE */}
                                          <div className=' w-1 h-full bg-purple-500 rounded relative'>
                                          {/* LINE CIRCLE */}
                                            <div className=' absolute w-5 h-5 -left-2 rounded-full ring-4 bg-white ring-green-500'></div>
                                          </div>
                                    </div>
                                    {/* RIGHT */}
                                    <div className=' w-1/3 '>
                                      {/* JOB TITLE */}
                                      <div className=' bg-purple-500 p-3  text-white font-bold rounded-tr-[20px] rounded-b-[20px]'> Junior Next Js Developer. </div>
                                        {/* JOB DESCRIPTION */}
                                          <div className=' p-3 italic'> My Current employment. Way better than the position before! </div>
                                        {/* JOB DATE */}
                                          <div className=' p-3'> School attended: Univelcity. </div>
                                        {/* JOB DATE */}
                                          <div className=' p-1 border-[1px] border-purple-800 rounded  w-fit'>D.O.E - Sept - Dec 2023. </div>
                                    </div>

                               </div>
                              {/* EXPERIENCE LIST ITEM */}
                               <div className=' flex justify-between h-48'>

                                    {/* LEFT */}
                                      <div className=' w-1/3 '>
                                        {/* JOB TITLE */}
                                          <div className=' bg-purple-500 p-3  text-white font-bold rounded-tl-[20px] rounded-b-[20px]'> Junior Next Js Developer. </div>
                                        {/* JOB DESCRIPTION */}
                                          <div className=' p-3 italic'> My Current employment. Way better than the position before! </div>
                                        {/* JOB DATE */}
                                          <div className=' p-3'> School attended: Univelcity. </div>
                                        {/* JOB DATE */}
                                          <div className=' p-1 border-[1px] border-purple-800 rounded w-fit'>D.O.E - Sept - Dec 2023. </div>
                                       
                                      </div>
                                    {/*  CENTER */}
                                    <div className=' flex items-center justify-center w-1/6 '>
                                        {/* LINE */}
                                          <div className=' w-1 h-full bg-purple-500 rounded relative'>
                                          {/* LINE CIRCLE */}
                                            <div className=' absolute w-5 h-5 -left-2 rounded-full ring-4 bg-white ring-green-500'></div>
                                          </div>
                                    </div>
                                    {/* RIGHT */}
                                    <div className=' w-1/3 '></div>

                               </div>                              
                          </div>
                        </div>
                  </div>

                {/* SVG CONTAINER */}
                <div className=' hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
                    <BrainPage scrollYProgress={scrollYProgress}/>
                </div>
          </div>


    </motion.div>
  )
}
