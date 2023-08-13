import React, { useState } from 'react'
import Styles from "./Styles.module.css"
 const BackDrop=(props)=>{


return <div onClick={props.onClosePopup} className={Styles.BackDrop}></div>
}



 function Index(props) {
  // console.log("ui/popup",props)

  return (
<React.Fragment>
<BackDrop onClosePopup={props.onClosePopup}/>
<div className={Styles.MainPopup_div}>
   <div className={Styles.close_popup_button}><button onClick={props.onClosePopup} >X</button></div>
   <div>{props.children}</div> 
</div>

</React.Fragment>
  )
}

export default Index