import React, { useContext, useState } from 'react'
import Styles from "./Styles.module.css"
import {BiCartAlt} from 'react-icons/bi'
import { CartPopup } from '.'
import { CartContext } from "../../Store_context";

function CartButton(props) {

const cartTotalItem=useContext(CartContext).cartTotalItem



  return (
    <div className={Styles.CartButton1}>
<button  onClick={props.onShowPopup}>
    <span><BiCartAlt/> </span>
    <span>Cart </span>
    <span>{`${cartTotalItem}`}
</span>
    </button>


    </div>
  )
}

export default CartButton