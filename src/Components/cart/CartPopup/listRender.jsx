import React, { useContext, useRef } from "react";
import Styles from "./Styles.module.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CartContext } from "../../../Store_context";


function Main(props) {
  // let iconRef=useRef()
  // console.log(<BsFillCartPlusFill id="high"/>)
//context
// let cartContext_add_item=useContext(CartContext).handler
const addToCart=useContext(CartContext).handler.addToCartItem
const decrese_item_ToCart=useContext(CartContext).handler.removeToCartItem

const addToCart_onclick_handler=(e)=>{
    const id_from_add_button=e.target.id
    const id=id_from_add_button[id_from_add_button.length-1]
    addToCart(id)
//   alert(id_from_add_button.slice(id_from_add_button.length-1))
//   alert(id_from_add_button[id_from_add_button.length-1])

}
const removeToCart_onclick_handler=(e)=>{
    const id_from_add_button=e.target.id
    const id=id_from_add_button[id_from_add_button.length-1]
    decrese_item_ToCart(id)
}

  return (
    <div className={Styles.mainDiv}>
      <div>
        <span className={Styles.name}>{props.name} </span>
        <span className={Styles.price}>{props.price} rs </span>
        <span className={Styles.details}>{props.number} </span>
      </div>

   <div>
    <button onClick={addToCart_onclick_handler} id={"add"+props.id}>+</button>
    <button  onClick={removeToCart_onclick_handler} id={"remove"+props.id}>-</button>
   </div>
          
          
         
        
    </div>
  );
}

export default Main;
