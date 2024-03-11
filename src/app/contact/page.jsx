'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {

  const text = '0xjoun say\'s Hi ✌'
  return (
    <motion.div 
         className=' h-full' 
         initial={{y: "-200vh"}} 
         animate={{y: "0%"}} 
         transition={{duration: 1.2}}>
          <div className=' h-full flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 '>
            {/* TEXT CONTAINER */}
              <div className=' h-1/2 lg:h-full lg:w-1/2'>
                <motion.div>
                  {text.split(' ').map((letter, index) => (
                    <motion.div key={index}>{letter}</motion.div>
                  ))}
                </motion.div>
              </div>
            {/* FORM CONTAINER */}
              <form className=' h-1/2 lg:h-full lg:w-1/2'></form>
          </div>
    </motion.div>
  )
}
