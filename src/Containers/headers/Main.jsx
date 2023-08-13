import React from 'react'
import Styles from "./Main.module.css";
import {Navbar} from "../../Components/index"
function Main(props) {
  return (
    <div>
<Navbar onShowPopup={props.onShowPopup}/>



    </div>
  )
}

export default Main