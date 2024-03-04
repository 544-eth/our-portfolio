'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectPage() {
  return (
    <motion.div 
         className=' h-full' 
         initial={{y: "-200vh"}} 
         animate={{y: "0%"}} 
         transition={{duration: 1.2}}>
          <div>
            <h2>Our Projects</h2>
          </div>
    </motion.div>
  )
}
