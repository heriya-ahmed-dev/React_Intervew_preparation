import React from 'react'
import { useState } from 'react';
import { Fruits } from './Search.js';
const Search = () => {
    const [Search,setSearch] = useState('')

    const result  = Fruits.filter((fruit)=>{
        return fruit.toLowerCase().includes(Search.toLowerCase())
    })
  return (
    <div className=''>
        <div className='flex items-center'>
        <input
        className='w-[600px] h-[50px] rounded-[5px] mt-[5px] m-auto text-[17px] bg-[pink] mb-[50px]'
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
        
        
        />
        </div>
        {Search !== '' && result.map((items,index)=>{
            return(
                <div key={index} className='flex flex-col items-center'>

                   <p className='mx-auto'>{items}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Search