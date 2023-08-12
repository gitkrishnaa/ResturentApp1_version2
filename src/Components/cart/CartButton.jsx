import React, { useState } from 'react'
import Styles from "./Styles.module.css"
import {BiCartAlt} from 'react-icons/bi'
import { CartPopup } from '.'
function CartButton(props) {
const [pupup_window,setPupup_window]=useState(false)

const CartButtonClickHanfler=()=>{
// alert("cart is opening ..")
setPupup_window(true)
}



  return (
    <div className={Styles.CartButton1}>
<button onClick={CartButtonClickHanfler}>
    <span><BiCartAlt/> </span>
    <span>Cart </span>
    <span>{`${props.totalCartNumber}`}
</span>
    </button>

{pupup_window?<CartPopup />:console.log("popep state is false")}
    </div>
  )
}

export default CartButton