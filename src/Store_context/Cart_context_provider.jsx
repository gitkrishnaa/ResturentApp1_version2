import React, { useReducer } from 'react'
import CartContext from './Cart_Create_Context'
import foodData from "../Data/MealsList.json"

function Cart_context_provider(props) {
let data={1:{name:"Momo",price:180,number:1}}
const reducerhandler=()=>{

}
const [State,dispach]=useReducer(reducerhandler,data)


const fetch_CartItem=()=>{
return State;
}

const handler={
    addToCartItem:()=>{
        let details=foodData[x];
        console.log(details)
    }
}



  return (
    <CartContext.Provider value={{data:State,handler:8}}>
{props.children}


    </CartContext.Provider>
  )
}

export default Cart_context_provider