import React, { useRef, useEffect } from "react";

import { BiPhotoAlbum, BiMoviePlay } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { FaFilm, FaRupeeSign } from "react-icons/fa";
import { CgMediaLive } from "react-icons/cg";
import { TbDrone, TbTruckDelivery } from "react-icons/tb";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";
import { useDocumentTitle, useTakeMeToTheTop } from "../components/hooks/hooks";
import { fadeIn, slideIn, staggerChildren, staggerContainer, zoomIn } from "../components/data/motions";
import { animate, motion, } from "framer-motion"



const Home = () => {


  useDocumentTitle("");
  useTakeMeToTheTop();
  return (
    <>
      <div
    

           className="text-gray-600 bg-white dark:bg-[#0b1121] dark:text-white font-[Poppins]">
        {/* Hero Section */}



        <div className="heroItem flex flex-col lg:flex-row justify-center items-center lg:pt-10">
          <div className="heroItemFirst order-1 lg:order-2 flex flex-col justify-center items-center px-16 pt-14 pb-0  tracking-widest font-extrabold leading-5 md:leading-7  lg:leading-loose uppercase">
            <h1 className="text-3xl md:text-5xl lg:text-6xl  ">
              let's Make Your
            </h1>
            <h1 className="text-6xl md:text-6xl lg:text-8xl bg-gradient-to-br from-pink-300 to-pink-800 text-transparent bg-clip-text   ">
              Wedding
            </h1>
          </div>
        </div>

        {/* The Carousel */}
        <div className=" py-0 mx-1 lg:mx-16 transition-all ease-linear duration-500 lg:pb-10">
        {/* <div className=" py-0 m-0  transition-all ease-linear duration-500"> */}
          {/* Carousel */}
          <CarouselProvider
            
            className="h-16 lg:h-24"
            naturalSlideWidth={100}
            naturalSlideHeight={15}
            totalSlides={9}
            isPlaying={true}
            interval={1500}
            playDirection="forward"
            infinite={true}
            orientation="vertical"
          >
            <Slider>
              <Slide index={0}>
                <div className="runningText flex justify-center items-center ">
                  <span className="text-6xl lg:text-9xl font-extrabold uppercase bg-gradient-to-br from-green-400 to-pink-600 text-transparent bg-clip-text">
                    Awesome
                  </span>
                </div>
              </Slide>

              <Slide index={1}>
                <div className="runningText flex justify-center items-center ">
                  <span className="text-6xl lg:text-9xl font-extrabold uppercase bg-gradient-to-br from-amber-400 to-cyan-700 text-transparent bg-clip-text">
                    epic
                  </span>
                </div>
              </Slide>

              <Slide index={2}>
                <div className="runningText flex justify-center items-center ">
                  <span className="text-6xl lg:text-9xl font-extrabold uppercase bg-gradient-to-br from-red-400 to-green-700 text-transparent bg-clip-text">
                    enjoyable
                  </span>
                </div>
              </Slide>

              <Slide index={3}>
                <div className="runningText flex justify-center items-center ">
                  <span className="text-6xl lg:text-9xl font-extrabold uppercase bg-gradient-to-br from-yellow-600 to-purple-900 text-transparent bg-clip-text">
                  invaluable
                  </span>
                </div>
              </Slide>

              <Slide index={4}>
                <div className="runningText flex justify-center items-center ">
                  <span className="text-6xl lg:text-9xl font-extrabold uppercase bg-gradient-to-br from-purple-400 to-teal-600 text-transparent bg-clip-text">
                    Devine
                  </span>
                </div>
              </Slide>

              <Slide index={5}>
                <div className="runningText flex justify-center items-center ">
                  <span className="text-6xl lg:text-9xl font-extrabold uppercase bg-gradient-to-br from-fuchsia-400 to-pink-800 text-transparent bg-clip-text">
                    Crazy
                  </span>
                </div>
              </Slide>

              <Slide index={6}>
                <div className="runningText flex justify-center items-center ">
                  <span className="text-6xl lg:text-9xl font-extrabold uppercase bg-gradient-to-br from-red-400 to-sky-700 text-transparent bg-clip-text">
                    Incredible
                  </span>
                </div>
              </Slide>

              <Slide index={7}>
                <div className="runningText flex justify-center items-center ">
                  <span className="text-6xl lg:text-9xl font-extrabold uppercase bg-gradient-to-br from-pink-600 to-lime-600 text-transparent bg-clip-text">
                  Fantastic
                  </span>
                </div>
              </Slide>

              <Slide index={8}>
                <div className="runningText flex justify-center items-center ">
                  <span className="text-6xl lg:text-9xl font-extrabold uppercase bg-gradient-to-br from-orange-400 to-lime-500 text-transparent bg-clip-text">
                  Marveleous
                  </span>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
          {/* Carousel */}
        </div>



        {/* Brand Imaging : WHY US ? Section 2 */}

        <div className="mx-12 lg:mx-16">
        <div className="wrapper container flex flex-col justify-center items-center mx-auto my-12 p-5  lg:p-5 tracking-widest rounded-xl bg-gray-200 dark:bg-gray-800 ">
          <h1 className=" text-center text-2xl md:text-3xl lg:text-5xl font-extrabold uppercase py-5 lg:py-7 ">
            {" "}
            We have completed
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            <div className="flex flex-col justify-center items-center">
              <span className="text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-purple-600 to-red-600 text-transparent bg-clip-text">
                957+
              </span>

              <div className="flex flex-row justify-center items-center space-x-3 text-2xl">
                <span className="text-4xl">
                  <BiPhotoAlbum />
                </span>
                <span>Photo Albums</span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-teal-300 to-red-700 text-transparent bg-clip-text">
                712+
              </span>

              <div className="flex flex-row justify-center items-center space-x-3 text-2xl">
                <span className="text-4xl">
                  <BiMoviePlay />
                </span>
                <span>Pre Weddings</span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-lime-200 to-red-700 text-transparent bg-clip-text">
                834+
              </span>

              <div className="flex flex-row justify-center items-center space-x-3 text-2xl">
                <span className="text-4xl">
                  <FaFilm />
                </span>
                <span>Wedding Films</span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-lime-500 to-sky-600 text-transparent bg-clip-text">
                455+
              </span>

              <div className="flex flex-row justify-center items-center space-x-3 text-2xl">
                <span className="text-4xl">
                  <TbDrone />
                </span>
                <span>Drone Visuals</span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-purple-700 to-blue-400 text-transparent bg-clip-text">
                989+
              </span>

              <div className="flex flex-row justify-center items-center space-x-3 text-2xl">
                <span className="text-4xl">
                  <TbTruckDelivery />
                </span>
                <span>Project Delivery</span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="text-4xl md:text-5xl lg:text-7xl font-extrabold bg-gradient-to-br from-fuchsia-600 to-emerald-400 text-transparent bg-clip-text">
                351+
              </span>

              <div className="flex flex-row justify-center items-center space-x-3 text-2xl">
                <span className="text-4xl">
                  <CgMediaLive />
                </span>
                <span>Live Telecast</span>
              </div>
            </div>


          </div>
        </div>
        </div>





        {/* Thinking about Pricing & Services ? */}


<section className="mx-12 lg:mx-16">
  <div className="container px-5 pt-6 pb-14 mx-auto">
  {/* <div className="container px-5 pt-6 pb-14 mx-auto"> */}
    <div className="flex flex-col text-center w-full mb-14">
      <h1 className="lg:text-4xl text-2xl font-bold title-font">Thinking about Pricing & Services ?</h1>
      <h2 className="text-lg text-indigo-500 tracking-widest font-bold title-font mb-1">Let Me Help You</h2>
    </div>
    <motion.div
           variants={staggerContainer}
           initial="hidden"
            whileInView="show"
             viewport={{once: true, amount:0.25}} 
      className="flex flex-wrap -m-4">
      <motion.div variants={fadeIn('right',"tween",0.2, 1)}   className="p-4 md:p-1 lg:p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-200 dark:bg-gray-800 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <span className="text-2xl"><FaFilm/></span>
            </div>
            <h2 className=" text-lg title-font font-medium">Samples</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">We have added some sample videos so that you can watch them and then you can decide.</p>
            <Link to="/sample" className="mt-3 text-indigo-500 inline-flex items-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 md:py-2 md:px-2 lg:py-2 lg:px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Show Samples</button>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div variants={fadeIn('right',"tween",0.4, 1)}    className="p-4 md:p-1 lg:p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-200 dark:bg-gray-800 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">

              <span className="text-2xl"><AiOutlineSetting/></span>
            </div>
            <h2 className=" text-lg title-font font-medium">Our  Services</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Banaras Films makes your wedding's Visual Experience Awesome with a lot of services.</p>
            <Link to="/services" className="mt-3 text-indigo-500 inline-flex items-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 md:py-2 md:px-2 lg:py-2 lg:px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Show Services</button>
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div variants={fadeIn('right',"tween",0.6, 1)}   className="p-4 md:p-1 lg:p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-200 dark:bg-gray-800 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <span className="text-2xl"><FaRupeeSign/></span>
            </div>
            <h2 className=" text-lg title-font font-medium">Pricing</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">We have three flexible pricing plans for you. <br/> BASIC, STANDARD & PREMIUM.</p>
            <Link to="/pricing" className="mt-3 text-indigo-500 inline-flex items-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 md:py-2 md:px-2 lg:py-2 lg:px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">See Pricing</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>


      </div>
    </>
  );
};

export default Home;
