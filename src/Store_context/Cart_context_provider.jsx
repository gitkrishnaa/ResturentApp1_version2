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
const [cartTotal,setCartTotal]=useState(0) //Amount
const [cartTotalItem,setCartTotalItem]=useState(0)
useEffect(()=>{
  let total=0;
  let data=cartState;
  const data_key=Object.keys(data);
  data_key.map((k,n)=>{
    total+=data[k].n*Number(data[k].price)
  })
  setCartTotal(total)
let totalItem=0;

  data_key.map((k,n)=>{
    if(data[k].n>0){
      totalItem++;
    }
   
  })
  setCartTotalItem(totalItem)
console.log(cartTotalItem,"total item")

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
        },
    removeToCartItem:(x)=>{
          const item_details=foodData[x];
          let data={...cartState}
          console.log(cartState)
         //  remove if item number n>1, since if decrese it ,it become zero means not exist
          if(data[x].n<=1){
            data[x].n-=1
           setCartState(data)
          }
         //  decrese 
          else{
           data[x].n-=1
           setCartState(data)
          }
         },
    
}



  return (
    <CartContext.Provider value={{cartState,handler,cartTotal,cartTotalItem}}>
{props.children}


    </CartContext.Provider>
  )
}

export default Cart_context_provider