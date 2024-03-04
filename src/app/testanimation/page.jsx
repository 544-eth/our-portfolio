'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TestPage() {
  return (
    <div className=' h-full flex items-center justify-center'>
        <motion.div className=' w-[25rem] h-[25rem] flex items-center justify-center ring-8 ring-gray-500 rounded-full bg-gradient-to-b from-red-300 to-red-700' 
        initial= {{ x: -100}}
        animate= {{ x: 100, y: 100, opacity: 1}}
        transition={{ delay: 2, duration: 2.5}}
        >
                <Link  className=' bg-slate-50  shadow-md shadow-gray-700 rounded-xl p-1 font-semibold flex items-center justify-center ' href='/'>
                    <span className=' text-gray-600 mr-1'>0xjoun</span>
                    <span className=' bg-gray-200 w-[48px] h-8 rounded-xl text-gray-500 flex items-center justify-center'>.Dev</span>
                </Link> 
        </motion.div>
    </div>
  )
}
