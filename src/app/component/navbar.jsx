import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className=' h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16'>

        <div>
            <Link  className=' bg-[gold] rounded-xl p-1 font-semibold flex items-center justify-center ' href='/'>
                <span className=' text-black mr-1'>0xjoun</span>
                <span className=' w-[48px] h-8 rounded-xl bg-black flex items-center justify-center'>.Dev</span>
            </Link> 
        </div>
        <div>
            <button className=' w-10 h-7 flex flex-col justify-between'>
                <div className=' w-[5px] h-[5px] bg-[gold] rounded-md'></div>
                <div className=' w-[5px] h-[5px] bg-[gold] rounded-md'></div>
                <div className=' w-[5px] h-[5px] bg-[gold] rounded-md'></div>
            </button>
        </div>

    </div>
  )
}
