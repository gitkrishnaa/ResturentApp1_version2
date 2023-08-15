import React, { useReducer } from 'react'
import CartContext from './Cart_Create_Context'
import foodData from "../Data/MealsList.json"

const ACTION={
  ADD:"add",
  REMOVE:"remove",
  INCREASE:"increase",
  DECREASE:"decrease",
}

let count=0;

function Cart_context_provider(props) {
let data={}

const reducerhandler=(State_data,action)=>{
if(action.type==ACTION.ADD){
  const data={...State_data}
  data[action.item_id]={...action.item,number:1};
  console.log(State_data,"State_data","reducerhandler() add ")
  console.log(data,"data","reducerhandler() add ")
  return data;
}
if(action.type==ACTION.INCREASE){
  count++;
  const data={...State_data};
  data[action.item_id].number+=1
console.log(count)
  return data;
}
}
const [CartState,dispach]=useReducer(reducerhandler,{})


const fetch_CartItem=()=>{
return CartState;
}

const handler={
    addToCartItem:(x)=>{
      const food_item_detils=foodData[x]
      console.log(food_item_detils,"item")
      //checking if item exist already then just increase it
      if(CartState[x]!=undefined){
        dispach({type:ACTION.INCREASE,item_id:x});
        
      }

else{   dispach({type:ACTION.ADD,item:food_item_detils,item_id:x})
}
     
     console.log(CartState, "state")
    },

    fetch_CartItem:()=>{
        return CartState;
        }
    
}



  return (
    <CartContext.Provider value={{CartState,handler}}>
{props.children}


    </CartContext.Provider>
  )
}

export default Cart_context_provider