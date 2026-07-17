import React from 'react';
import Black from './Black';
import Blue from './Blue';
import Pink from './Pink';
import Red from './Red';
import { Link } from 'react-router-dom';
import Green from './Green';
const ParticularScroll = () => {

    const ParticularScroll = (id) =>{
       document.getElementById(id).scrollIntoView({
        behavior : 'smooth',
       })
    }

  return (
    <div>
        <div className='fixed top-6 h-[30px] left-0 w-full flex justify-center gap-4 bg-black text-white text-[20px] p-1 z-50'>
        <button onClick={()=> ParticularScroll('black')}>Black</button>
        <button onClick={()=> ParticularScroll('red')}>Red</button>
        <button onClick={()=> ParticularScroll('green')}>Green</button>
        <button onClick={()=> ParticularScroll('pink')}>Pink</button>
        <button onClick={()=> ParticularScroll('blue')}>Blue</button>
        </div>
        <div>
            <Blue/>
            <Green/>
            <Pink/>
            <Red/>
            <Black/>
        </div>

    </div>
  )
}

export default ParticularScroll;