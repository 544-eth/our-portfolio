'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <motion.div 
         className='bg-gradient-to-bl from-blue-50 to-yellow-50' 
         initial={{y: "-200vh"}} 
         animate={{y: "0%"}} 
         transition={{duration: 1.2}}>
            {/* CONTAINER */}

          <div className=' '>
                {/* TEXT CONTAINER */}

                  <div className=' flex flex-col p-4 sm:p-8 md:p-12 lg:p-16 gap-24 md:gap-32 lg:gap-44 xl:gap-64'>
                    {/* BIOGRAPHY CONTAINER */}
                      <div className=' flex flex-col gap-12 justify-center'>
                          <h1>BIOGRAPHY</h1>
                          <p className=' text-wrap'>My name is Francis Elioku, I am a Next.JS junior DEV from Anambra State but based in Lagos State Nigeria, I started React Development six months ago and I believe with my experience I can work and excel beyond greater height and and achieve greatness with team around the world if given the opportunity. </p>
                          <span className=' italic'>BEING 1% HAS PAVED WAY FOR MANY ENTERPRENEURS</span>
                          <div className=''></div>
                          
                      </div>
                    {/* SKILLSKILL CONTAINER */}
                      <div className=''>SKILLS</div>
                    {/* EXPERIENCE CONTAINER */}
                      <div className=''>EXPERIENCE</div>
                  </div>

                {/* SVG CONTAINER */}
                <div className=''></div>
          </div>


    </motion.div>
  )
}
