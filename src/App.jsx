import React from 'react';
import './App.css';
import Selection from './Componenets/Selection_Conroller/Selection.jsx';
import Rating from './Componenets/Rating/Rating.jsx';
import Slide from './Componenets/Image_Slide/slide.jsx';
import Light_Dark from './Componenets/Light_Dark_Mode/Light_Dark.jsx';
const App = () => {
  return (
    <div>
      <h1 className='text-center text-[25px] m-5'>First</h1>
     <Selection/>
     <h1 className='text-center text-[25px] m-5'>Second</h1>
     <Rating/>
      <h1 className='text-center text-[25px] m-5'>Third</h1>
     <Slide/>
       <h1 className='text-center text-[25px] m-5'>Fourth</h1>
       <h1 className='text-center text-[25px] m-5'> White and Dark Background color</h1>
     <Light_Dark/>
    </div>
  )
}

export default App