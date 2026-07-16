import React from 'react'
import { useState , useRef } from 'react'
const HandleClick = () => {

    const [active, setActive] = useState(false);
    const insideRef = useRef(null);

    const handleClick  = () =>{
         insideRef.current.focus()
    }
   
    const handleClickOff = (e) =>{
        if(e.target !== insideRef.current){
            setActive(false)
        }
        if(active == false){
            insideRef = null
        }
    }
    
  return (
    <div onClick={handleClickOff} className='w-[500px] m-auto text-center'>
        <h1 className='text-center'>Hello Every one</h1>
        <div className='flex flex-col gap-[20px]'>
            <input ref={insideRef} onClick={()=>setActive(true)} className='w-200px bg-[pink] p-[5px]'/>
            <button onClickCapture={handleClick} className='w-[100px] bg-[blue] text-white text-center rounded-[5px]'>click</button>
        </div>
        

    </div>
  )
}

export default HandleClick
