import React, { useContext, useRef } from "react";
import Styles from "./Styles.module.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import { CartContext } from "../../Store_context";


function Main(props) {
  // let iconRef=useRef()
  // console.log(<BsFillCartPlusFill id="high"/>)
//context
const addToCart=useContext(CartContext).handler.addToCartItem


const addToCart_onclick_handler=(e)=>{
  addToCart(e.target.id)
  // e.stopPropagation()
  // alert(e.target.id)
  // console.log(e)
  // console.log(iconRef)
}

  return (
    <div className={Styles.mainDiv}>
      <div>
        <span className={Styles.name}>{props.name} </span>
        <span className={Styles.details}>{props.details} </span>
        <span className={Styles.price}>{props.price} rs </span>
      </div>

      <div>
        <div className={Styles.cart_inputs}>
          
          <input type="text" placeholder="no." />
         
        </div>
        <div className={Styles.add_to_buttons}>
          <span>add to cart</span>
          <button  style={{position:"relative"}}   >
            <div style={{backgroundColor:"red",width:"100%",height:"100%",
          position:"absolute",
          left:"0px",
          top:"0px",
          background:"transparent"
          
          }} id={props.id} onClick={addToCart_onclick_handler}></div>
            <BsFillCartPlusFill  />
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
