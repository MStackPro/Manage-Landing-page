import ClientImage2 from "../assets/avatar-ali.png";
import ClientImage1 from "../assets/avatar-anisha.png";
import ClientImage3 from "../assets/avatar-richard.png";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';



const Testimonial = () => {
  return (
    <>
    <section className="hidden md:flex">
      {/* container */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* heading */}
        <h2 className="text-4xl font-bold text-center">
          What they've said
        </h2>
        {/* testimonials container */}
        <div className="flex mt-24 flex-row md:space-x-6">
          {/* testimonial 1 */}
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-VeryLightGray w-1/3">
            <img src={ClientImage1} alt="client image" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-DarkGrayishBlue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keep
              everyone motivated."
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-VeryLightGray w-1/3">
            <img src={ClientImage2} alt="client image" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-DarkGrayishBlue">
              "We have been able to cancel so many other subscriptions since
              using manage. There is no more cross-channel confusion and
              everyone is much more focused."
            </p>
          </div>

          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-VeryLightGray w-1/3">
            <img src={ClientImage3} alt="client image" className="w-16 -mt-14" />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-DarkGrayishBlue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keep
              everyone motivated."
            </p>
          </div>
        </div>
        {/* button */}
      <div className="my-16">
       <a href="#" className="p-3 px-6 pt-2 text-white bg-BrightRed rounded-full baseline hover:bg-BrightRedLight transition-all duration-500 ease-in-out">Get Started</a>
      </div>
      </div>
    </section>


    {/* ====== TESTIMONIAL ON MOBILE ==========*/}
    <section id="testimonials" className="md:hidden">
      {/* container */}
      <div className="container px-5 mx-auto mt-32 text-center">

      {/* heading */}
      <h2 className="text-4xl font-bold text-center">What they've said</h2>
      {/* testimonials container */}
      <div className="mt-8 md:space-x-6">
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
               
          {/* testimony 1 */}
          <SwiperSlide className="mt-24 items-center p-6 space-y-6 rounded-lg bg-VeryLightGray mb-8 cursor-pointer">
            <img
              src={ClientImage1}
              alt="client image"
              className="w-16 -mt-14 mx-auto"
            />
            <h5 className="text-lg font-bold">Anisha Li</h5>
            <p className="text-sm text-DarkGrayishBlue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keep
              everyone motivated."
            </p>
          </SwiperSlide>
          

          {/* testimony 2 */}
          <SwiperSlide className="hidden mt-24 items-center p-6 space-y-6 rounded-lg bg-VeryLightGray cursor-pointer">
            <img
              src={ClientImage2}
              alt="client image"
              className="w-16 -mt-14 mx-auto"
            />
            <h5 className="text-lg font-bold">Ali Bravo</h5>
            <p className="text-sm text-DarkGrayishBlue">
              "We have been able to cancel so many other subscriptions since
              using manage. There is no more cross-channel confusion and
              everyone is much more focused."
            </p>
          </SwiperSlide>

          {/* testimony 3 */}
          <SwiperSlide className="hidden mt-24 items-center p-6 space-y-6 rounded-lg bg-VeryLightGray cursor-pointer">
            <img
              src={ClientImage3}
              alt="client image"
              className="w-16 -mt-14 mx-auto"
            />
            <h5 className="text-lg font-bold">Richard Watts</h5>
            <p className="text-sm text-DarkGrayishBlue">
              "Manage has supercharged our team's workflow. The ability to
              maintain visibility on larger milestones at all times keep
              everyone motivated."
            </p>
          </SwiperSlide>
      </Swiper>
      {/* button */}
      <div className="my-16">
       <a href="#" className="p-3 px-6 pt-2 text-white bg-BrightRed rounded-full baseline hover:bg-BrightRedLight transition-all duration-500 ease-in-out">Get Started</a>
      </div>
      </div>
      </div>
    </section>
    </>
  );
};

export default Testimonial;
