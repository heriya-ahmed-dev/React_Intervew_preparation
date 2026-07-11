import React from 'react';
import { useState,useEffect } from 'react';

const Scroll = () => {
   const [scroll,setScroll] = useState(0);

   const handleScroll = () =>{
      
     const scrolly = window.scrollY;

     const documentheight = document.documentElement.scrollHeight;

     const innerHeight = window.innerHeight;

     const scrollHeight = documentheight - innerHeight;

     const ScrollPercent = (scrolly/scrollHeight)*100

     setScroll(ScrollPercent);

   }
   useEffect (()=>{
      window.addEventListener('scroll',handleScroll)

   },[])



  return (
    <div>
    <div>
    <div
    style ={{
        width : `${scroll}%`,
        height : '30px',
        backgroundColor:'blue',
        position: 'fixed',
        top: 0,
        marginBottom: '20px',
        paddingBottom :'30px',
        left : 0
       }}
      >
        Scroll bar

        
    </div>
     <div className='mt-[50px] w-[300px] m-auto bg-[pink] rounded-[10px] p-4'>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, eligendi! Quae, possimus dignissimos? Saepe necessitatibus, reiciendis iusto ad, libero accusantium, voluptate laboriosam minima esse soluta fuga ipsam quod excepturi sit!</p>
   <li>Menssa</li>
   <li>Menssa</li>
   <li>Menssa</li>
   <li>Menssa</li>
   <li>Menssa</li>
   <li>Menssa</li>
   <li>Menssa</li>
   <li>Menssa</li>
   <li>Menssa</li>
   <li>Menssa</li>
   <li>Menssa</li>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint laborum nemo voluptatem, illum facere dolore sit. Accusantium incidunt obcaecati vel quasi modi, tempore nostrum fugiat, perferendis expedita at commodi?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint laborum nemo voluptatem, illum facere dolore sit. Accusantium incidunt obcaecati vel quasi modi, tempore nostrum fugiat, perferendis expedita at commodi?</p>
   
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint laborum nemo voluptatem, illum facere dolore sit. Accusantium incidunt obcaecati vel quasi modi, tempore nostrum fugiat, perferendis expedita at commodi?</p>
   
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint laborum nemo voluptatem, illum facere dolore sit. Accusantium incidunt obcaecati vel quasi modi, tempore nostrum fugiat, perferendis expedita at commodi?</p>
   
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint laborum nemo voluptatem, illum facere dolore sit. Accusantium incidunt obcaecati vel quasi modi, tempore nostrum fugiat, perferendis expedita at commodi?</p>
   
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint laborum nemo voluptatem, illum facere dolore sit. Accusantium incidunt obcaecati vel quasi modi, tempore nostrum fugiat, perferendis expedita at commodi?</p>
   
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint laborum nemo voluptatem, illum facere dolore sit. Accusantium incidunt obcaecati vel quasi modi, tempore nostrum fugiat, perferendis expedita at commodi?</p>
   
    </div>
    </div>
    </div>
  )
}

export default Scroll