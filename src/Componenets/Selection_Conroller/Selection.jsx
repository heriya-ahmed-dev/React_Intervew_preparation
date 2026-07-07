import React from 'react';
import { useState } from 'react';
import { selection_data } from './selection';
import './selection.css';

const selection = () => {
 
  const [select,setSelect] = useState(null);
  const [multiselect, setMultiselect] = useState([]);
  const [enableMultiSelect,setenableMultiSelect] = useState(false);

  function open(id){
      if(enableMultiSelect){
        if(multiselect.includes(id)){
          setMultiselect(multiselect.filter((item) => item != id))
        }
        else{
          setMultiselect([...multiselect, id])

        }
      }
      else{
        setSelect(id)
      }


  }


  return (
    <div className='w-[300px] m-auto bg-[whiteSmoke]'>
      <h1 className='w-[150px] h-[35px] bg-[#00A6F4] text-center mt-5 rounded-[10px] ms-[83px] hover:bg-[blue] text-[20px]' onClick={()=>setenableMultiSelect(()=>!enableMultiSelect)}>Multi Selection</h1>
      <div className='w-[320px] bg-[purple] p-5 rounded-[15px] mb-[10px]'>
      {selection_data.map((item)=>{
        return(
          <div key={item.id}>
              <h1 className='text-[18px] hover:bg-[#0000FF] rounded-[10px] text-white' onClick={()=>open(item.id)}>{item.question}</h1>
              {multiselect.includes(item.id) && <p className='p-3 bg-[#00AAFF] rounded-[10px]'>{item.answer}</p> }
              {select === item.id && <p className='p-3 bg-[#00AAFF] rounded-[10px]'>{item.answer}</p> }
          </div>
        )
      })}
      </div>
    </div>
  )
}


export default selection;

