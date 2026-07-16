import React from 'react'

const RecipChild = ({items}) => {
  return (
    <div className='m-auto text-center bg-[#CCC7E6] w-[380px] rounded-[10px]'>
      <h1 className='text-[25px] my-[10px]'>{items.name}</h1>
      <img src={items.img} className='w-[300px] m-auto rounded-[7px]'/>
      <h3 className='text-[20px] text-[blue]'>{items.price}</h3>

    </div>
  )
}

export default RecipChild