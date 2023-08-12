import React, { useState } from 'react'
import Styles from "./Styles.module.css"
const BackDrop=()=>{


return <div className={Styles.BackDrop}></div>
}

const MostTopDiv=()=>{
    return <div>  
    </div>
}

function Index(props) {
  
const [close,setClose]=useState(props.popup_state_true)
const backDropClose=()=>{
    setClose(!close)
}
const popup_opner=()=>{
    if(close==false)
    setClose(!close)
}
  return (
<React.Fragment>
    {close?<div>
<div onClick={backDropClose} className={Styles.BackDrop}></div>
<div className={Styles.MainPopup_div}>{props.child}</div>
</div>:console.log("popup window is closed")}
{console.log(props)}
    </React.Fragment>
  )
}

export default Index