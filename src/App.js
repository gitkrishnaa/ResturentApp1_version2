import React from 'react'
import {Header} from "./Containers/index"
import banner from "./Assets/banner3.jpg"
function App() {
  return (
    <div>
      <Header/>
      <div>
        
    <img style={{
  width: "100vw",
  height: "200px",
  objectFit: "cover"}} src={banner} alt=""  /></div>
      </div>

  )
}

export default App