import React from 'react';
import insta1 from '../Image/insta-1.webp'
import insta2 from '../Image/insta-2.webp'
import insta3 from '../Image/insta-3.webp'
import insta4 from '../Image/insta-4.webp'
import insta5 from '../Image/insta-5.webp'
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

const Instagram = () => {
    return (
<div>
<h2 className='text-center text-3xl pt-24'>#CLADUA on Instagram</h2>
            <div className='line w-24 mx-auto mt-1'></div>
            <p className='flex justify-center items-center text-xl text-[#C2AE93] py-10 mr-3'><FaInstagram></FaInstagram> <span className='ml-3'>Instagram</span></p>
<div class="carousel carousel-center w-full p-4 space-x-4">
  <div id='slider-1' class="carousel-item">
    <img src={insta1} class="" />
  </div> 
  <div id='slider-2' class="carousel-item">
    <img src={insta2} class="" />
  </div> 
  <div id='slider-3' class="carousel-item">
    <img src={insta3} class="" />
  </div> 
  <div id='slider-4' class="carousel-item">
    <img src={insta4} class="" />
  </div> 
  <div id='slider-5' class="carousel-item">
    <img src={insta5} class="" />
  </div> 
  <div id='slider-6' class="carousel-item">
    <img src={insta1} class="" />
  </div> 
  <div id='slider-7' class="carousel-item">
    <img src={insta2} class="" />
  </div>
</div>
</div>
    );
};

export default Instagram;