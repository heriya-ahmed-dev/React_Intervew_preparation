import React from 'react'
import { useState } from 'react'
const CustomTab = () => {

    const [Active , setActive] = useState(false);
  
    
    const About = () => {
        return( 
        <div>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
                <li>Five</li>
             </div>
        )
    }
    const Next = () =>{
        return(
            <div>
                <li>Heriya</li>
                <li>Nejat</li>
                <li>Nayif</li>
                <li>Menessa</li>
                <li>Mariya</li>
            </div>
        )
    }
  return (
    <div className='flex justify-center gap-[20px]'>
        <div>
        <button onClick={() => setActive('about')}  className='bg-[brown] rounded-[5px] w-[60px]'>About</button>
        <p >{Active === 'about' && <About/>}</p>
        </div>
        <div>
        <button onClick={() => setActive('next')} className='bg-[brown] rounded-[5px] w-[60px]'> Next</button>
        <p >{Active === 'next' && <Next/>}</p>
        </div>
    </div>
  )
}

export default CustomTab;
