import React from 'react'
import Styles from "./Styles.module.css"

function CartButton(props) {
  return (
    <div className={Styles.CartButton1}>
<button>{`Your Cart ${props.totalCartNumber}`}</button>


    </div>
  )
}

export default CartButton