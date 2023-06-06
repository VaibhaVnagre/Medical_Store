import React from "react";
import CartIcon from "./CartIcon";
import Classes from './CartButton.module.css'

const CartButton = () =>{
    return (
      
        <button className={Classes.button}>
        <span>
            <CartIcon className={Classes.icon}/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={Classes.badge}>0</span>
        </button>
     
    )
}
export default CartButton;