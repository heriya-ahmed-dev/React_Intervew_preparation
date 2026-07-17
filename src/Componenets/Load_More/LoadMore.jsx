import React from 'react'
import { useState,useEffect } from 'react'

const LoadMore = () => {
    const [Foods,setFoods] = useState([]);
    const [visible,setVisible] = useState(5)

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res)=>res.json())
        .then((data)=> setFoods(data.meals))
    },[])
    const AddItems = () =>{
        if(visible < Foods.length){
            setVisible(visible + 5)
        }
    }


  return (
    <div>
        <div>
            {Foods.slice(0,visible).map((items)=>{
                return(
                    <div key={items.idMeal} className='place-items-center'>
                        <p className='mt-[20px] text-[20px] text-[blue]'>{items.strMeal}</p>
                        <h1 className='text-[brown] text-[18px]'>{items.strCountry}</h1>
                        <img src={items.strMealThumb} className='w-[200px] rounded-[10px]'/>

                    </div>
                )
            })}

        </div>
        <div className='flex justify-center'>
        <button className=' w-[100px] bg-[blue] text-[white] my-[10px] h-[40px] rounded-[10px] hover:bg-[purple]' onClick={()=>AddItems()}>Load More</button>
        </div>
    </div>
  )
}

export default LoadMore;