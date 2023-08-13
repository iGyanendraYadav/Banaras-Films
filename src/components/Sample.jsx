import React from "react";
import { GoCalendar } from "react-icons/go";
import { MdOutlinePlace } from "react-icons/md";
import { BsHeartFill } from "react-icons/bs";
import { marriageSamples, takeMeToTheTop } from "../components/data/data";
import { useDocumentTitle, useTakeMeToTheTop } from "../components/hooks/hooks";

const Sample = () => {
  useDocumentTitle("Sample");
  useTakeMeToTheTop();


  return (
    <>
      <div  className="text-gray-600 bg-white dark:bg-[#0b1121] dark:text-white font-[Poppins]">
        <div className="headline text-4xl md:text-5xl lg:text-7xl text-center p-12 lg:p-10 tracking-widest ">
          <span className="uppercase font-extrabold">Samples</span>
        </div>

        <div className="flex justify-center items-center py-5">
          <span className="text-xl md:text-xl lg:text-3xl font-bold">
            Let's have a look, what we have made ...
          </span>
        </div>


<div className="container mx-auto">
        <div className="videos grid grid-cols-1 gap-8 mx-12 lg:mx-16 mt-2 mb-0">
          {marriageSamples.map((sample) => {
            return (
              
                <div
                  key={sample.videoId}
                  className="flex flex-col justify-start items-start"
                >
                  <iframe
                    className="lg:w-[100%] lg:h-[500px] w-[100%] h-[300px] "
                    src={`https://www.youtube.com/embed/${sample.videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />

                  <span className="flex justify-center items-center space-x-2 text-lg lg:text-3xl pt-3">
                    <span>{sample.groom}</span>
                    <span className="text-pink-500 animate-bounce">
                      <BsHeartFill />
                    </span>
                    <span>{sample.bride}</span>
                  </span>
                  <span className="flex justify-center items-center space-x-2">
                    {" "}
                    <GoCalendar /> <span>{sample.year}</span>
                  </span>
                  <span className="flex justify-center items-center space-x-2">
                    {" "}
                    <MdOutlinePlace /> <span>{sample.place}</span>
                  </span>
                </div>
              
            );
          })}
        </div>
        </div>

        <div className="h-10 "/>
      </div>
    </>
  );
};

export default Sample;
