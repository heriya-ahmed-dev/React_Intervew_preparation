import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import { Slide_images } from './Slide';
import './Slide.css'
const Slide = () => {
  
  return (
    <div className=' main'>
        <h1 className='text-[20px] text-center'>Image Slide Functionality</h1>
        <Carousel
        className='img_width height-[500px]'
        infiniteLoop = {true}
        autoPlay
        interval={3000}
        showIndicators = {true}
        showThumbs={false}
        transitionTime={500}
      >
        {Slide_images.map((item)=>{
            return(
                <div key={item.id} className='h-[400px] rounded-[10px]'>
                    <img src={item.url} alt='images'/>
                </div>
            )
        })}
        </Carousel>
    </div>
  )
}

export default Slide;