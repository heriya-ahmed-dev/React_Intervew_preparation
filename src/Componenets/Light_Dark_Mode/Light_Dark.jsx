import React from 'react';
import { useState } from 'react';
const Light_Dark = () => {
   const [light,setLight] = useState(false)
  return (
    <div
        style={{backgroundColor : light ?'white' : 'black',
            height: "585px"
        }}
        className='text-center'>
        <button onClick={()=>setLight(!light)} className='justify-center  text-[20px] text-[red] mt-[20px] bg-[#A9A9A9] w-[70px] rounded-[10px]'>
              Click

        </button>

    </div>
  )
}

export default Light_Dark