import React from 'react'
import { BiPhotoAlbum, BiMoviePlay, BiEditAlt, BiFilm } from "react-icons/bi";
import { MdDoneAll } from "react-icons/md";
import { GiDeliveryDrone } from "react-icons/gi";
import { TbDrone, TbCapture } from "react-icons/tb";
import { useDocumentTitle } from "../components/hooks/hooks";
import { slideIn, staggerContainer, textVariant2 } from './data/motions';
import { motion } from 'framer-motion';

const Services = () => {
  useDocumentTitle("Services");
  return (
    <>
     <motion.div
         variants={staggerContainer}
         initial="hidden"
         whileInView="show"
         viewport={{once: true, amount:0.10}}

      className="text-gray-600 bg-white dark:bg-[#0b1121] dark:text-white font-[Poppins] overflow-x-hidden">
     <div className="headline text-4xl md:text-5xl lg:text-7xl text-center p-12 lg:p-10 tracking-widest ">
      <span className='uppercase font-extrabold'>Our Services</span>
    </div>



   <div className='flex justify-center items-center'>
    <span className='text-3xl md:text-3xl lg:text-4xl font-bold'>We provides</span>
   </div>



<motion.div 
 variants={slideIn("right","spring", 0.2 , 1)}
className="container mx-auto">
    <div
    
     className="grid grid-cols-1 lg:grid-cols-1 gap-[2px] mx-12 lg:mx-16 py-5  ">
    <div  className="basic p-5  rounded-lg flex flex-col justify-center items-start ">
      <div className="flex justify-start items-center space-x-2">
        <span className='text-3xl md:text-3xl lg:text-3xl '><BiMoviePlay/></span>
      <h2 className='text-2xl md:text-2xl lg:text-3xl py-0 lg:py-1 font-bold '>Pre Wedding Film</h2>
      </div>
        <p className='my-1 text-lg lg:text-xl'>We arrange awesome greenish locations for awesome Pre Wedding Film. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum vel ducimus quibusdam similique voluptas totam alias libero, nam tempore nihil?</p>
      </div>

    <div className="basic p-5 rounded-lg flex flex-col justify-center items-start ">
    <div className="flex justify-start items-center space-x-2">
    <span className='text-3xl md:text-3xl lg:text-3xl'><MdDoneAll/></span>
        <h2 className='text-2xl md:text-2xl lg:text-3xl py-0 lg:py-1 font-bold '>Coverage of All</h2>
    </div>
        <p className='my-1 text-lg lg:text-xl'>We cover all the events and programs like HALDI, MENHADI, TILAK & SHAADI. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui consectetur beatae natus optio, error expedita obcaecati odio eos voluptatem voluptas amet ipsam eum perferendis velit culpa sint, earum cupiditate fuga? </p>
      </div>

      <div className="basic p-5 rounded-lg flex flex-col justify-center items-start ">
      <div className="flex justify-start items-center space-x-2">
    <span className='text-3xl md:text-3xl lg:text-3xl '><BiEditAlt/></span>
        <h2 className='text-2xl md:text-2xl lg:text-3xl py-0 lg:py-1 font-bold '>Same Day Edit</h2>
    </div>
        <p className='my-1 text-lg lg:text-xl'>You need not to worry about the visuals for all your Evening programs like Haldi, Menhadi, Titak etc. Just Chill !!! <br/> We provides SAME DAY EDIT service to make all your functions awesome. We are promised to showcase 5 to 9 minutes Trailer/Highlights. </p>
      </div>

      <div className="basic p-5 rounded-lg flex flex-col justify-center items-start ">
      <div className="flex justify-start items-start  lg:items-center space-x-2">
    <span className='text-3xl md:text-3xl lg:text-3xl '><BiFilm/></span>
        <h2 className='text-2xl md:text-2xl lg:text-3xl py-0 lg:py-1 font-bold '>Cinematic Wedding Film</h2>
    </div>
        <p className='my-1 text-lg lg:text-xl'>Cinematographers of Banaras Films are master in each type of shots. Our editors work with industry's well recognized premuim softwares like Adobe Premier Pro, Adobe After Effects, FCP & AVID to make your wedding film CINEMATIC, PROFFESSIONAL & ATTRACTIVE. Our editors are expert in Editing, Color Grading, Compositions & all the major techniques. </p>

      </div>

      <div className="basic p-5 rounded-lg flex flex-col justify-center items-start ">
      <div className="flex justify-start items-center space-x-2">
    <span className='text-3xl md:text-3xl lg:text-3xl '><GiDeliveryDrone/></span>
        <h2 className='text-2xl md:text-2xl lg:text-3xl py-0 lg:py-1 font-bold '>Drone Visuals</h2>
    </div>
        <p className='my-1 text-lg lg:text-xl'>You will get the drone shot for videos as well as pictures from the top of the venue. These videos and pictures will be included in your wedding film and photo albums.</p>

      </div>

      <div className="basic p-5 rounded-lg flex flex-col justify-center items-start ">
      <div className="flex justify-start items-center space-x-2">
    <span className='text-3xl md:text-3xl lg:text-3xl '><TbCapture/></span>
        <h2 className='text-2xl md:text-2xl lg:text-3xl py-0 lg:py-1 font-bold '>Crane Shots</h2>
    </div>
        <p className='my-1 text-lg lg:text-xl'>We use CRANE CAMERA to show the audience where the upcoming scene will take place. Using a crane for these shots allows us to capture large sets, massive crowds, and dramatic landscapes. <br/> We also use it for LIVE TELECAST at the events.</p>
      </div>

      <div className="basic p-5  rounded-lg flex flex-col justify-center items-start ">
      <div className="flex justify-start items-center space-x-2">
    <span className='text-3xl md:text-3xl lg:text-3xl '><BiPhotoAlbum/></span>
        <h2 className='text-2xl md:text-2xl lg:text-3xl py-0 lg:py-1 font-bold '>Photo Albums</h2>
    </div>
        <p className='my-1 text-lg lg:text-xl'>We have proffessional photographers. They captures the candid moments from your events to put in your wedding albums. <br/> We use Adobe Photoshop to edit the pictures, if editing is necessary.</p>
      </div>

      <div className="basic p-5  rounded-lg flex flex-col justify-center items-start ">
      <div className="flex justify-start items-center space-x-2">
    <span className='text-3xl md:text-3xl lg:text-3xl '><TbDrone/></span>
        <h2 className='text-2xl md:text-2xl lg:text-3xl py-0 lg:py-1 font-bold '>Temporary</h2>
    </div>
        <p className='my-1 text-lg lg:text-xl'>We use CRANE CAMERA to show the audience where the upcoming scene will take place. Using a crane for these shots allows us to capture large sets, massive crowds, and dramatic landscapes. <br/> We also use it for LIVE TELECAST at the events.</p>
      </div>


    </div>
    </motion.div>
     </motion.div>
    </>
  )
}

export default Services