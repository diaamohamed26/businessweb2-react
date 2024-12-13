import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import test1 from '../../assets/test-1.jpg'
import test2 from '../../assets/test-2.jpg'
import test3 from '../../assets/test-3.jpg'
import test4 from '../../assets/test-4.jpg'
import test5 from '../../assets/test-5.jpg'
import test6 from '../../assets/test-6.jpg'
import { FaStar } from "react-icons/fa";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonial.css'

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className='testimonial' id='testimonial'>
      <div className='top-test'>
        <h3>What Our Users Say</h3>
        <p>This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
      </div>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide'>
          <img src={test1}/>
          <p>" The most well-known dummy text is the 'Lorem Ipsum', 
            which is said to have originated in the 16th century. "</p>
          <div className='stars'>
           <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={test2}/>
          <p>" The most well-known dummy text is the 'Lorem Ipsum', 
            which is said to have originated in the 16th century. "</p>
          <div className='stars'>
           <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={test3}/>
          <p>" The most well-known dummy text is the 'Lorem Ipsum', 
            which is said to have originated in the 16th century. "</p>
          <div className='stars'>
           <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={test4}/>
          <p>" The most well-known dummy text is the 'Lorem Ipsum', 
            which is said to have originated in the 16th century. "</p>
          <div className='stars'>
           <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={test5}/>
          <p>" The most well-known dummy text is the 'Lorem Ipsum', 
            which is said to have originated in the 16th century. "</p>
          <div className='stars'>
           <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
          <img src={test6}/>
          <p>" The most well-known dummy text is the 'Lorem Ipsum', 
            which is said to have originated in the 16th century. "</p>
          <div className='stars'>
           <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
