import React, { useReducer, useState } from 'react'
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



const handler={
    addToCartItem:(x)=>{
     
    },

    fetch_CartItem:()=>{
        return cartState;
        }
    
}



  return (
    <CartContext.Provider value={{cartState,handler}}>
{props.children}


    </CartContext.Provider>
  )
}

export default Cart_context_provider