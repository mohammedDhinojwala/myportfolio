import React from "react";
import { Anchor } from "antd";
import { motion } from "framer-motion";

const { link } = Anchor;

function Navbar() {
  return (
    <div
      className="  flex-col
      items-right w-[100%] h-30
    lg:w-full lg:h-[11%] lg:px-20 lg:py-8 fixed  z-[999] font-['NeueMontreal-Regular (1)'] text-black lg:flex lg:justify-between lg:items-center
     md:flex md:flex-row
     h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 

    "
    >
      <div className="logo flex justify-center">
        <h1
          className="text-2xl font-semibold my-2
       lg:text-3  xl
       "
        >
          MOHAMMED DHINOJWALA
        </h1>
      </div>

      {/* <Anchor className='links flex gap-10'>
            {['sevice ', 'MY Work' ,  'About Me','contact Me' ].map((item, index)=>(
                <link href={index === 0 && '/service' || index === 1 && '/work'  || index === 2 && '/About' || index === 3 && 
              '/contact' } key={item}  className={`text-lg text-white font-light capitalize cursor-pointer ${index === 3 && "ml-32" }  `}>
                {item}
                
                </link>
            ))}
        </Anchor> */}

      <div
        className="links  flex justify-center mb-1
        lg:flex gap-10  text-black
        lg:text-5xl
        "
      >
        {/* <motion.a  transition={{ ease :[0.22, 1, 0.36, 1]}} className=' text-lg text-white font-light capitalize cursor-pointer' upercase href="#mywork">Service</motion.a> */}
        <motion.a
          transition={{ ease: [0.22, 1, 0.36, 1] }}
          className="  text-2xl font-normal capitalize cursor-pointer text-black"
          upercase
          href="#mywork"
        >
          my work
        </motion.a>
        <motion.a
          transition={{ ease: [0.22, 1, 0.36, 1] }}
          className="  text-2xl font-normal capitalize cursor-pointer text-black"
          upercase
          href="#about"
        >
          About
        </motion.a>
        <motion.a
          transition={{ ease: [0.22, 1, 0.36, 1] }}
          className="  text-2xl font-normal capitalize cursor-pointer text-black"
          upercase
          href="#contact"
        >
          contact me
        </motion.a>
      </div>
    </div>
  );
}

export default Navbar;
