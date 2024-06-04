import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
function Eyes() {
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
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.6"
        className='relative  w-[97%] h-1/2  left-[1%] top-48
      md:w-full md:h-full  bg-[url("./src/assets/images/eyes-bg.jpg")]  md:bg-[length:80em] bg-[length:58em] bg-center  bg-no-repeat '
      >
        {/* <div className="absolute flex gap-7 top-[10em] left-[1.5em] h-56 
          md:left-[34em]
        ">
          <div data-scroll data-scroll-speed="-.09"  className="md:w-56 md:h-56 w-32 h-32 rounded-full bg-white flex justify-center items-center ">
            <div  className="relative md:w-36 md:h-36 w-24 h-24 rounded-full bg-black text-black flex justify-start items-center overflow-hidden ">
              <h1 className="text-white  md:ml-11 ml-5 text-3xl">play</h1>
              <div  className="w-1/2">

                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg) `}}  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]
                 md:w-[22vh] md:h-8 w-full h-5 
                 
                 ">
                  <div className="md:w-8 md:h-8 w-5 h-5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>

          <div data-scroll data-scroll-speed="-.09"  className="md:w-56 md:h-56 w-32 h-32 rounded-full bg-white flex justify-center items-center ">
            <div  className="relative md:w-36 md:h-36 w-24 h-24 rounded-full bg-black text-black flex justify-start items-center overflow-hidden ">
              <h1 className="text-white md:ml-11 ml-5 text-3xl">play</h1>
              <div  className="w-1/2">

                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg) `}}  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]
                 md:w-[22vh] md:h-8 w-full h-5 
                 
                 ">
                  <div className="md:w-8 md:h-8 w-5 h-5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div
          data-scroll
          data-scroll-speed="-.09"
          className=" supermain   flex items-center justify-center w-full h-96 -z-20 "
        >
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
      </div>
    </div>
  );
}

export default Eyes;
