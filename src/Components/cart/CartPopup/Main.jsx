import React, { useContext, useState } from 'react'
import Styles from "./Styles.module.css"
import { Popup } from '../../../UI/index'
import { CartContext } from '../../../Store_context'

function Main(props) {
   let CartContext_value=useContext(CartContext)
   console.log(CartContext_value)
   const data_array=Object.keys(CartContext_value);
   console.log(data_array)
  return (
    <Popup onClosePopup={props.onClosePopup}> 
{data_array.map((args)=>{
  return <div>
<span>{CartContext_value[args].name} </span>
<span>{CartContext_value[args].price} </span>
<span>{CartContext_value[args].number} </span>
  </div>
})}
    </Popup>
  )
}

export default Main