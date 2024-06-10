import { motion } from "framer-motion";
import React from "react";

function Landing() {
  return (
    <div className="relative  overflow-hidden w-full min-h-screen pt-2 flex flex-col sm:flex-row items-center    text-black bg-[#F1F1F1] 
    
    ">
      <div
        className="lefttext mr-5 w-full sm:w-1/2 text-center  mt-28  ml-4  z-10
      md:mb-12   sm:mt-1
       lg:w-[100vh] 
     
     
      "
      >
        {["FRONT-END ", "<CODER>", "MERN-STACK"].map((item, index) => {
          return (
            <div key={index} className="masker  ">
              <h1
                className="text-5xl text-center leading-[7vh] z-10 font-semibold
              sm:text-3xl  
              md:text-5xl 
              lg:text-6xl  
              xl:text-8xl
              "
              >
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div
        className="rightphoto  w-[90%] items-center h-[60vh] mt-1 sm:mt-12   rounded-2xl overflow-hidden bg-gray-800 mr-5
        ml-5
        
      md:w-[50%] md:mr-5 md:h-[80vh]
      xl:w-[30%] xl:ml-[23vh] xl:h-[80vh] xl:mb-5 xl:mt-20
      
      bg-[url('/assets/images/myphoto.jpg')] bg-cover
      "
      >
        {/* <img
          className="w-full  h-full object-cover"
          src="../assets/images/myphoto.jpg"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Landing;
