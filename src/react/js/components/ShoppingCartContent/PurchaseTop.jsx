

import { IoCloseCircleSharp } from "react-icons/io5";
import { useState, useContext } from "react";
import ShoppingCartContext from "../ShoppingCartContext/ShoppingCartContext.mjs";

const PurchaseTop = () => {
  const {
    handleCartItem
  } = useContext(ShoppingCartContext)

      return (
        <div id='purchase-top'>
              <div id='purchase-topA'>
                <h1><IoCloseCircleSharp onClick={handleCartItem}/>Super Mario RPG</h1>
                <h1>$59.99</h1>
              </div>
              <div id='purchase-topB'>
                <p>
                  Purchase is non-refundable. See full terms here <br/>
                  Purchases require a free US or Canada Nintendo eShop Account.<br/>
                  Not eligible for Humble Rewards or charity contribution
                </p>
              </div>
        </div>
      );
      
}

export default PurchaseTop
