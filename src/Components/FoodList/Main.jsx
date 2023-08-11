import React from "react";
import Styles from "./Styles.module.css";
import { BsFillCartPlusFill } from "react-icons/bs";
function Main(props) {
  return (
    <div className={Styles.mainDiv}>
      <div>
        <span className={Styles.name}>{props.name} </span>
        <span className={Styles.details}>{props.details} </span>
        <span className={Styles.price}>{props.price} rs </span>
      </div>

      <div>
        <div className={Styles.cart_inputs}>
          
          <input type="text" placeholder="no." />
         
        </div>
        <div className={Styles.add_to_buttons}>
          <span>add to cart</span>
          <button>
            <BsFillCartPlusFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
