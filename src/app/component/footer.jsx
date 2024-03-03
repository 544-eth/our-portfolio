import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className=' bg-gray-100 '>
        <div className=' flex  items-center gap-10 md:gap-20 justify-center h-[10vh]'>
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
  )
}
