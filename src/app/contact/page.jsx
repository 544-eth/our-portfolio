'use client'
import React, { useState,useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function ContactPage() {

  const [success, msgSent] = useState(false)
  const [error, notSent] = useState(false)

  const text = '0xjoun say\'s Hi'


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    msgSent(false)
    notSent(false)

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY )
      .then(
        (success) => {
          msgSent(true)
          form.current.reset()
        },
        (error) => {
          notSent(true)
        },
      );
  };

  return (
    <motion.div 
         className=' h-full' 
         initial={{y: "-200vh"}} 
         animate={{y: "0%"}} 
         transition={{duration: 1.2}}>
          <div className=' h-full flex flex-col lg:flex-row px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 '>
            {/* TEXT CONTAINER */}
              <div className=' h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl font-bold'>
                <div className=''>
                    <motion.div>
                      {text.split('').map((letter, index) => (
                        <motion.span
                          key={index}
                          initial={{opacity: 1}}
                          animate={{opacity: 0}}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.1,
                          }}
                          >
                          {letter} 
                        </motion.span>
                      ))}
                      ✌
                    </motion.div>
                </div>
              </div>
            {/* FORM CONTAINER */}
              <form onSubmit={sendEmail} ref={form} className=' h-1/2 lg:h-full lg:w-1/2 bg-gradient-to-bl from-purple-100 to-blue-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-28 '>
                <span>Hello 0xjoun,</span>
                <input className=' bg-transparent border-b-[4px] border-black outline-none resize-none'
                  name='user_message'
                />
                <span>Email Address Here:</span>
                <input type='text' className=' bg-transparent border-b-[4px] border-black outline-none resize-none'
                  name='user_email'
                />               
                <button className=' bg-gradient-to-b w-28 rounded-xl from-green-200 to-green-400 font-bold p-2 '>Send</button>
                {success && <span className='  text-green-500 font-bold'>Your message has been sent 😊</span>}
                {error && <span className='text-red-500 font-bold'>Sorry could not send your message 😌</span>}
              </form>
          </div>
    </motion.div>
  )
}
