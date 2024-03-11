'use client'
import React, { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import BrainPage from '../component/brain'

export default function AboutPage() {
    const containerRef = useRef()
    const {scrollYProgress} = useScroll({container:containerRef})

    const skillRef = useRef()
    const isSkillRefInView = useInView(skillRef, {once: true, margin: "-100px"} )

    const experienceRef = useRef()
    const isExperienceRefInView = useInView(experienceRef, {once: true, margin: "-100px"} )

  return (
  <motion.div 
         className=' h-full  ' 
         initial={{y: "-200vh"}} 
         animate={{y: "0%"}} 
         transition={{duration: 1.2}}>

          {/* CONTAINER */}
        <div className=' h-full lg:flex overflow-scroll' ref={containerRef}>
          {/* TEXT CONTAINER */}
              <div className=' p-4 sm:p-7 md:p-12 lg:p-20 xl:p-44 flex flex-col gap-20 md:gap-32 lg:gap-48 xl:gap-60 lg:w-2/3 lg:pr-0 xl:1/2'>
                {/* BIOGRAPHY CONTAINER */}
                    <div className=' flex flex-col gap-12 justify-center'>
                        {/* BIOGRAPHY */}
                        <h1 className=' text-3xl font-bold'>BIOGRAPHY</h1>
                        {/* BIOGRAPHY DESCRIPTION */}
                        <p>My name is Francis Elioku, I am a Next.JS junior DEV from Anambra State but based in Lagos State Nigeria, I started React Development six months ago and I believe with my experience I can work and excel beyond greater height and achieve greatness with any team around the world if given the opportunity.</p>

                        {/* BIOGRAPHY QUOTES */}
                        <span className=' italic'>BEING 1% HAS PAVED WAY FOR MANY ENTERPRENEURS</span>
                        {/* SIGNATURE SVG */}
                        <div className=' self-end '>
                            <svg width="180" height="111" viewBox="0 0 440 481" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M133 190C135.372 189.736 136.923 184.566 137 182.556C137.24 176.329 135.489 172.437 129.333 170C116.171 164.79 97.8711 159.24 86.0556 171.056C82.4259 174.685 81.3475 180.092 81.0556 185.056C80.6342 192.219 79.6451 201.575 82.1111 208.444C84.9572 216.373 90.1306 224.323 96.9444 229.333C104.249 234.704 114.937 235.502 123.333 238.556C161.059 252.274 196.644 281.04 210.111 319.778C220.108 348.534 224.294 391.371 192.889 408.056C176.65 416.682 160.687 417.35 142.444 416.944C130.866 416.687 122.64 412.443 117.222 402.222C112.889 394.049 112.709 385.024 113 376C113.573 358.244 130.337 348.487 142.333 338.056C154.003 327.908 165.619 316.451 180.167 310.5C192.094 305.621 209.002 302.775 218.389 293.389C229.012 282.766 233.492 268.086 238.389 254.333C245.914 233.199 246.654 212.912 246 190.556C245.494 173.259 229.627 163.36 213.444 162.222C201.315 161.369 197.027 179.168 195.667 188.444C189.918 227.643 234.664 250.74 261.889 269.111C283.23 283.512 302.7 298.715 318.778 319C339.436 345.063 359.484 373.402 371.556 404.556C379.233 424.368 379.666 442.398 364.111 458.778C346.677 477.136 324.061 483.098 300.111 476.889C289.511 474.141 278.871 470.694 268.778 466.444C263.008 464.015 255.972 460.888 252.278 455.5C246.351 446.857 248.388 429.88 249.222 420.222C251.154 397.866 263.99 373.518 277 355.667C289.5 338.516 304.937 325.322 320.944 311.778C325.832 307.642 329.736 302.539 334.444 298.222C340.057 293.077 346.392 288.798 351.833 283.444C364.38 271.1 371.316 253.623 375.5 236.889C377.569 228.614 377.666 220.443 378.444 212C379.596 199.513 381.508 187.133 382.389 174.611C383.321 161.355 385.409 143.94 368.556 140.667C355.376 138.107 337.074 139.531 325 145.667C314.286 151.111 311.986 161.446 313.222 172.667C314.911 187.998 328.254 198.576 340.222 206.556C347.694 211.537 355.78 215.489 363.5 220.056C368.562 223.05 376.395 226.485 378.944 232.222C380.952 236.74 380.965 241.819 381 246.667C381.071 256.425 381 266.186 381 275.944C381 304.358 378.144 334.368 384.5 362.278C388.373 379.287 390.724 396.293 380.944 411.778C376.468 418.866 370.953 426.1 364.556 431.556C352.857 441.532 337.015 443.979 322.111 444.556C290.943 445.761 256.788 439.335 242.222 409C234.087 392.058 227.294 374.085 221.056 356.389C205.355 311.85 203.718 265.667 203.167 218.833C202.423 155.644 198.982 85.1554 232.944 28.8889C236.524 22.9582 239.666 18.115 242.222 11.6667C243.397 8.70345 244.733 4.40011 247 2C248.752 0.144901 250.157 7.73963 250.222 7.94444C253.812 19.2257 255.82 30.4891 256 42.3333C256.391 68.073 256.632 94.0443 255.778 119.778C254.993 143.427 254 166.994 254 190.667C254 201.653 253.708 212.686 254.111 223.667C254.518 234.767 257.014 246.17 255.722 257.278C252.422 285.659 221.767 303.892 199.222 316.389C181.296 326.325 162.973 330.963 142.556 332.333C113.999 334.25 83.5204 332.927 55.8889 325.111C38.4731 320.185 19.0049 312.136 7.05556 297.889C3.5106 293.662 0.685863 287.36 2.22222 281.667C3.57537 276.652 16.305 278.102 19.5556 278.056C43.0518 277.717 66.8504 277.241 90.2778 279.278C125.799 282.367 159.965 293.006 195.722 293.889C234.312 294.842 273.912 295.964 311.889 288.278C333.268 283.951 353.625 277.137 374.222 270.111C387.357 265.631 400.095 261.26 412.5 255C417.01 252.724 439.454 245.45 438 237.556C436.704 230.52 421.519 225.864 416.722 223.889C397.083 215.802 373.747 208.998 352.333 213.333C338.173 216.2 337.873 225.366 338.611 237.667C340.324 266.222 342.344 294.658 342.944 323.278C343.033 327.497 346.787 381.57 342.667 381.944C327.743 383.301 311.854 382.35 297 381" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </div>

                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: '20px' }}
                        transition={{repeat: Infinity, duration: 2, ease:'easeInOut'}}
                        
                         width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 6V14" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15 11L12 14L9 11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </motion.svg>

                    </div>
                {/* SKILL CONTAINER */}
                    <div className=' flex flex-col gap-12 justify-center' ref={skillRef}>
                        {/* SKILL TITLE */}
                        <motion.h1 
                        initial={{x: "-300px"}} 
                        animate={isSkillRefInView ? {x:0} : {}} 
                        transition={{delay: 0.3}} 
                        className=' text-3xl font-bold'>SKILLS</motion.h1>
                        {/* SKILL LIST */}
                          <motion.div
                          initial={{x: "-900px"}} 
                          animate={isSkillRefInView ? {x:0} : {}} 
                          transition={{delay: 0.6}}
                          className=' flex gap-5 flex-wrap'>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700 hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out '>JavaScript</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>TypeScript</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>React.js</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Next.js</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>SCSS</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Tailwind CSS</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>MongoDB</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>PostgreSQL</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Node.js</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Express.js</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>GraphQL</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Apollo</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Redux</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Framer Motion</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Three.js</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>WebGL</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Webpack</div>
                              <div className=' rounded-md flex p-2 text-sm cursor-pointer bg-purple-500 text-white hover:bg-white hover:text-purple-700  hover:shadow-purple-300 hover:shadow-md border-purple-700 transition duration-300 ease-in-out    '>Web3.js</div>
                          </motion.div>
                        {/*  SKILL SCROLL SVG */}
                        <motion.svg
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: '20px' }}
                        transition={{repeat: Infinity, duration: 2, ease:'easeInOut'}}
                         width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 6V14" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15 11L12 14L9 11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </motion.svg>
                    </div>
                {/* EXPIERNECE CONTAINER */}
                    <div className=' flex flex-col gap-12 justify-center ' ref={experienceRef}>
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                          initial={{x: "-500px"}} 
                          animate={isExperienceRefInView ? {x: '0'} : {}} 
                          transition={{delay: 0.3}}
                          className=' text-3xl font-bold'>EXPERIENCE</motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div 
                          initial={{x: "-1200px"}} 
                          animate={isExperienceRefInView ? {x: '0'} : {}} 
                          transition={{delay: 0.6}}
                          className=''>
                          {/* EXPERIENCE LIST ITEM */}
                          <div className=' flex justify-between h-48'>
                            {/* LEFT SIDE */}
                              <div className=' w-1/3 '>
                                {/* JOB TITLE */}
                                  <div className='  bg-gradient-to-b from-gray-100 to-gray-300 p-4 font-semibold shadow-md border border-gray-400 rounded-b-2xl rounded-tl-xl md:rounded-b-md md:rounded-tl-md'>Junior Next Js Developer.</div>
                                {/* JOB DESCRIPTION */}
                                  <div className=' p-4 text-sm italic'>My Current employment. Way better than the position before!</div>
                                {/* JOB DATE */}
                                  <div className=' p-4 text-blue-800 font-semibold'>School attended: Univelcity.</div>
                                {/* JOB COMPANY */}
                                  <div className=' p-2 bg-gradient-to-b from-gray-100 to-gray-300 font-semibold border border-gray-400 shadow-md rounded-t-2xl rounded-bl-xl md:rounded-t-md md:rounded-bl-md w-fit'>D.O.E - Sept - Dec 2023.</div>
                              </div>
                            {/* CENTER SIDE */}
                                <div className=' flex items-center justify-center w-1/6 '>
                                      {/* LINE */}
                                      <div className=' w-1 h-full bg-gray-600 rounded relative'>
                                        {/* CIRCLE */}
                                        <div className=' absolute w-5 h-5 rounded-full ring-4 ring-blue-600 -left-2 bg-white'>

                                        </div>
                                      </div>
                                </div>
                                {/* RIGHT SIDE */}
                                <div className='w-1/3 '></div>
                          </div>
                          <div className=' flex justify-between h-48'>
                            {/* LEFT SIDE */}
                              <div className=' w-1/3 '>
                                {/* JOB TITLE */}
                                  
                              </div>
                            {/* CENTER SIDE */}
                                <div className=' flex items-center justify-center w-1/6 '>
                                      {/* LINE */}
                                      <div className=' w-1 h-full bg-gray-600 rounded relative'>
                                        {/* CIRCLE */}
                                        <div className=' absolute w-5 h-5 rounded-full ring-4 ring-blue-600 -left-2 bg-white'>

                                        </div>
                                      </div>
                                </div>
                                {/* RIGHT SIDE */}
                                <div className='w-1/3 '>

                                    <div className='  bg-gradient-to-b from-gray-100 to-gray-300 p-4 font-semibold shadow-md border border-gray-400 rounded-b-2xl rounded-tr-xl md:rounded-b-md md:rounded-tl-md'>Junior Next Js Developer.</div>
                                    {/* JOB DESCRIPTION */}
                                      <div className=' p-4 text-sm italic'>My Current employment. Way better than the position before!</div>
                                    {/* JOB DATE */}
                                      <div className=' p-4 text-blue-800 font-semibold'>School attended: Univelcity.</div>
                                    {/* JOB COMPANY */}
                                      <div className=' p-2 bg-gradient-to-b from-gray-100 to-gray-300 font-semibold border border-gray-400 shadow-md rounded-t-2xl rounded-br-xl md:rounded-t-md md:rounded-bl-md w-fit'>D.O.E - Sept - Dec 2023.</div>
                                </div>
                          </div>
                          <div className=' flex justify-between h-48'>
                            {/* LEFT SIDE */}
                              <div className=' w-1/3 '>
                                {/* JOB TITLE */}
                                  <div className='  bg-gradient-to-b from-gray-100 to-gray-300 p-4 font-semibold shadow-md border border-gray-400 rounded-b-2xl rounded-tl-xl md:rounded-b-md md:rounded-tl-md'>Junior Next Js Developer.</div>
                                {/* JOB DESCRIPTION */}
                                  <div className=' p-4 text-sm italic'>My Current employment. Way better than the position before!</div>
                                {/* JOB DATE */}
                                  <div className=' p-4 text-blue-800 font-semibold'>School attended: Univelcity.</div>
                                {/* JOB COMPANY */}
                                  <div className=' p-2 bg-gradient-to-b from-gray-100 to-gray-300 font-semibold border border-gray-400 shadow-md rounded-t-2xl rounded-bl-xl md:rounded-t-md md:rounded-bl-md w-fit'>D.O.E - Sept - Dec 2023.</div>
                              </div>
                            {/* CENTER SIDE */}
                                <div className=' flex items-center justify-center w-1/6 '>
                                      {/* LINE */}
                                      <div className=' w-1 h-full bg-gray-600 rounded relative'>
                                        {/* CIRCLE */}
                                        <div className=' absolute w-5 h-5 rounded-full ring-4 ring-blue-600 -left-2 bg-white'>

                                        </div>
                                      </div>
                                </div>
                                {/* RIGHT SIDE */}
                                <div className='w-1/3 '></div>
                          </div>
                          
                        </motion.div>
                    </div>
              </div>
          {/* SVG CONTAINER */}
              <div className=' hidden sticky top-0 z-30 lg:block w-1/3 xl:w-1/2 '>
                <BrainPage scrollYProgress={ scrollYProgress }/>
              </div>
        </div>

  </motion.div>
  )
}
