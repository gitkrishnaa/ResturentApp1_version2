import React, { useState } from 'react'
import Styles from "./Styles.module.css"
 const BackDrop=(props)=>{


return <div onClick={props.ClickBackDrop_to_Close} className={Styles.BackDrop}></div>
}



 function Index(props) {
  console.log("ui/popup",props)

  return (
<React.Fragment>
<BackDrop/>
<div className={Styles.MainPopup_div}>
   <div><button onClick={props.close_popup_btn}>X</button></div>
   <div>{props.children}</div> 
</div>

</React.Fragment>
  )
}

export default Index