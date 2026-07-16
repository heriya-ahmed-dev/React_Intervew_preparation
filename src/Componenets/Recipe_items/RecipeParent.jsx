import React from 'react'
import chips from './Images/chips.jpeg';
import burger from './Images/Burger.jpeg';
import cake from './Images/cake.jpeg';
import meat from './Images/meat.jpeg';
import sphagetti from './Images/spaghetti.jpeg';
import chicken from './Images/chicken.jpeg';
import RecipChild from './RecipChild';

  const RecipeParent = () => {
    const Lists = [
        {
            id: 1,
            name: 'Burger',
            img : burger,
            price: "$20"

        },
         {
            id: 2,
            name: 'Meat',
            img : meat,
            price: "$30"

        },
         {
            id: 3,
            name: 'Sphaggeti',
            img : sphagetti,
            price: "$16"

        },
         {
            id: 4,
            name: 'Cake',
            img : cake,
            price: "$12"

        },
        
         {
            id: 5,
            name: 'Chicken',
            img : chicken,
            price: "$20"

        },
         {
            id: 6,
            name: 'Chips',
            img : chips,
            price: "$7"

        },
    ]
  return (
    <div className='grid grid-cols-3'>
       {Lists.map((item)=>{
        return(
            <div key={item.id}>
                <RecipChild items = {item}/>
            </div>
        )
       })}
    </div>
  )
}

export default RecipeParent