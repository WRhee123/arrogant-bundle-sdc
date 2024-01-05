
import { useState, useContext } from "react"
import ShoppingCartContext from "../ShoppingCartContext/ShoppingCartContext.mjs"

const CartFooter = () => {

  const {
    cartItem
  } = useContext(ShoppingCartContext)

  return (
    <div id='cart-footer' >
      <button id='purchase-btn' >{cartItem > 0 ? 'Pay with card' : 'Purchase' }</button>
      {cartItem > 0 ? (
      <>
      <button id='paypal' >Pay with PayPal</button>
      <button id='klarna' >Shop now. Pay over time with Klarna</button>
      <h4>$29.99 minimum payment</h4>
      <button id='amazon' >Pay with Amazon</button>
      <button id='alipay' >Alipay</button>
      </>) : '' } 
    </div>
  )
}

export default CartFooter
