

import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";

const CartHeader = () => {

  return (
    <div id='cart-header' >
      <h1 id='cart-h1' > <IoCartOutline /> Shopping Cart</h1>
      <IoCloseCircleSharp id='close-circle' />
    </div>
  )
}

export default CartHeader
