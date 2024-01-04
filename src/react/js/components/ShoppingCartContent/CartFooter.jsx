
import { useState } from "react"

const CartFooter = () => {

  const [item, setItem] = useState(true);

  const handleGame = () => {
    setItem(false)
  }

  return (
    <div id='cart-footer' >
      <button onClick={handleGame} id='purchase-btn' >Purchase</button>{item ? ( <><button id='paypal' >Pay with PayPal</button>
      <button id='klarna' >Shop now. Pay over time with Klarna</button>
      <h4>$29.99 minimum payment</h4>
      <button id='amazon' >Pay with Amazon</button>
      <button id='aliplay' >Alipay</button> </>) : (<h1>empty</h1>) }
      
    </div>
  )
}

export default CartFooter
