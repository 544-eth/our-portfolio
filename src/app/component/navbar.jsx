'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { motion } from 'framer-motion';
// import { CiMenuKebab } from "react-icons/ci";




const links = [
    {url: '/', title: 'HOME' },
    {url: '/about', title: 'ABOUT'},
    {url: '/project', title: 'PROJECT' },
    {url: '/contact', title: 'CONTACT'},
]


export default function Navbar() {

    const [open, setOpen] = useState(false)

    const topVaritants = {
        closed: {
            rotate: 0,
        },

        opened: {
            rotate: 38.5,
            backgroundColor: "rgb(56,56,56)",
            
        }
    }

    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
           opacity: 0,
        }
    }

    const downVariants = {
        closed: {
            rotate: 0
        },
        opened: {
            rotate: -38.5,
            backgroundColor: "rgb(255,203,90)",
            
        }
    }

    const listVariants = {
        closed: {
            x: "-10vw",
            
            
        },

        opened: {
            x: 0,
            transition: {
                // when: 'beforeChildren',
                staggerChildren: 0.2,
            }
        }
    }

    const listItemVariant = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        }
    }


  return (
    <div className=' h-full flex w-[90%] m-auto items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16'>
        {/* LOGO */}
        <div>
            <Link  className=' bg-slate-50  shadow-md rounded-xl p-1 font-semibold flex items-center justify-center ' href='/'>
                <span className=' text-gray-600 mr-1'>0xjoun</span>
                <span className=' bg-gray-200 w-[48px] h-8 rounded-xl text-gray-500 flex items-center justify-center'>.Dev</span>
            </Link> 
        </div>
        {/* NAVIGATION LINKS */}
           <div>
                <div className=' hidden lg:flex bg-slate-50 shadow-md w-[60vw] text-black items-start justify-around p-2 rounded-xl'>
                        
                            {links.map((link) => (
                                <Link href={link.url} key={link.title}  className='  text-black w-[10vw] flex justify-center rounded-lg hover:bg-gray-500 hover:text-gray-100 hover:rounded-lg transition duration-500 ease-in-out' >
                                    {link.title}
                                </Link>
                            ))}
                        
                        
                </div>

                                            
                        
                            
                                           
                    

                        { open && (
                            
                                <motion.div variants={listVariants} initial="closed" animate="opened"  transition={{ delay: 0, duration: 0}} className=' lg:hidden  bg-slate-100 absolute z-10 top-[150px] left-0  w-[50%]  md:w-[35%] h-[50vh] p-2 flex flex-col text-black  items-center justify-center gap-5 transition duration-500 ease-in rounded-r-2xl'>
                                    
                                        {links.map((link) => (
                                            <motion.div variants={listItemVariant} className='' key={link.title}>
                                                <Link href={link.url}  className=' text-[30px] font-bold'  >
                                                    {link.title}
                                                </Link>
                                            </motion.div>
                                        ))}
                                    
                                </motion.div>
                            
                        )}

                    
                     
           </div>

           <div className=' text-gray-600 flex items-center gap-8 text-[30px]'>
                <div className=' rounded-full shadow-md '>
                    <CgProfile/>
                </div>
                <button onClick={(() => setOpen(!open))} className=' lg:hidden flex flex-col w-8 h-6 relative justify-between  '>
                    {/* <CiMenuKebab /> */}
                    <motion.div 
                    variants={topVaritants} 
                    animate={ open ? 'opened' : 'closed'}
                     className=' bg-[rgb(56,56,56)] w-8  h-1 rounded-full origin-left '></motion.div>
                    <motion.div 
                    variants={centerVariants} 
                    animate={ open ? 'opened' : 'closed'}
                     className=' bg-[rgb(255,203,90)] w-8  h-1 rounded-full '></motion.div>
                    <motion.div 
                    variants={downVariants} 
                    animate={ open ? 'opened' : 'closed'}
                     className=' bg-gray-700 w-8  h-1  rounded-full origin-left  '></motion.div>
                    
                </button>
           </div>


    </div>
  )
}
