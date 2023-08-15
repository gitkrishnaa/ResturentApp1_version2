import React, { useReducer, useState } from 'react'
import CartContext from './Cart_Create_Context'
import foodData from "../Data/MealsList.json"

function Cart_context_provider(props) {


const [cartState,setCartState]=useState({})




const handler={
    addToCartItem:(x)=>{
     let iten_details= foodData[x]
     console.log(iten_details)
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