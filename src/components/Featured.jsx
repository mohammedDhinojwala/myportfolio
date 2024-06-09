import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%", trasistion: { duration: 1 } });
  };

  return (
    <div
      id="mywork"
      className="w-full md:py-20 pt-10 cursor-pointer bg-[#b6b5b5] rounded-3xl"
    >
      <div
        className="md:w-full md:px-20 md:py-8 
        w-full px-4 text-4xl
      "
      >
        <h1
          className=" text-gray-700 md:text-7xl
        
        "
        >
          {" "}
          My Project{" "}
        </h1>
        <div
          className="main w-full h-full flex flex-row
        md:w-full md:h-full  md:flex md:flex-col
        
        "
        >
          <div
            className="cards  md:p-10 md:mt-10 md:mr-[50vh] flex flex-col  md:gap-20 border-t-[2px] border-zinc-800
        mt-5 pt-5    justify-center items-center my-5  pb-4 
        md:w-[100%] h-[70%] md:flex md:flex-row 
        "
          >
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardcontainer shadow-black shadow-lg rounded-2xl relative  md:w-1/2 md:h-[80vh]
            h-[50vh] w-[100 %] mb-5  
                     
            "
            >
              <div
                className="absolute flex overflow-hidden left-[9.6%] top-[2vh] text-black z-[9] font-semibold text-8xl leading-none tracking-tighter
              
             
              "
              >
                <div className="flex ">
                  {"NEWS-MOB".split("").map((item, index, l) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[0]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.01,
                      }}
                      key={l}
                      className="inline-block "
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="card w-[100%] h-[100%] rounded-2xl bg-[#FFFFFF] flex justify-center  items-center mb-10 md:w-full md:h-full bg-[url('/assets/images/newsapp.jpg')] bg-auto bg-center bg-no-repeat">
                {/* <img className="  " src="/assets/images/newsapp.jpg" /> */}
              </div>
            </motion.div>

            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer shadow-black shadow-lg rounded-2xl relative md:w-1/2 md:h-[80vh]
            h-[40vh] w-[100%] "
            >
              <div
                className="absolute flex justify-center items-center overflow-hidden left-[2.9%] top-[2vh] text-8xl text-black z-[9] font-semibold  leading-none tracking-tighter
              
              "
              >
                <div className="flex overflow-hidden">
                  {"APPLE-CLONE".split("").map((item, index,f) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.01,
                      }}
                      key={f}
                      className="inline-block "
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="w-[100%] h-[100%]  rounded-2xl cursor-pointer flex justify-center items-center overflow-hidden bg-[#F8F8F8] card  bg-[url('/assets/images/apple.jpg')] bg-cover bg-center  ">
                {/* <img className=" " src="/assets/images/apple.jpg" alt="" /> */}
              </div>
            </motion.div>
          </div>
          <div
            className="md:w-[97%] ml-10 md:mx-2  md:flex md:flex-row  md:justify-between
        flex flex-col  w-[100%] p-5  justify-evenly   
          md:p-3 md:pb-7 md:-mt-5
        "
          >
            <div
              className="left md:w-[85vh] md:h-[15vh] md:pt-4  md:flex md:flex-row md:flex-wrap  md:justify-evenly md:gap-2
             flex flex-col gap-2 mb-5
            "
            >
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3 
              w-[100%] p-2 
              "
              >
                html
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2  
              "
              >
                css
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
                js
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
                react
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
                node js
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
                Bootstrap
              </span>

              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
               News API
              </span>
            </div>

            <div
              className="right md:w-[85vh] md:h-[15vh] md:pt-4  md:flex md:flex-row md:flex-wrap  md:justify-evenly md:gap-2
             flex flex-col gap-2 
            "
            >
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 
             "
              >
                html
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 "
              >
                css
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 "
              >
                js
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 "
              >
                Gsap
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 "
              >
                Bootstrap
              </span>
            </div>
          </div>
        </div>

        <div
          className="main w-full h-full flex flex-row
        md:w-full md:h-full  md:flex md:flex-col
        
        "
        >
          <div
            className="cards  md:p-10 md:mt-10 md:mr-[50vh] flex flex-col  md:gap-20 border-t-[2px] border-zinc-800
        mt-5 pt-5    justify-center items-center my-5  pb-4 
        md:w-[100%] h-[70%] md:flex md:flex-row 
        "
          >
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardcontainer shadow-black shadow-lg rounded-2xl relative  md:w-1/2 md:h-[80vh]
            h-[50vh] w-[100 %] mb-5  
                     
            "
            >
              <div
                className="absolute flex overflow-hidden left-[25%] top-[1vh] text-black z-[9] font-semibold text-8xl leading-none tracking-tighter
              
             
              "
              >
                <div className="flex ">
                  {"pintrest".split("").map((item, index,k) => (
                    <motion.span
                    
                      initial={{ y: "100%" }}
                      animate={cards[0]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.01,
                      }}
                      key={k}
                      className="inline-block  "
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="card w-[100%] h-[100%] rounded-2xl overflow-y-hidden bg-[#FFFFFF] flex justify-center  items-center mb-10 md:w-full md:h-full  bg-[url('/assets/images/pintrest1.jpg')] bg-cover ">
                {/* <img className=" w-[100%] overflow-y-hidden  " src="/assets/images/pintrest1.jpg" /> */}
              </div>
            </motion.div>

            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer shadow-black shadow-lg rounded-2xl relative md:w-1/2 md:h-[80vh]
            h-[40vh] w-[100%] "
            >
              <div
                className="absolute flex justify-center items-center overflow-hidden right-[22%] top-[2 vh]  text-black z-[9] font-semibold text-8xl leading-none tracking-tighter
              
              "
              >
                <div className="flex overflow-hidden">
                  {"portfolio".split("").map((item, index,x) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.01,
                      }}
                      key={x}
                      className="inline-block "
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="w-[100%] h-[100%]  rounded-2xl cursor-pointer flex justify-center items-center overflow-hidden bg-[#F8F8F8] card  bg-[url('/assets/images/finalportfolio.png')] bg-cover ">
                {/* <img className=" w-[100%] " src="/assets/images/finalportfolio.png" alt="" /> */}
              </div>
            </motion.div>
          </div>
          <div
            className="md:w-[97%] ml-10 md:mx-2  md:flex md:flex-row  md:justify-between
        flex flex-col  w-[100%] p-5  justify-evenly   
         md:p-3 md:pb-7 md:-mt-5
        "
          >
            <div
              className="left md:w-[85vh] md:h-[15vh] md:pt-4  md:flex md:flex-row md:flex-wrap  md:justify-evenly md:gap-2
             flex flex-col gap-2 mb-5
            "
            >
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3 
              w-[100%] p-2 
              "
              >
                html
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2  
              "
              >
                css
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
                js
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
                react
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
                node js   
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
                Bootstrap
              </span>

              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
                Express js
              </span>

              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
                multer js
              </span>

              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
              w-[100%] p-2 
              
              "
              >
                Mongo DB
              </span>
              
              

            </div>

            <div
              className="right md:w-[85vh] md:h-[15vh] md:pt-4  md:flex md:flex-row md:flex-wrap  md:justify-evenly md:gap-2
             flex flex-col gap-2 
            "
            >
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 
"
              >
                html
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 "
              >
                css
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 "
              >
                js
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 "
              >
                Gsap
              </span>
              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 "
              >
                Bootstrap
              </span>

              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 "
              >
                motion js
              </span>

              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 "
              >
                tailwaind
              </span>

              <span
                className="md:w-[25vh] md:h-[5vh] transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  flex-wrap items-center text-lg md:leading-3
             w-[100%] p-2 "
              >
                tailwaind
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
