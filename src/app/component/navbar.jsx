'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import { CiMenuKebab } from "react-icons/ci";




const links = [
    {url: '/', title: 'HOME' },
    {url: '/about', title: 'ABOUT'},
    {url: '/project', title: 'PROJECT' },
    {url: '/contact', title: 'CONTACT'},
]


export default function Navbar() {
    const [open, setOpen] = useState(false)
  return (
    <div className=' h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16'>
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
                            
                                <div className=' lg:hidden  bg-slate-100 z-10 absolute top-[150px] left-0  w-[50%]  md:w-[35%] h-[50vh] p-2 flex flex-col text-black  items-center justify-center gap-5 transition duration-500 ease-in rounded-r-2xl'>
                                    
                                        {links.map((link) => (
                                            <Link href={link.url} key={link.title} className=' text-[30px] font-bold'  >
                                                {link.title}
                                            </Link>
                                        ))}
                                    
                                </div>
                            
                        )}

                    
                     
           </div>

           <div className=' text-gray-600 flex gap-3 text-[30px]'>
                <div className=' rounded-full shadow-md '>
                    <CgProfile/>
                </div>
                <button onClick={(() => setOpen(!open))} className=' lg:hidden     '>
                    <CiMenuKebab />
                </button>
           </div>


    </div>
  )
}
