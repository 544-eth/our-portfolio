'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <motion.div 
         className=' bg-gradient-to-bl from-blue-50 to-yellow-50 h-full' 
         initial={{y: "-200vh"}} 
         animate={{y: "0%"}} 
         transition={{duration: 1.2}}>
      <div className=' flex flex-col lg:flex-row h-full px-4 sm:p-8 md:p-12 lg:p-16'>
                                 {/* IMAGE CONTAINER */}
            <div className=' h-1/2 relative lg:h-full lg:w-1/2'>
               <Image src='/image/hero.png' alt='' fill className=' object-contain'/>
            </div>

                                 {/* TEXT CONTAINER */}

            <div className=' flex flex-col gap-7 items-center justify-center lg:h-full lg:w-1/2 '>
               {/* TITLE */}
               <h1 className=' text-4xl md:text-5xl 2xl:text-8xl font-bold'>Leading A New Tech Enterprise, For A Digital Tomorrow</h1>
               {/* DESCRIPTION */}
               <p className=' text-xl'>
                  Welcome to my tech world, where innovation and creativity strive and converge, With a keen eye for aesthethics and a mastery of Next.js Productions, my Portfolio showcases a diverse collection of projects that reflect my commitment of excellence.
               </p>
               {/* BUTTONS */}

               <div className=' flex gap-16'>
                  <button className=' p-2 ring-1 ring-purple-800 rounded-lg active:bg-purple-800 shadow-md shadow-gray-900 active:text-white'>Sneak Peak</button>
                  <button className=' p-2 ring-1 ring-purple-800 rounded-lg active:bg-purple-800 shadow-md shadow-gray-900 active:text-white'>Get In Touch</button>
               </div>

                  <div className=' flex items-center gap-10 md:gap-20 justify-center w-full h-[10vh]'>
                        <Link href='/'>
                           <Image src='/image/facebook.png' alt='' width={25} height={25} />
                        </Link>
                        <Link href='/'>
                           <Image src='/image/insta.png' alt='' width={25} height={25} />
                        </Link>
                        <Link href='/'>
                           <Image src='/image/twitter.png' alt='' width={25} height={25} />
                        </Link>
                        <Link href='/'>
                           <Image src='/image/whatsapp.png' alt='' width={25} height={25} />
                        </Link>
                        <Link href='/'>
                           <Image src='/image/youtube.png' alt='' width={25} height={25} />
                        </Link>
                  </div>

            </div>

      </div>
    </motion.div>
  )
}
