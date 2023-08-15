import React, { useContext, useState } from 'react'
import Styles from "./Styles.module.css"
import { Popup } from "../../UI/index"
// import { CartContext } from '../../../Store_context'
// import ItemList from "./listRender"
function AboutDeveloper(props) {
  

   
  return (
<Popup onClosePopup={props.onClosePopup}> 
<div>
<div><span>Name</span> <span>Krishna kumar</span></div>
{/* <div><span>7050037790</span></div> */}
<div> <span><a href="https://www.linkedin.com/in/krishna-kumar-b4208b1a9/">Linkedin</a></span></div>
<div> <span><a href="https://github.com/gitkrishnaa/ResturentApp1_version2">Github</a></span></div>
<div> <span><a href="https://aboutkrishna.netlify.app/">My Portfolio website</a></span></div>
</div>
</Popup>
  )
}

export default AboutDeveloper