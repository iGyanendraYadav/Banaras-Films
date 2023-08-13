import React from "react";
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useDocumentTitle, useTakeMeToTheTop } from "../components/hooks/hooks";
import Pankaj from "../images/pankaj.jpg";
import Abhi from "../images/abhi.png";
import Kushahiwale from "../images/kushahiwale.png";
import Kushahiwale2 from "../images/kushahiwale2.png";
import Virendra from "../images/virendra.jpg";
import { takeMeToTheTop } from "./data/data";


const Review = () => {
  useDocumentTitle("Review");
  useTakeMeToTheTop();

  return (
    <>
      <div  className="text-gray-600 bg-white dark:bg-[#0b1121] dark:text-white font-[Poppins] pt-3 lg:pt-[14px]">


{/* The Carousel */}
<div className=" py-3 container mx-auto transition-all ease-linear duration-500">
  {/* Carousel */}
<CarouselProvider
className="h-52 lg:h-[370px]"
        naturalSlideWidth={100}
        naturalSlideHeight={42}
        totalSlides={4}
        isPlaying={true}
        interval={4500}
        playDirection="forward"
        infinite={true}
        orientation="horizontal"
      >
        <Slider>


          <Slide index={0}>
          <div className="flex flex-row justify-evenly items-center  bg-gray-200 dark:bg-gray-800 mx-8 lg:mx-16 rounded-lg p-3 lg:p-24 ">
          <div className="leftwala w-[50%] h-44 flex flex-col justify-center items-center space-y-2">
            <img
              className="rounded-full h-16 w-16  lg:h-28 lg:w-28"
              src="https://avatars.githubusercontent.com/u/49138951?v=4"
              alt="gdsg"
            />
            <h2 className="lg:text-2xl font-bold">Gyanendra Yadav</h2>
            <h3 className="lg:text-xl">Software Engineer</h3>
          </div>
          <div className="rightwala w-[50%] h-44 flex flex-col justify-center items-start tracking-widest bg-gradient-to-br from-yellow-500 to-red-600 text-transparent bg-clip-text uppercase font-extrabold">
          
           <span className="text-xl lg:text-4xl">&ldquo; The team of</span>
           <span className="text-xl lg:text-4xl">banaras films</span>
           <span className="text-xl lg:text-4xl">are</span>
           <span className="text-3xl lg:text-7xl ">Amazing.&rdquo;</span>
          </div>
        </div>
          </Slide>

          <Slide index={1}>
          <div className="flex flex-row justify-evenly items-center bg-gray-200 dark:bg-gray-800 mx-8 lg:mx-16 rounded-lg p-3 lg:p-24 ">
          <div className="leftwala w-[50%] h-44 flex flex-col justify-center items-center space-y-2">
            <img
              className="rounded-full h-16 w-16  lg:h-28 lg:w-28"
              src={Pankaj}
              alt="gdsg"
            />
            <h2 className="lg:text-2xl font-bold">Pankaj Yadav</h2>
            <h3 className="lg:text-xl">Consultant</h3>
          </div>
          <div className="rightwala w-[50%] h-44 flex flex-col justify-center items-start tracking-widest bg-gradient-to-br from-purple-500 to-pink-600 text-transparent bg-clip-text uppercase font-extrabold">
          
           <span className="text-xl lg:text-4xl">&ldquo; Leave all on them.</span>
           <span className="text-xl lg:text-4xl">They will</span>
           <span className="text-xl lg:text-4xl">handle it</span>
           <span className="text-3xl lg:text-7xl ">Better.&rdquo;</span>
          </div>
        </div>
          </Slide>


          <Slide index={2}>
          <div className="flex flex-row justify-evenly items-center  bg-gray-200 dark:bg-gray-800 mx-8 lg:mx-16 rounded-lg p-3 lg:p-24 ">
          <div className="leftwala w-[50%] h-44 flex flex-col justify-center items-center space-y-2">
            <img
              className="rounded-full h-16 w-16  lg:h-28 lg:w-28"
              src={Kushahiwale}
              alt="gdsg"
            />
            <h2 className="lg:text-2xl font-bold">Anil Yadav</h2>
            <h3 className="lg:text-xl">Airport, Varanasi</h3>
          </div>
          <div className="rightwala w-[50%] h-44 flex flex-col justify-center items-start tracking-widest bg-gradient-to-br from-cyan-500 to-green-800 text-transparent bg-clip-text uppercase font-extrabold">
          
           <span className="text-xl lg:text-4xl">&ldquo; They make your </span>
           {/* <span className="text-xl lg:text-4xl">make your wedding</span> */}
           <span className="text-xl lg:text-4xl">wedding more than</span>
           <span className="text-3xl lg:text-7xl ">Awesome.&rdquo;</span>
          </div>
        </div>
          </Slide>


          <Slide index={3}>
          <div className="flex flex-row justify-evenly items-center  bg-gray-200 dark:bg-gray-800 mx-8 lg:mx-16 rounded-lg p-3 lg:p-24 ">
          <div className="leftwala w-[50%] h-44 flex flex-col justify-center items-center space-y-2">
            <img
              className="rounded-full h-16 w-16  lg:h-28 lg:w-28"
              src={Abhi}
              alt="gdsg"
            />
            <h2 className="lg:text-2xl font-bold">Abhishek Yadav</h2>
            <h3 className="lg:text-xl">UP Police</h3>
          </div>
          <div className="rightwala w-[50%] h-44 flex flex-col justify-center items-start tracking-widest bg-gradient-to-br from-teal-400 to-yellow-600 text-transparent bg-clip-text uppercase font-extrabold">
          
           <span className="text-xl lg:text-4xl">&ldquo;Make Your Wedding Film. </span>
           <span className="text-xl lg:text-4xl">Without Any</span>
           {/* <span className="text-xl lg:text-4xl">camera</span> */}
           <span className="text-3xl lg:text-7xl ">FEAR&rdquo;</span>
          </div>
        </div>
          </Slide>


        </Slider>
      </CarouselProvider>
{/* Carousel */}

</div>

<div className="flex justify-center items-center pt-0 lg:pt-2 pb-6">
          <span className="text-2xl md:text-2xl lg:text-4xl font-bold">
            What People Says About Us
          </span>
        </div>

        {/* Top 2 Review */}
        <section className="mx-12 lg:mx-16">
  <div className="container px-5 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-200 dark:bg-gray-800  p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Banaras Films has filmed all 3 of our children’s weddings…that’s all you really need to know! They are honest, reliable, affordable and do incredible work!</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://i.ytimg.com/vi/DWEL7SbAgF8/maxresdefault.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium ">Venkateshwar Iyyar</span>
              <span className=" text-sm">MD, Tamil Express</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-200 dark:bg-gray-800 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">They are worth every penny and I couldn’t be happier about who we used. If you’re searching for a videographer, do yourself a favor and reserve them now. You won’t regret it!</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://img.freepik.com/premium-photo/indian-common-man_621325-66.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium ">Ajay Gupta</span>
              <span className=" text-sm">Gupta General Store</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Review 3 */}

<section className="mx-12 lg:mx-16 ">
  <div className="container px-5 py-20 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg">BANARAS FILMS is truly the best film company to work! My wife and I truly treasure our films so much and the process could not have been easier! The team over there is seriously so sweet and cares so much about telling each couple’s personal story. I want everyone to have a film like we do because it seriously is so amazing to be able to relive or day forever!</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-3"></span> <br/>
      <img alt="testimonial" className="w-20 h-20 mb-3 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={Virendra}></img>
      <h2 className=" font-medium title-font tracking-wider text-sm">Virendra Yadav</h2>
      <p className="">Jay Maa Bhawani Building Materials</p>
    </div>
  </div>
</section>


{/* Review 4, 5 & 6 */}

<section className=" mx-12 lg:mx-16">
  <div className="container px-5 pt-2 pb-16 mx-auto">
    <div className="flex flex-wrap justify-evenly items-center -m-4">
      <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 bg-gray-200 dark:bg-gray-800 rounded">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://static.vecteezy.com/system/resources/thumbnails/000/798/327/small/female-doctor-in-hospital-interior.jpg"/>
          <p className="leading-relaxed">Words cannot express how amazing it was to use this company. They kept great communication and they were so willing to help in every way. On the day of our wedding, both videographers did a fantastic job explaining what we needed to do and how our shots would work. </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className=" font-medium title-font tracking-wider text-sm">Dr. Anamika Singh</h2>
          <p className="">Cardiologist, BHU</p>
        </div>
      </div>
      <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 bg-gray-200 dark:bg-gray-800 rounded">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="http://img.thedailybeast.com/image/upload/c_fill,h_200,w_200,x_0,y_0/v1492185898/author/udit-Thakur-author.jpg"/>
          <p className="leading-relaxed"> I have worked with this company on several weddings and would recommend them to my brides as my first choice each and every time! They are professional, on time, and deliver a product that reflects those cherished moments! Highly recommend this company!</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className=" font-medium title-font tracking-wider text-sm">Krishna Yadav</h2>
          <p className="">Krishna Interprises</p>
        </div>
      </div>
      <div className="lg:w-1/4 lg:mb-0 p-4 bg-gray-200 dark:bg-gray-800 rounded">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="http://foxcapital.in/images/upload/Anuj_M.jpg"/>
          <p className="leading-relaxed">They make sure before the wedding that their vision aligns exactly with yours, they create a day-of timeline with you, and even have you choose which clips of theirs you like the best so they can make yours similar. Truly outstanding customer service and outstanding production!</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className=" font-medium title-font tracking-wider text-sm">Raj Malhotra</h2>
          <p className="">Raj Electronics</p>
        </div>
      </div>
    </div>
  </div>
</section>





        


      </div>
    </>
  );
};

export default Review;
