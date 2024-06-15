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
          className="main sm:w-full sm:h-full sm:flex sm:flex-row
        md:w-full md:h-full  md:flex md:flex-col 
       w-[100%] flex flex-col items-center pl-[1rem] 
        ">
          <div
            className="cards  md:p-10 md:mt-10  flex flex-col  md:gap-20 border-t-[2px] border-zinc-800  
        mt-5 pt-5    justify-center items-center my-5  pb-4 
        md:w-[100%] md:flex md:flex-row 
        w-[80%] 
      
        "
          >
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardcontainer shadow-black shadow-lg rounded-2xl relative  md:w-1/2 md:h-[40vh]
            h-[50vh] w-[100%] mb-5  mt-5 
             lg:w-[60vh] lg:h-[60vh]
            xl:h-[80vh] xl:w-1/2
          
                     
            "
            >
<div
                className="absolute flex justify-center items-center overflow-hidden left-[2.9%] top-[2vh] text-8xl text-black z-[9] font-semibold  leading-none tracking-tighter 
              
              "
              >
                <div className="flex overflow-hidden">
                  {"Newsapp".split("").map((item, index,f) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[0]}
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
              <a href="https://github.com/mohammedDhinojwala/NEWAPP/" 
              className="card w-[100%] h-[100%] rounded-2xl bg-[#ffffff] flex justify-center  items-center mb-10 md:w-full md:h-full bg-[url('/assets/images/newsapp.jpg')] bg-auto bg-center bg-no-repeat
             
              ">
                
              </a>
            </motion.div>

            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer shadow-black shadow-lg rounded-2xl relative md:w-1/2 md:h-[40vh] 
            h-[40vh] w-[100%] 
            lg:w-[60vh] lg:h-[60vh]
            xl:h-[80vh] xl:w-1/2
            "
            >
              <div
                className="absolute flex justify-center items-center overflow-hidden left-[2.9%] top-[2vh] text-8xl text-black z-[9] font-semibold  leading-none tracking-tighter 
              
              "
              >
                <div className="flex overflow-hidden">
                  {"apple-clone".split("").map((item, index,f) => (
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
              <a href="https://github.com/mohammedDhinojwala/apple-clone" 
               className="w-[100%] h-[100%]  rounded-2xl cursor-pointer flex justify-center items-center overflow-hidden bg-[#F8F8F8] card  bg-[url('/assets/images/apple.jpg')] bg-cover bg-center  ">
                {/* <img className=" " src="/assets/images/apple.jpg" alt="" /> */}
              </a>
            </motion.div>
          </div>
          <div
            className="md:w-[97%] ml-10 md:mx-2  md:flex md:flex-row  md:justify-between
        flex flex-col  w-[100%] p-5  justify-evenly   
          md:p-3 md:pb-7 md:-mt-5  
          xl:pl-12 xl:pr-12 
        "
          >
            <div
              className="left md:w-[70vh] md:h-[19vh] md:pt-4  md:flex md:flex-row md:flex-wrap  md:justify-evenly md:gap-1
             flex flex-col  mb-5  
             lg:w-[75vh] lg:h-[21vh] opacity-0 absolute sm:opacity-100 sm:static
 
             
            "
            >
              <span
                className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex 
              "
              >
                html
              </span>
              <span
                className="  transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center

              "
              >
                css
              </span>
              <span
                className=" transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[16vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
                js
              </span>
              <span
                className="transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
                react
              </span>
              <span
                className="transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
                node js
              </span>
              <span
                className=" transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
                Bootstrap
              </span>

              <span
                className=" transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
               News API
              </span>
            </div>

            <div
             className="left md:w-[70vh] md:h-[19vh] md:pt-4  md:flex md:flex-row md:flex-wrap  md:justify-evenly md:gap-1
             flex flex-col  mb-5  
             lg:w-[75vh] lg:h-[21vh] opacity-0 absolute sm:opacity-100 sm:static
                   
          
            "
            >
              <span
                className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                w-[100%] p-2 
                md:w-[12vh] md:h-[5vh] md:text-sm
                lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
              >
                html
              </span>
              <span
                 className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                 w-[100%] p-2 
                 md:w-[12vh] md:h-[5vh] md:text-sm
                 lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
               >
                css
              </span>
              <span
                 className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                 w-[100%] p-2 
                 md:w-[12vh] md:h-[5vh] md:text-sm
                 lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
               >
                js
              </span>
              <span
                 className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                 w-[100%] p-2 
                 md:w-[12vh] md:h-[5vh] md:text-sm
                 lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
               >
                Gsap
              </span>
              <span
                className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                w-[100%] p-2 
                md:w-[12vh] md:h-[5vh] md:text-sm
                lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
              > 
                Bootstrap
              </span>
            </div>
          </div>
        </div>


        <div
           className="main sm:w-full sm:h-full sm:flex sm:flex-row
           md:w-full md:h-full  md:flex md:flex-col 
          w-[100%] flex flex-col items-center pl-[1rem]  
        
        ">
          <div
            className="cards  md:p-10 md:mt-10  flex flex-col  md:gap-20   
        mt-5 pt-5    justify-center items-center my-5  pb-4 
        md:w-[100%] md:flex md:flex-row 
        w-[80%]
      
        "
          >
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardcontainer shadow-black shadow-lg rounded-2xl relative  md:w-1/2 md:h-[40vh]
            h-[50vh] w-[100%] mb-5  mt-5 
             lg:w-[60vh] lg:h-[60vh]
            xl:h-[80vh] xl:w-1/2
          
                     
            "
            >
<div
                className="absolute flex flex-col justify-between items-start overflow-hidden left-[2.9%] top-[2vh] text-8xl text-black z-[9] font-semibold  leading-none tracking-tighter 
              
              "
              >
                <div className="flex overflow-hidden h-40">
                  {"pintrest".split("").map((item, index,f) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[0]}
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
                <div className="sec flex overflow-hidden h-40  mt-26">
                  {"coming_soon".split("").map((item, index,f) => (
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={cards[0]}
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
              <a href="" 
              className="card w-[100%] h-[100%] rounded-2xl bg-[#ffffff] flex justify-center  items-center mb-10 md:w-full md:h-full bg-[url('/assets/images/pintrest1.jpg')] bg-cover bg-center bg-no-repeat
             
              ">
                
              </a>
            </motion.div>

            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer shadow-black shadow-lg rounded-2xl relative md:w-1/2 md:h-[40vh] 
            h-[40vh] w-[100%] 
            lg:w-[60vh] lg:h-[60vh]
            xl:h-[80vh] xl:w-1/2
            "
            >
              <div
                className="absolute flex justify-center items-center overflow-hidden left-[2.9%] top-[2vh] text-8xl text-black z-[9] font-semibold  leading-none tracking-tighter 
              
              "
              >
                <div className="flex overflow-hidden">
                  {"Portfolio".split("").map((item, index,f) => (
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
              <a href="https://github.com/mohammedDhinojwala/myportfolio" 
               className="w-[100%] h-[100%]  rounded-2xl cursor-pointer flex justify-center items-center overflow-hidden bg-[#F8F8F8] card  bg-[url('/assets/images/finalportfolio.png')] bg-cover bg-center  ">
                
              </a>
            </motion.div>
          </div>
          <div
            className="md:w-[97%] ml-10 md:mx-2  md:flex md:flex-row  md:justify-between
        flex flex-col  w-[100%] p-5  justify-evenly   
          md:p-3 md:pb-7 md:-mt-5
           xl:pl-12 xl:pr-12 
        "
          >
             <div
              className="left md:w-[70vh] md:h-[19vh] md:pt-4  md:flex md:flex-row md:flex-wrap  md:justify-evenly md:gap-1
             flex flex-col  mb-5  
             lg:w-[75vh] lg:h-[21vh]
              opacity-0 absolute md:opacity-100 md:static
            "
            >
              <span
                className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
                html
              </span>
              <span
                className="transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center

              "
              >
                css
              </span>
              <span
                className=" transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[16vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
                js
              </span>
              <span
                className="transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
                react
              </span>
              <span
                className=" transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
                node js
              </span>
              <span
                className=" transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
                Bootstrap
              </span>

              <span
                className=" transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
               Mongo DB
              </span>

              <span
                className=" transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
               Express Js
              </span>

              <span
                className="transition-all hover:bg-transparent hover:text-black  border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3
              w-[100%] p-2 
              md:w-[12vh] md:h-[5vh] md:text-sm
              lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center
              "
              >
               Multer Js
              </span>
            </div>

            <div
             className="left md:w-[70vh] md:h-[19vh] md:pt-4  md:flex md:flex-row md:flex-wrap  md:justify-evenly md:gap-1
             flex flex-col  mb-5  
             lg:w-[75vh] lg:h-[21vh]
              opacity-0 absolute md:opacity-100 md:static
            "
            >
              <span
                className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                w-[100%] p-2 
                md:w-[12vh] md:h-[5vh] md:text-sm
                lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
              >
                html
              </span>
              <span
                 className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                 w-[100%] p-2 
                 md:w-[12vh] md:h-[5vh] md:text-sm
                 lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
               >
                css
              </span>
              <span
                 className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                 w-[100%] p-2 
                 md:w-[12vh] md:h-[5vh] md:text-sm
                 lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
               >
                js
              </span>
              <span
                 className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                 w-[100%] p-2 
                 md:w-[12vh] md:h-[5vh] md:text-sm
                 lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
               >
                Gsap
              </span>
              <span
                className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                w-[100%] p-2 
                md:w-[12vh] md:h-[5vh] md:text-sm
                lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
              > 
                Bootstrap
              </span>
              
              <span
                className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                w-[100%] p-2 
                md:w-[12vh] md:h-[5vh] md:text-sm
                lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
              > 
                Motion js
              </span>

              <span
                className="  transition-all hover:bg-transparent hover:text-black   border-black border-[1px] bg-black rounded-full flex justify-center  items-center text-lg md:leading-3 
                w-[100%] p-2 
                md:w-[12vh] md:h-[5vh] md:text-sm
                lg:w-[19vh] lg:h-[5vh] lg:text-xl lg:flex lg:items-center"
              > 
                Tailwind Css
              </span>

            </div> 
          </div>
        </div>




        


      </div>
    </div>
  );
}

export default Featured;

