import React from 'react'
import {CartButton} from "../cart/index";
import Styles from "./Style.module.css"
function Main(props) {
  return (
    <div className={Styles.MainDiv} >
        
<div className={Styles.MainTitle}><span>FoodMeals</span></div>
<div><CartButton totalCartNumber={0} onShowPopup={props.onShowPopup} /></div>
{/* <div><CartButton totalCartNumber={0} onShowPopup={props.onShowPopup} /></div> */}

    </div>
  )
}

export default Main