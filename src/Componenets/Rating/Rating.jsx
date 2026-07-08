import React from 'react'
import { useState } from 'react'
import { FaStar } from "react-icons/fa";

const Rating = () => {
    const [rating,setRating] = useState(0);
    const [hover,sethover] = useState(0)

    const stars = [1,2,3,4,5]
  return (
    <div className='text-center  mt-[10px]'>
        <h1 className='text-[20px]'>Rating Componenet</h1>
    <div className='text-center flex justify-center gap-[5px] w-[300px] m-auto'>
        {
            stars.map((item,index)=>{
             
             return(
                <FaStar
                className='center m-auto flex'
                key={index}
                  size={40}
                  onClick={()=>setRating(item)}
                  onMouseEnter={()=>sethover(item)}
                  onMouseLeave={()=>sethover(0)}
                  color={item <= (hover || rating) ? "gold" : 'gray' }
                />
             )
            })
           
        }
        
    </div>
    <h1 className='mt-[10px] text-[20px]'>{rating}</h1>
    </div>
  )
}

export default Rating