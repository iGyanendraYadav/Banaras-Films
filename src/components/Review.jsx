import React from "react";
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useDocumentTitle } from "../components/hooks/hooks";

const Review = () => {
  useDocumentTitle("Review");
  return (
    <>
      <div className="text-gray-600 bg-white dark:bg-[#0b1121] dark:text-white font-[Poppins] pt-3 lg:pt-[14px]">


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
          <div className="flex flex-row justify-evenly items-center  bg-gray-200 dark:bg-gray-800 mx-12 lg:mx-16 rounded-lg p-3 lg:p-24 ">
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
          <div className="flex flex-row justify-evenly items-center bg-gray-200 dark:bg-gray-800 mx-12 lg:mx-16 rounded-lg p-3 lg:p-24 ">
          <div className="leftwala w-[50%] h-44 flex flex-col justify-center items-center space-y-2">
            <img
              className="rounded-full h-16 w-16  lg:h-28 lg:w-28"
              src="https://avatars.githubusercontent.com/u/49138951?v=4"
              alt="gdsg"
            />
            <h2 className="lg:text-2xl font-bold">Pankaj Yadav</h2>
            <h3 className="lg:text-xl">Consultant</h3>
          </div>
          <div className="rightwala w-[50%] h-44 flex flex-col justify-center items-start tracking-widest bg-gradient-to-br from-purple-500 to-pink-600 text-transparent bg-clip-text uppercase font-extrabold">
          
           <span className="text-xl lg:text-4xl">&ldquo; Leave all on them.</span>
           <span className="text-xl lg:text-4xl">They will handle</span>
           <span className="text-xl lg:text-4xl">it</span>
           <span className="text-3xl lg:text-7xl ">Better.&rdquo;</span>
          </div>
        </div>
          </Slide>


          <Slide index={2}>
          <div className="flex flex-row justify-evenly items-center  bg-gray-200 dark:bg-gray-800 mx-12 lg:mx-16 rounded-lg p-3 lg:p-24 ">
          <div className="leftwala w-[50%] h-44 flex flex-col justify-center items-center space-y-2">
            <img
              className="rounded-full h-16 w-16  lg:h-28 lg:w-28"
              src="https://avatars.githubusercontent.com/u/49138951?v=4"
              alt="gdsg"
            />
            <h2 className="lg:text-2xl font-bold">Virendra Yadav</h2>
            <h3 className="lg:text-xl">Businessman</h3>
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
          <div className="flex flex-row justify-evenly items-center  bg-gray-200 dark:bg-gray-800 mx-12 lg:mx-16 rounded-lg p-3 lg:p-24 ">
          <div className="leftwala w-[50%] h-44 flex flex-col justify-center items-center space-y-2">
            <img
              className="rounded-full h-16 w-16  lg:h-28 lg:w-28"
              src="https://avatars.githubusercontent.com/u/49138951?v=4"
              alt="gdsg"
            />
            <h2 className="lg:text-2xl font-bold">Abhishek Yadav</h2>
            <h3 className="lg:text-xl">UP Police</h3>
          </div>
          <div className="rightwala w-[50%] h-44 flex flex-col justify-center items-start tracking-widest bg-gradient-to-br from-teal-400 to-yellow-600 text-transparent bg-clip-text uppercase font-extrabold">
          
           <span className="text-xl lg:text-4xl">&ldquo;Make Your Wedding Film. </span>
           <span className="text-xl lg:text-4xl">lights Camera</span>
           {/* <span className="text-xl lg:text-4xl">camera</span> */}
           <span className="text-3xl lg:text-7xl ">Action&rdquo;</span>
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
          <p className="leading-relaxed mb-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius obcaecati quo officia sint, asperiores dolores voluptatibus excepturi ut quasi sunt distinctio quidem, exercitationem earum architecto quod doloremque debitis? Aliquam, nulla?</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://avatars.githubusercontent.com/u/49138951?v=4" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium ">Person Name</span>
              <span className=" text-sm">Occupation</span>
            </span>
          </a>
        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-gray-200 dark:bg-gray-800 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, maxime nam. Voluptas consequuntur debitis iusto, quasi sed odio, dolor magni nisi architecto sapiente perspiciatis at quia molestiae molestias sint cumque?</p>
          <a className="inline-flex items-center">
            <img alt="testimonial" src="https://avatars.githubusercontent.com/u/49138951?v=4" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium ">Person 2</span>
              <span className=" text-sm">DESIGNER</span>
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
      <p className="leading-relaxed text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam perferendis deserunt iusto ullam quibusdam eius culpa. Animi dolorem unde autem. Ab, quidem rem odio eos fuga minus! Nobis officia aliquid, repudiandae deserunt, assumenda aut sed autem dolorum, minus nostrum facere recusandae inventore quos libero iusto delectus voluptates! Repudiandae, consectetur.</p>
      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-3"></span> <br/>
      <img alt="testimonial" className="w-20 h-20 mb-3 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://avatars.githubusercontent.com/u/49138951?v=4"></img>
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
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://avatars.githubusercontent.com/u/49138951?v=4"/>
          <p className="leading-relaxed">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A iure, officiis ullam sed excepturi perferendis impedit magni ex, aliquam, reiciendis incidunt labore unde cumque. Quas!</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className=" font-medium title-font tracking-wider text-sm">Ajeeth Venkateshwar</h2>
          <p className="">Doctor</p>
        </div>
      </div>
      <div className="lg:w-1/4 lg:mb-0 mb-6 p-4 bg-gray-200 dark:bg-gray-800 rounded">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://avatars.githubusercontent.com/u/49138951?v=4"/>
          <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis, voluptate veritatis distinctio laudantium incidunt officia placeat sequi illo iusto dolore architecto deleniti eum mollitia.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className=" font-medium title-font tracking-wider text-sm">Krishna Yadav</h2>
          <p className="">Krishna Interprises</p>
        </div>
      </div>
      <div className="lg:w-1/4 lg:mb-0 p-4 bg-gray-200 dark:bg-gray-800 rounded">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://avatars.githubusercontent.com/u/49138951?v=4"/>
          <p className="leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit unde, quae provident atque praesentium saepe aliquam esse quisquam labore enim eveniet ipsum delectus animi.</p>
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
