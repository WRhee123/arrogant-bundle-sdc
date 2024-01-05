

import ShoppingCartContext from "./ShoppingCartContext.mjs"
import { useState } from "react"

const ShoppingCartProvider = ({children}) => {

  //state to see if the cart contains an item
  const [cartItem, setCartItem] = useState(0)
  const [cartDisplay, setCartDisplay] = useState(false)

  //function to handle conditional rendering if the cart contains an item
  const handleCartItem = () => {
    if(cartItem === 1) {
      console.log('Item already in cart')
      return;
    }

    setCartItem(cartItem + 1)
    console.log('Item added to cart')
  }

  const handleCartDisplay = () => {
    setCartDisplay(!cartDisplay)
    !cartDisplay ? console.log('Displaying Cart') : console.log('Cart Closed');
  }


    

  return (
    <ShoppingCartContext.Provider 
    value={{
      cartItem, 
      setCartItem, 
      handleCartItem,
      cartDisplay,
      handleCartDisplay
      }} >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
