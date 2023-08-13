import React from "react";
import emotional from "../images/emotional.jpg";
import hny from "../images/hny.png";
import santosh from "../images/sy.png";
import saurabh from "../images/sy2.png";
import { useDocumentTitle, useTakeMeToTheTop } from "../components/hooks/hooks";

import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineHeart,
  AiOutlineVideoCamera,
  AiOutlinePlayCircle,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiPhoneCall, FiFacebook, FiInstagram } from "react-icons/fi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbListCheck, TbUserCheck } from "react-icons/tb";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleCopyText, takeMeToTheTop } from "../components/data/data"
import { fadeIn, staggerContainer, theOpacity } from "./data/motions";
import { motion } from "framer-motion";


const About = () => {



  useDocumentTitle("About");
  useTakeMeToTheTop();
  return (
    <>


    <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="text-gray-600 bg-white dark:bg-[#0b1121] dark:text-white font-[Poppins]">
        <div className="headline text-4xl md:text-5xl lg:text-7xl text-center pt-12 pb-0  px-12 lg:pt-10 lg:pb-0 lg:px-10 tracking-widest ">
          <span className="uppercase font-extrabold ">About Us</span>
        </div>

        <div className="wrapper flex flex-col justify-center items-center mx-12 lg:mx-16">
          <div className="firstOne">
            <img
              className="rounded-2xl scale-75 lg:scale-75"
              src={emotional}
              alt="emotional"
            />
          </div>

          <div className="secondOne mx-auto container">
            <p className="text-base lg:text-xl">
              Your wedding day is one of the most important days, and you want
              to remember it for the rest of your life. We know it’s
              overwhelming trying to find the videographer who is best for your
              wedding.
            </p>

            <p className="text-base lg:text-xl pt-2 lg:pt-4">
              We know you want to feel confident you’re going to have a
              cinematic film you’ll love forever. You’ve likely wondered if
              there was a videographer you can trust to capture the moments
              important to you and craft a unique wedding film that helps you
              relive your wedding day over and over again.
            </p>

            <p className="text-base lg:text-xl pt-2 lg:pt-4">
              At Banaras Films, we get it!
            </p>

            <p className="text-base lg:text-xl pt-2 lg:pt-4">
              It’s a big deal to be able to have a wedding film that helps you
              remember one of the best days of your life. For over the past
              decade, we’ve helped 1000s of brides just like you feel confident
              their videographer will be fully prepared for their wedding and be
              able to give them a fantastic wedding film.
            </p>
            <p className="text-base lg:text-xl pt-2 lg:pt-4">Let's make your wedding film. Check Availability Now.</p>
          </div>

          <div className="thirdOne grid grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-8 mt-3 lg:mt-5">
            <a
              href="mailto:FILMSBANARAS24X7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-3 text-white bg-gray-500 hover:bg-gray-600 rounded-lg w-28 lg:w-60">
                <span className="flex flex-row justify-center items-center space-x-2">
                  {/* <span className="hidden lg:block">Contact via E-mail</span> */}
                  <span>
                    <span className="hidden lg:block">Contact via E-mail</span>
                    <span className="lg:hidden">Contact</span>
                  </span>
                  <span className="text-3xl">
                    <AiOutlineMail />
                  </span>
                </span>
              </button>
            </a>


              <button onClick={()=>handleCopyText("9889901417")} className="p-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg w-28 lg:w-60">
                <span className="flex flex-row justify-center items-center space-x-2">
                  {/* <span className="hidden lg:block">Consult on Call</span> */}
                  <span>
                    <span className="hidden lg:block">Consult on Call</span>
                    <span className="lg:hidden">Consult</span>
                  </span>
                  <span className="text-3xl">
                    <FiPhoneCall />
                  </span>
                </span>
              </button>
          

            <a
              href="https://wa.me/+919889901417"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="p-3 text-white bg-green-500 hover:bg-green-600 rounded-lg w-28 lg:w-60">
                <span className="flex flex-row justify-center items-center space-x-2">
                  {/* <span className="hidden lg:inline">Check on Whatsapp</span> */}
                  <span>
                    <span className="hidden lg:block">Check on Whatsapp</span>
                    <span className="lg:hidden">Check</span>
                  </span>
                  <span className="text-3xl">
                    <AiOutlineWhatsApp />
                  </span>
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="text-center text-3xl lg:text-4xl py-5 lg:py-10">
          What You Can Expect
        </div>

<div className="container mx-auto">
        <div className="Expectations flex flex-col justify-center items-center mx-12 lg:mx-16 tracking-wider">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: true, amount:0.15}}

           className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
            <motion.div variants={fadeIn('right',"tween",0.2, 1)}  className="One p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col justify-center items-center space-y-1">
              <span className="text-3xl lg:text-5xl">
                <AiOutlineHeart />
              </span>
              <span className="text-3xl">Personal Attention</span>
              <span className="">You will feel well cared for and heard.</span>
            </motion.div>

            <motion.div variants={fadeIn('right',"tween",0.4, 1)}  className="Two p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col justify-center items-center space-y-1">
              <span className="text-3xl lg:text-5xl">
                <AiOutlineVideoCamera />
              </span>
              <span className="text-3xl">4K Cinematic Film</span>
              <span className="">
                You will love your professional wedding film.
              </span>
            </motion.div>

            <motion.div variants={fadeIn('right',"tween",0.6, 1)}  className="Three p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col justify-center items-center space-y-1">
              <span className="text-3xl lg:text-5xl">
                <HiOutlineSpeakerphone />
              </span>
              <span className="text-3xl">Communication</span>
              <span className="">
                We’re easily accessible to answer any questions you may have.
              </span>
            </motion.div>

            <motion.div variants={fadeIn('right',"tween",0.8, 1)}  className="Four p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col justify-center items-center space-y-1">
              <span className="text-3xl lg:text-5xl">
                <TbListCheck />
              </span>
              <span className="text-3xl">Feel Prepared</span>
              <span className="">
                We’ll work with you to craft a wedding film timeline to ensure
                we capture the moments important to you.
              </span>
            </motion.div>

            <motion.div variants={fadeIn('right',"tween",1, 1)}  className="Five p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col justify-center items-center space-y-1">
              <span className="text-3xl lg:text-5xl">
                <TbUserCheck />
              </span>
              <span className="text-3xl">Proffessional Team</span>
              <span className="">
                Our team conducts themselves in a professional manner that
                demonstrates respect for your day.
              </span>
            </motion.div>

            <motion.div variants={fadeIn('right',"tween",1.2, 1)}  className="Six p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex flex-col justify-center items-center space-y-1">
              <span className="text-3xl lg:text-5xl">
                <AiOutlinePlayCircle />
              </span>
              <span className="text-3xl">Quick TT</span>
              <span className="">
                We know you’re excited to see your films quickly, and have
                faster than average turnaround times.
              </span>
            </motion.div>
          </motion.div>
        </div>
        </div>

        <div className="text-center text-3xl lg:text-4xl pt-10 pb-5 lg:pt-10 lg:pb-5">
          Our Promise to You
        </div>

        <div className="WhatBridesSays flex flex-col justify-center items-center container mx-auto  pb-5 lg:pb-5 tracking-wider">
          <p className="text-base lg:text-xl mx-12 lg:mx-16">
            We are committed to exceeding your expectations so you can feel
            confident you chose the videographer who is best for your wedding.
            Our brides consistently rave about the experiences they had when
            working with us and about how much joy their wedding films bring
            them.
          </p>
        </div>

        <div className="parallax container mx-auto my-5 bg-blend-overlay text-white bg-cyan-900 h-[550px] md:h-[400px] lg:h-[550px] bg-fixed bg-center bg-no-repeat bg-cover bg-[url('https://www.wedding.film/wp-content/uploads/2020/09/V1A9522e-LLF.jpg')]">
          <div className="flex flex-col justify-center items-center    pt-16 md:pt-20 lg:pt-44 ">
            <div className="text-center text-3xl lg:text-4xl mx-12 lg:mx-16 ">
              Love Your Wedding Film Forever
            </div>

            <p className="text-base lg:text-xl pt-2 lg:pt-4 mx-12 lg:mx-16">
              Once you schedule your call, you’ll have taken the first step in
              experiencing the confidence you’ll feel knowing you chose the
              right videographer for YOU. We believe your wedding day is one of
              the most important days of your life, and you should be able to
              re-experience those memories whenever you want. You can be
              confident Reverent Wedding Films will capture the special moments
              of your day and give you a cinematic wedding film you’ll love
              forever.
            </p>

            <p className="text-base lg:text-xl pt-2 lg:pt-4 mx-12 lg:mx-16">
              Check our availability and schedule a call with our wedding
              videography consultant so you can tell us all about your day and
              we can get started!
            </p>
          </div>
        </div>


        <div className="text-center text-3xl lg:text-4xl mt-10 mb-5 ">
              Meet Our Teams
            </div>

            <div className="flex flex-col justify-center items-center pb-10 lg:pb-10 mx-12 lg:mx-16">
              <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: true, amount:0.15}} className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-12">
                  <motion.div variants={theOpacity(0.2,1)} className="flex flex-col justify-center items-center space-y-2 p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                        <img src={hny} alt="HNY" className="rounded-full h-32 w-32 lg:h-40 lg:w-40 border-2 border-red-600" />
                        <span>Harinarayan Yadav</span>
                        <span>Editor & Director</span>
                        <span className="flex flex-row justify-center items-center space-x-2 text-white">
                         
                            <button onClick={()=>handleCopyText("9889901417")} className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full">
                                <span className="text-3xl"><FiPhoneCall/></span>
                            </button>
                       

                          <a href="https://wa.me/+919889901417" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-green-500 hover:bg-green-600 rounded-full">
                                <span className="text-3xl"><AiOutlineWhatsApp/></span>
                            </button>
                          </a>

                          <a href="https://www.facebook.com/harinyadav17" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-blue-700 hover:bg-blue-800 rounded-full">
                                <span className="text-3xl"><FiFacebook/></span>
                            </button>
                          </a>

                          <a href="https://www.instagram.com/iharinyadav/" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-gradient-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045]  rounded-full">
                                <span className="text-3xl"><FiInstagram/></span>
                            </button>
                          </a>

                  
                        </span>

                       
                       
                  </motion.div>

                  <motion.div variants={theOpacity(0.4,1)} className="flex flex-col justify-center items-center space-y-2 p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                        <img src={santosh} alt="Santosh" className="rounded-full h-32 w-32 lg:h-40 lg:w-40  border-2 border-green-700" />
                        <span>Santosh Yadav</span>
                        <span>Editor</span>
                        <span className="flex flex-row justify-center items-center space-x-2 text-white">
                        
                            <button onClick={()=>handleCopyText("7398592004")} className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full">
                                <span className="text-3xl"><FiPhoneCall/></span>
                            </button>
                         

                          <a href="https://wa.me/+917398592004" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-green-500 hover:bg-green-600 rounded-full">
                                <span className="text-3xl"><AiOutlineWhatsApp/></span>
                            </button>
                          </a>

                          <a href="https://www.facebook.com/santosh.yadav7398592004" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-blue-700 hover:bg-blue-800 rounded-full">
                                <span className="text-3xl"><FiFacebook/></span>
                            </button>
                          </a>

                          <a href="https://www.instagram.com/santosh_banaras/" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-gradient-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045]  rounded-full">
                                <span className="text-3xl"><FiInstagram/></span>
                            </button>
                          </a>

              
                        </span>

                       
                       
                  </motion.div>

                  <motion.div variants={theOpacity(0.6,1)} className="flex flex-col justify-center items-center space-y-2 p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                        <img src={saurabh} alt="HNY" className="rounded-full h-32 w-32 lg:h-40 lg:w-40 border-2 border-blue-600" />
                        <span>Saurabh Yadav</span>
                        <span>VFX & Editor</span>
                        <span className="flex flex-row justify-center items-center space-x-2 text-white">
                         
                            <button onClick={()=>handleCopyText("7080226202")} className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full">
                                <span className="text-3xl"><FiPhoneCall/></span>
                            </button>
                        

                          <a href="https://wa.me/+917080226202" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-green-500 hover:bg-green-600 rounded-full">
                                <span className="text-3xl"><AiOutlineWhatsApp/></span>
                            </button>
                          </a>

                          <a href="https://www.facebook.com/profile.php?id=100004183422142" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-blue-700 hover:bg-blue-800 rounded-full">
                                <span className="text-3xl"><FiFacebook/></span>
                            </button>
                          </a>

                          <a href="https://www.instagram.com/saurabh_suhaan/" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-gradient-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045]  rounded-full">
                                <span className="text-3xl"><FiInstagram/></span>
                            </button>
                          </a>


                        </span>

                       
                       
                  </motion.div>

                  <motion.div variants={theOpacity(0.8,1)} className="flex flex-col justify-center items-center space-y-2 p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                        <img src={hny} alt="HNY" className="rounded-full h-32 w-32 lg:h-40 lg:w-40 border-2 border-yellow-600" />
                        <span>Ajay Yadav</span>
                        <span>Cinematographer</span>
                   
                        {/* <span className="flex flex-row justify-center items-center space-x-2 text-white">
                       
                            <button onClick={()=>handleCopyText("Not Allowed to Take Number of Ajay")} className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full">
                                <span className="text-3xl"><FiPhoneCall/></span>
                            </button>
                      

                          <a href="https://wa.me/+919889901417" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-green-500 hover:bg-green-600 rounded-full">
                                <span className="text-3xl"><AiOutlineWhatsApp/></span>
                            </button>
                          </a>

                          <a href="https://www.facebook.com/harinyadav17" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-blue-700 hover:bg-blue-800 rounded-full">
                                <span className="text-3xl"><FiFacebook/></span>
                            </button>
                          </a>

                          <a href="https://www.instagram.com/iharinyadav/" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-gradient-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045]  rounded-full">
                                <span className="text-3xl"><FiInstagram/></span>
                            </button>
                          </a>

                    
                        </span> */}

                       
                       
                  </motion.div>

                  <motion.div variants={theOpacity(1,1)} className="flex flex-col justify-center items-center space-y-2 p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                        <img src={hny} alt="HNY" className="rounded-full h-32 w-32 lg:h-40 lg:w-40 border-2 border-pink-600" />
                        <span>Akash Yadav</span>
                        <span>Cinematographer</span>
                        {/* <span className="flex flex-row justify-center items-center space-x-2 text-white">
                        
                            <button onClick={()=>handleCopyText("Baad Mein Batayenge")} className="p-2 bg-blue-500 hover:bg-blue-600 rounded-full">
                                <span className="text-3xl"><FiPhoneCall/></span>
                            </button>
                       

                          <a href="https://wa.me/+919889901417" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-green-500 hover:bg-green-600 rounded-full">
                                <span className="text-3xl"><AiOutlineWhatsApp/></span>
                            </button>
                          </a>

                          <a href="https://www.facebook.com/harinyadav17" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-blue-700 hover:bg-blue-800 rounded-full">
                                <span className="text-3xl"><FiFacebook/></span>
                            </button>
                          </a>

                          <a href="https://www.instagram.com/iharinyadav/" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-gradient-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045]  rounded-full">
                                <span className="text-3xl"><FiInstagram/></span>
                            </button>
                          </a>

                     
                        </span> */}

                       
                       
                  </motion.div>

                  {/* <motion.div variants={theOpacity(1.2,1)} className="flex flex-col justify-center items-center space-y-2 p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                        <img src={hny} alt="HNY" className="rounded-full h-32 w-32 lg:h-40 lg:w-40 border-2 border-red-600" />
                        <span>Testing Yadav</span>
                        <span>Cinematographer</span>
                   
                        <span className="flex flex-row justify-center items-center space-x-2">
                          
                            <button onClick={()=>handleCopyText("9889901417")} className="border border-gray-300 p-2  rounded-full bg-gray-200 dark:bg-gray-800 ">
                                <span className="text-3xl"><FiPhoneCall/></span>
                            </button>
                         

                          <a href="https://wa.me/+919889901417" target="_blank" rel="noopener noreferrer">
                            <button className="border border-gray-300 p-2  rounded-full bg-gray-200 dark:bg-gray-800">
                                <span className="text-3xl"><AiOutlineWhatsApp/></span>
                            </button>
                          </a>

                          <a href="https://www.facebook.com/harinyadav17" target="_blank" rel="noopener noreferrer">
                            <button className="border border-gray-300 p-2  rounded-full bg-gray-200 dark:bg-gray-800">
                                <span className="text-3xl"><FiFacebook/></span>
                            </button>
                          </a>

                          <a href="https://www.instagram.com/iharinyadav/" target="_blank" rel="noopener noreferrer">
                            <button className="border border-gray-300 p-2 rounded-full bg-gray-200 dark:bg-gray-800">
                                <span className="text-3xl"><FiInstagram/></span>
                            </button>
                          </a>

                          <a href="https://www.youtube.com/channel/UCPB2esqndaXg5zrT3XOYggg" target="_blank" rel="noopener noreferrer">
                            <button className="border border-gray-300 p-2 rounded-full bg-gray-200 dark:bg-gray-800">
                                <span className="text-3xl"><AiOutlineYoutube/></span>
                            </button>
                          </a>
                        </span>

                       
                       
                  </motion.div> */}

                  {/* <div className="flex flex-col justify-center items-center space-y-2 p-5 text-gray-600 bg-white dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg">
                        <img src={hny} alt="HNY" className="rounded-full h-32 w-32 lg:h-40 lg:w-40 border-2 border-red-600" />
                        <span>Ravi Yadav</span>
                        <span>Transport</span>
                        <span className="flex flex-row justify-center items-center space-x-2 text-white">
                         
                            <button onClick={()=>handleCopyText("9889901417")} className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
                                <span className="text-3xl"><FiPhoneCall/></span>
                            </button>
                        

                          <a href="https://wa.me/+919889901417" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-green-500 hover:bg-green-600 rounded-lg">
                                <span className="text-3xl"><AiOutlineWhatsApp/></span>
                            </button>
                          </a>

                          <a href="https://www.facebook.com/harinyadav17" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-blue-700 hover:bg-blue-800 rounded-lg">
                                <span className="text-3xl"><FiFacebook/></span>
                            </button>
                          </a>

                          <a href="https://www.instagram.com/iharinyadav/" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-gradient-to-bl from-[#833ab4] via-[#fd1d1d] to-[#fcb045]  rounded-lg">
                                <span className="text-3xl"><FiInstagram/></span>
                            </button>
                          </a>

                          <a href="https://www.youtube.com/channel/UCPB2esqndaXg5zrT3XOYggg" target="_blank" rel="noopener noreferrer">
                            <button className="p-2 bg-gradient-to-br from-[#e52d27]  to-[#b31217]  rounded-lg">
                                <span className="text-3xl"><AiOutlineYoutube/></span>
                            </button>
                          </a>
                        </span>

                       
                       
                  </div> */}
              </motion.div>
            </div>




      </div>
    </>
  );
};

export default About;
