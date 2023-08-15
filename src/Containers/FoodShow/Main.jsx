import React from 'react'
import { FoodList } from '../../Components/index';
//iporting data
import foodData from "../../Data/MealsList.json"
import Styles from "./Styles.module.css"


function Main() {
   
  return (
    <div className={Styles.MainDiv}>
        <div className={Styles.Sub_div}>
{foodData.map((e,n)=>{
    
return <FoodList key={"key"+n} id={n} name={e.name} details={e.details} price={e.price}/>


})}
</div>
    </div>
  )
}

export default Main