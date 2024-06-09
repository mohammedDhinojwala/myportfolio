import { animate, motion } from "framer-motion";
import { React, useState, useEffect } from "react";
import { redirect } from "react-router-dom";


const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: {
    opacity: 1,
    y: 0,
  },
};

function Footer() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      // console.log(mouseX);
      // console.log(mouseY);

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      // console.log("this is x",deltaX);
      // console.log("this is y",deltaY);

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);

      const startAnimation = () => {
        contact.start({ y: 0 });
      };
    });
  });

  return (
    <motion.div
    
      onScroll={() => startAnimation(true)}
      data-scroll
      data-scroll-speed="-.15"
      id="contact"
      className="upper w-full md:h-[70%]rounded-tr-3xl rounded-tl-3xl bg-[#CDEA68]
    
    "
    >
      <div
        data-scroll
        data-scroll-speed=".2"
        className="text md:w-full md:h-full   md:flex md:flex-col  md:justify-center 
        w-full 
        "
      >
        {["Lets", "Work", "Together ?"].map((item, index) => {
          return (
            <div className="masker  ">
              <motion.h1
                variants={fadeInAnimationVariant}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                className=" md:text-[28vh] md:pb-5 text-black md:leading-[25.5vh] tracking-tighter text-center font-['FoundersGrotesk-Semibold (1)'] font-medium
                 text-[10vh] leading-[9vh]
                 "
              >
                {item}
              </motion.h1>
            </div>
          );
        })}
        <div className="supermain   flex items-center justify-center w-full h-96 -z-20 ">
          <div
            className="main flex items-center  justify-center gap-7 top-[10em] left-[1.5em] h-56 
            md:left-[34em]
          "
          >
            <div
              data-scroll
              data-scroll-speed="-.09"
              className="md:w-56 md:h-56 w-32 h-32 rounded-full bg-white flex justify-center items-center "
            >
              <div className="relative md:w-36 md:h-36 w-24 h-24 rounded-full bg-black text-black flex justify-start items-center overflow-hidden ">
                <h1 className="text-white  md:ml-11 ml-5 text-3xl">play</h1>
                <div className="w-1/2">
                  <div
                    style={{
                      transform: `translate(-50%, -50%) rotate(${rotate}deg) `,
                    }}
                    className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]
                  md:w-[22vh] md:h-8 w-full h-5 
                  
                  "
                  >
                    <div className="md:w-8 md:h-8 w-5 h-5 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-scroll
              data-scroll-speed="-.09"
              className="md:w-56 md:h-56 w-32 h-32 rounded-full bg-white flex justify-center items-center "
            >
              <div className="relative md:w-36 md:h-36 w-24 h-24 rounded-full bg-black text-black flex justify-start items-center overflow-hidden ">
                <h1 className="text-white md:ml-11 ml-5 text-3xl">play</h1>
                <div className="w-1/2">
                  <div
                    style={{
                      transform: `translate(-50%, -50%) rotate(${rotate}deg) `,
                    }}
                    className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]
                  md:w-[22vh] md:h-8 w-full h-5 
                  
                  "
                  >
                    <div className="md:w-8 md:h-8 w-5 h-5 rounded-full bg-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="button    border-white border-5 md:flex md:flex-row md:gap-5 md:justify-evenly md:items-center md:pt-[20vh] md:pb-[20vh]
        flex flex-col gap-5 items-center mb-2
        
        "
        >
          <a
            href=""
            className="md:flex md:justify-center md:items-center md:px-5  md:h-[11vh] md:border-[1px] border-black  bg-black rounded-full md:transition-all md:hover:bg-transparent md:hover:text-black 
          p-2 
          "
          >
            mohammeddhnojwala2005@gmail.com
          </a>

          <a 
            href="https://www.linkedin.com/in/mohammeddhinojwala/"
            className="md:flex md:justify-center md:items-center md:px-1 md:w-[22vh]  md:h-[10vh] border-[1px] border-black   bg-black rounded-full md:transition-all md:hover:bg-transparent hover:text-black 
            p-2 w-[20vh] flex justify-center  
          "
          >
            <div className="w-[85%] h-[85%]  bg-[url('/assets/images/linkedin.png')] bg-contain bg-no-repeat bg-center rounded-lg "> </div>
            {/* <img
              className="md:w-[25%] w-[25%]"
              src="/assets/images/linkedin.png"
              alt=""
            /> */}
          </a>
          <a onClick={<redirect to="https://github.com/mohammedDhinojwala"/>}
            href=""
            className="md:flex md:justify-center md:items-center md:px-1  md:w-[22vh]  md:h-[10vh] border-[1px] border-black  bg-black rounded-full md:transition-all md:hover:bg-transparent hover:text-black 
           p-2  w-[20vh] flex justify-center   bg-[url('/assets/images/github.jpg')] bg-cover
          "
          >
                       <div className="w-[85%] h-[85%]  bg-[url('/assets/images/github.png')] bg-contain bg-no-repeat bg-center rounded-lg "> </div>

          </a>

          <a onClick={<redirect to="https://www.instagram.com/_mxhammxd_10/?next=%2F"/>}
            href=""
            className="md:w-[22vh]  md:h-[10vh] md:flex md:justify-center md:items-center md:px-1 border-[1px] border-black   bg-black rounded-full md:transition-all md:hover:bg-transparent hover:text-black 
           p-2 w-[20vh] flex justify-center   bg-[url('/assets/images/instagram.jpg')] bg-cover
          "
          >
                        <div className="w-[85%] h-[85%]  bg-[url('/assets/images/instagram.png')] bg-contain bg-no-repeat bg-center rounded-lg "> </div>

          </a>
          <a onClick={<redirect to="https://www.facebook.com/mohammed.a.dhinojwala"/>}
            href=""
            className="md:flex md:justify-center md:items-center md:px-1  md:w-[22vh]  md:h-[10vh] border-[1px] border-black  bg-black rounded-full md:transition-all md:hover:bg-transparent hover:text-black 
           p-2  w-[20vh] flex justify-center   
          "
          >
                        <div className="w-[85%] h-[85%]  bg-[url('/assets/images/facebook.png')] bg-contain bg-no-repeat bg-center rounded-lg "> </div>

          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
