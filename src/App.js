import React, { useState } from "react";
import { Header,FoodShow } from "./Containers/index";
import banner from "./Assets/banner3.jpg";
import { CartPopup } from "./Components/cart";
function App() {
const [showPopup,setShowPopup]=useState(false)
const openCart_popup=()=>{
  setShowPopup(true)
}
const closeCart_popup=()=>{
  setShowPopup(false)
}
  return (
    <div>
      <Header onShowPopup={openCart_popup} />
    {showPopup?<CartPopup onShowPopup={openCart_popup} onClosePopup={closeCart_popup}/>:console.log("popup is closed")}
      <div>
        <img
          style={{
            width: "100vw",
            height: "200px",
            objectFit: "cover",
          }}
          src={banner}
          alt=""
        />
      </div>
      <FoodShow/>


    </div>
  );
}

export default App;
