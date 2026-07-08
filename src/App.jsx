import React from 'react';
import './App.css';
import Selection from './Componenets/Selection_Conroller/Selection.jsx';
import Rating from './Componenets/Rating/Rating.jsx';
const App = () => {
  return (
    <div>
      <h1 className='text-center text-[25px] m-5'>First</h1>
     <Selection/>
     <h1 className='text-center text-[25px] m-5'>Second</h1>
     <Rating/>
    </div>
  )
}

export default App