import React, { useEffect, useReducer, useState } from 'react'
import CartContext from './Cart_Create_Context'
import foodData from "../Data/MealsList.json"

const ACTION={
  ADD:"add",
  REMOVE:"remove",
  INCREASE:"increase",
  DECREASE:"decrease",
}



function Cart_context_provider(props) {




const [cartState,setCartState]=useState({})
const [cartTotal,setCartTotal]=useState(0)
useEffect(()=>{
  let total=0;
  let data=cartState;
  const data_key=Object.keys(data);
  data_key.map((k,n)=>{
    total+=data[k].n*Number(data[k].price)
  })
  setCartTotal(total)

},[cartState])

const handler={
    addToCartItem:(x)=>{
     const item_details=foodData[x];
     let data={...cartState}
     console.log(cartState)
    //  add
     if(data[x]==undefined){
      data[x]={...item_details,n:1}
      setCartState(data)
     }
    //  increse
     else{
      data[x].n+=1
      setCartState(data)
     }
    },

    fetch_CartItem:()=>{
        return cartState;
        }
    
}



  return (
    <CartContext.Provider value={{cartState,handler,cartTotal}}>
{props.children}


    </CartContext.Provider>
  )
}

export default Cart_context_provider