import React from 'react'
import { useState,useEffect } from 'react'
const Fetching = () => {
    const [image,setimage] = useState([])
    useEffect(()=>{
        fetch('https://newsdata.io/api/1/latest?apikey=pub_19c9271de3924d738c8445a1ad05ff4d&q=pizza')
        .then((res)=>res.json())
        .then((data)=> {
            // console.log(data)
            console.log(data.results)
            setimage(data.results);
            
        })

        .catch((err)=>console.log(err))
    },[])
   
  return (
    <div>
        {image.map((items,index)=>{
          
            return(
                <div id={items.atricle_id}>
                   <p className='w-[500px] m-auto  text-[18px] text-[brown] text-center'>{items.title}</p>
                   <h1 className='text-center text-[20px]'>{items.country}</h1>
                   <img src={items.image_url} className='w-[300px] m-auto'/>
                </div>
            )
        })}
    </div>
  )
}

export default Fetching
