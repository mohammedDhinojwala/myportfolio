import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    return ( 
    <div data-scroll data-scroll-speed='.1' className='lg:w-full lg:py-10 lg:ml-1 lg:rounded-2xl z-50 lg:text-zinc-200 bg-[#004D43]
    w-full h-50  
    '>
      <div className='
      text border-t-2 border-b-2 border-zinc-300 overflow-hidden gap-7 mr-30 flex whitespace-nowrap pt-5' >
        <motion.h1 initial={{x: "0"}} animate={{x : "-100%"}} transition={{ease : "linear", repeat: Infinity, duration: 9}} className='text-[18vh] lg:leading-1 lg:tracking-wide text-black lg:text-[43vh] lg:leading-none font-[FoundersGrotesk-Semibold (1)]  font-semibold uppercase lg:mb-5 
        border-black border-t-2 mb-2 -ml-7 border-b-2
        '>COOL DEVELOPER</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x : "-100%"}} transition={{ease : "linear", repeat: Infinity, duration: 9}} className='text-[18vh] lg:leading-1 lg:tracking-wide text-black lg:text-[43vh] lg:leading-none font-[FoundersGrotesk-Semibold (1)] font-semibold uppercase  lg:mb-5 
        border-black border-t-2 mb-2 -ml-7 border-b-2
        '>COOL DEVELOPER</motion.h1>
         <motion.h1 initial={{x: "0"}} animate={{x : "-100%"}} transition={{ease : "linear", repeat: Infinity, duration: 9}} className='text-[18vh] lg:leading-1 lg:tracking-wide text-black lg:text-[43vh] lg:leading-none font-[FoundersGrotesk-Semibold (1)] font-semibold uppercase  lg:mb-5 
         border-black border-t-2 mb-2 -ml-7 border-b-2
         '>COOL DEVELOPER</motion.h1>
         <motion.h1 initial={{x: "0"}} animate={{x : "-100%"}} transition={{ease : "linear", repeat: Infinity, duration: 9}} className='text-[18vh] lg:leading-1 lg:tracking-wide text-black lg:text-[43vh] lg:leading-none font-[FoundersGrotesk-Semibold (1)] font-semibold uppercase  lg:mb-5 
         border-black border-t-2 mb-2 -ml-7 border-b-2
         '>COOL DEVELOPER</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
