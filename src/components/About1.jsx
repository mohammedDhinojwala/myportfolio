import React from "react";

function About1() {
  return (
    <div
      id="about"
      data-scroll
      data-scroll-speed="-.3"
      className="   bg-[#CDEA68] rounded-3xl overflow-hidden"
    >
      <h1
        className="text-black p-10 text-xl opacity-80 font-semibold
      md:text-black md:p-20 md:text-5xl md:opacity-80"
      >
        "Hello everyone! I'm Mohammed, a dedicated front-end developer on the journey to mastering the MERN stack. With React.js as my primary tool, I craft engaging and interactive websites designed to create memorable user experiences."
      </h1>

      <div className="md:w-half border-t-[1px] md:pb-12 md:ml-10 md:mr-20 mr-4 ml-4 border-[#1a21027e] flex gap-10">
        <div
          className="lg:w-full  lg:mt-14  lg:flex lg:flex-col lg:items-center
          w-full mt-8 flex flex-col items-center
      "
        >
          <h1
            className="text-black md:text-5xl  md:font-semibold md:pl-20 
        text-4xl font-semibold pt-2
        "
          >
            Explore Skills
          </h1>
          <button className="bg-black md:ml-20 mt-8 px-10 py-3 text-xl rounded-full flex flex-row items-center justify-center">
            Read More{" "}
            <div className="w-[1vh] h-[1vh] rounded-full bg-white"></div>
          </button>
          <div
            className="md:w-[90%] md:h-[90%] md:mt-14 md:rounded-2xl bg-gray-800  md:flex md:flex-row md:justify-center md:gap-9 px-5 
           w-[70%] h-[55%] rounded-2xl mt-5 flex flex-col justify-center items-center flex-wrap
        "
          >
            <div
              className="md:w-[10%]  flex flex-col justify-center items-center
          w-[40%] p-2  m-5
         
          "
            >
              <div
                className="sm:w-[14vh] sm:h-[15vh] w-[10vh] h-[10vh] p-3  rounded-2xl my-5 shadow-md shadow-black
              bg-[url('/assets/images/html.png')] bg-cover bg-center 
              "
              ></div>
              <label
                className=" md:text-xl
          text-lg text-center 
          "
              >
                HTML
              </label>
            </div>

            <div
              className="md:w-[10%] flex flex-col justify-center items-center
          w-[40%] p-2  
           
          "
            >
              <div
                className="sm:w-[14vh] sm:h-[15vh] w-[10vh] h-[10vh] p-3  rounded-2xl my-5 shadow-md shadow-black
              bg-[url('/assets/images/social.png')] bg-cover bg-center 
              "
              ></div>
              <label
                className=" md:text-xl
          text-lg text-center 
          "
              >
                CSS
              </label>
            </div>

            <div
              className="md:w-[10%] flex flex-col justify-center items-center
          w-[40%] p-2  mr-5
          "
            >
              <div
                className="sm:w-[14vh] sm:h-[15vh] w-[10vh] h-[10vh] p-3  rounded-2xl my-5 shadow-md shadow-black
              bg-[url('/assets/images/js.png')] bg-cover bg-center 
              "
              ></div>
              <label
                className=" md:text-xl
          text-lg text-center 
          "
              >
                JS
              </label>
            </div>

            <div
              className="md:w-[10%] flex flex-col justify-center items-center
          w-[40%] p-2   mr-5
          "
            >
              <div
                className="sm:w-[14vh] sm:h-[15vh] w-[10vh] h-[10vh] p-3  rounded-2xl my-5 shadow-md shadow-black
              bg-[url('/assets/images/atom.png')] bg-cover bg-center 
              "
              ></div>
              <label
                className=" md:text-xl
          text-lg text-center 
          "
              >
                REACT
              </label>
            </div>

            <div
              className="md:w-[10%] flex flex-col justify-center items-center
          w-[40%] p-2  mr-5
          "
            >
              <div
                className="sm:w-[14vh] sm:h-[15vh] w-[10vh] h-[10vh] p-3  rounded-2xl my-5 shadow-md shadow-black
              bg-[url('/assets/images/database.png')] bg-cover bg-center 
              "
              ></div>
              <label
                className=" md:text-xl
          text-lg text-center 
          "
              >
                MONGO DB
              </label>
            </div>

            <div
              className="md:w-[10%] flex flex-col justify-center items-center
          w-[40%] p-2 mr-5
          "
            >
              <div
                className="sm:w-[14vh] sm:h-[15vh] w-[10vh] h-[10vh] p-3  rounded-2xl my-5 shadow-md shadow-black
              bg-[url('/assets/images/nodejs.png')] bg-cover bg-center 
              "
              ></div>
              <label
                className=" md:text-xl
          text-lg text-center 
          "
              >
                NODE JS
              </label>
            </div>

            <div
              className="md:w-[10%] flex flex-col justify-center items-center
          w-[40%] p-2  mr-5
          "
            >
              
              <div
                className="sm:w-[14vh] sm:h-[15vh] w-[10vh] h-[10vh] p-3  rounded-2xl my-5 shadow-md shadow-black
              bg-[url('/assets/images/github.png')] bg-cover bg-center 
              "
              ></div>
              <label
                className=" md:text-xl
          text-lg text-center 
          "
              >
                GITHUB
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
