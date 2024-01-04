

import { IoCloseCircleSharp } from "react-icons/io5";
import { useState } from "react";

const PurchaseTop = () => {
    const [cart, setCart] = useState(true);

    const handleCart = () => {
        setCart(!cart)
        console.log(cart)
      }

      return (
        <div onClick={handleCart} id='purchase-top'>
          {cart ? (
            <>
              <div id='purchase-topA'>
                <h1>Super Mario RPG</h1>
                <h1>$59.99</h1>
              </div>
              <div id='purchase-topB'>
                <p>
                  Purchase is non-refundable. See full terms here <br/>
                  Purchases require a free US or Canada Nintendo eShop Account.<br/>
                  Not eligible for Humble Rewards or charity contribution
                </p>
              </div>
            </>
          ) : (
            <h1 id='empty-cart' >Your cart is empty</h1>
          )}
        </div>
      );
      
}

export default PurchaseTop
