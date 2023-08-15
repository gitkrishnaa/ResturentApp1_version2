import React, { useContext, useState } from 'react'
import Styles from "./Styles.module.css"
import { Popup } from '../../../UI/index'
import { CartContext } from '../../../Store_context'
import ItemList from "./listRender"
function Main(props) {
   let CartContext_value=useContext(CartContext).cartState;
   const cartTotal=useContext(CartContext).cartTotal;
   console.log(CartContext_value)
   const data_array=Object.keys(CartContext_value);
   console.log(data_array)



   
  return (
    <Popup onClosePopup={props.onClosePopup}> 
{data_array.map((e,n)=>{
  let number=CartContext_value[e].n
  let render=number>0?true:false;
  
  return render?<ItemList key={"key"+n} id={n}  name={CartContext_value[e].name} number={CartContext_value[e].n}  price={CartContext_value[e].price}/>
  :false

})}
<div>{cartTotal}</div>
    </Popup>
  )
}

export default Main