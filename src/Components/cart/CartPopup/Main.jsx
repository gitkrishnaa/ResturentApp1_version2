import React, { useState } from 'react'
import Styles from "./Styles.module.css"
import { Popup } from '../../../UI/index'
function Main(props) {
   
  return (
    <Popup onClosePopup={props.onClosePopup}> 
<div>item xyz order</div>
    </Popup>
  )
}

export default Main