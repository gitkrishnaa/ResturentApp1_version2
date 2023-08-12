import React from 'react'
import Styles from "./Styles.module.css"
const BackDrop=()=>{
return <div>krishna</div>
}



function index(props) {
  return (
<React.Fragment>

<BackDrop/>
<div className={Styles.MainPopup_div}>

{props.child}
    
</div>

    </React.Fragment>
  )
}

export default index