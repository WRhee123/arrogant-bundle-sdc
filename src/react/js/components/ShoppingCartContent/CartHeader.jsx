

import { useState, useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";
import ShoppingCartContext from "../ShoppingCartContext/ShoppingCartContext.mjs";

const CartHeader = () => {

const {
  handleCartItem
} = useContext(ShoppingCartContext)

  return (
    <div id='cart-header' >
      <h1 id='cart-h1' > <IoCartOutline /> Shopping Cart</h1>
      <IoCloseCircleSharp onClick={handleCartItem} id='close-circle' />
    </div>
  )
}

export default CartHeader
