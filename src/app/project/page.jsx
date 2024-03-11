'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { MdCheck } from "react-icons/md";



const items = [
  {
    id: 1,
    color: 'bg-gradient-to-l from-gray-200 to-gray-100 ',
    ness: 'Completed',
    title: 'E-commerce Website',
    deliver: <IoCheckmarkDoneSharp />,
    desc: 'I recently developed a dynamic and user-friendly eCommerce website that offers a seamless online shopping experience. The website is designed to cater to a diverse range of products, providing customers with a one-stop platform for their shopping needs.',
    image: 'dd',
  },
  {
    id: 2,
    color:'bg-gradient-to-l from-gray-200 to-gray-100 ',
    ness: 'Ongoing currently',
    title: ' Three.js Website',
    deliver: <MdCheck />,
    desc: 'I recently designed and developed an immersive website leveraging the power of Three.js, a cutting-edge 3D graphics library. This interactive platform combines stunning visuals with advanced web technologies to create a captivating and engaging user experience.',
    image: 'bb',
  },
  {
    id: 3,
    color:'bg-gradient-to-l from-gray-200 to-gray-100 ',
    ness: 'Ongoing currently',
    title: 'Portfolio',
    deliver: <MdCheck />,
    desc: 'I am excited to present a portfolio website that I meticulously crafted to showcase my skills, projects, and experiences in a visually compelling and user-friendly manner. This platform serves as a digital canvas reflecting my journey, expertise, and passion for creating impactful digital solutions.',
    image: 'cc',
  },
  {
    id: 4,
    color:'bg-gradient-to-l from-gray-200 to-gray-100 ',
    ness: 'Ongoing currently',
    title: 'Messaging App',
    deliver: <MdCheck />,
    desc: 'Introducing a robust and feature-rich messaging app that transforms communication into a seamless and engaging experience. This app is designed to connect people effortlessly, providing a secure and intuitive platform for instant messaging, multimedia sharing, and collaboration.',
    image: 'aa',
  }
]

export default function ProjectPage() {
const ref = useRef()
const { scrollYProgress } = useScroll({ target: ref})
const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%'])

  return (
    <motion.div 
         className=' h-full ' 
         initial={{y: "-200vh"}} 
         animate={{y: "0%"}} 
         transition={{duration: 1.2}}>
          <div className=' relative bg-gradient-to-r from-gray-100 to-gray-300 h-[600vh]' ref={ref}>
              <div className=' w-screen h-[calc(100vh-4rem)] flex items-center justify-center text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold'> Completed Projects </div>
              <div className=' sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                <motion.div style={{ x }} className=' flex'>
                  <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-purple-100'/>
                    {items.map((item) =>(
                      <div key={item.id} className={` h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}>
                          <div className=' flex flex-col gap-8 text-gray-800'>
                            <h1 className=' text-xl font-bold md:text-4xl lg:text-5xl xl:text-7xl'>{item.title}</h1>
                            <div className=' flex gap-4'>
                              <span className=' italic'>{item.ness}</span>
                              <span className=' text-green-500'>{item.deliver}</span>
                            </div>
                            <div className=' relative w-80 h-48 md:w-96 md:h-56 lg:w-[300px] lg:h-[150px] xl:w-[400px] xl:h-[250px] '>
                              <Image src={`/image/${item.image}.jpg`}  fill alt='' className=' rounded-md'/>
                            </div>
                            <p className='w-80 md:w-96 lg:w-[450px]'>{item.desc}</p>
                            <Link href='/' className=' flex items-center justify-start' >
                              <button className='bg-gradient-to-b border-2 from-gray-100 to-gray-200 p-2 text-sm md:p-3 md:text-md lg:p-3 lg:text-lg rounded-lg font-semibold m-4 ' >See Demo</button>
                            </Link>

                          </div>
                      </div>
                    ))}
                </motion.div>
              </div>
          </div>
          <div className=" w-screen h-screen flex flex-col items-center justify-center text-center">
                      <h1 className=' text-8xl'>Want To Build A React Project?</h1>
                      <div className=' relative'>
                        <motion.svg 
                        animate={{rotate:360}}
                        transition={{duration: 9, ease:'linear', repeat:Infinity}}
                        viewBox=' 0 0 300 300 ' className=' relative w-64 h-64 md:w-[500px] md:h-[500px]'>
                              <defs>
                                <path
                                  id="circlePath"
                                  d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                />
                              </defs>
                              <text fill="#000">
                                <textPath xlinkHref='#circlePath' className=' text-2xl'>YOUR NEXT.JS UI DEVELOPER</textPath>
                              </text>
                        </motion.svg>
                        <Link href='/' className=' w-16 h-16 md:w-28 md:h-28 absolute top-0 right-0 left-0 bottom-0 m-auto bg-gradient-to-b from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-2 '> Hire Me </Link>
                        
                      </div>
          </div>
    </motion.div>
  )
}
