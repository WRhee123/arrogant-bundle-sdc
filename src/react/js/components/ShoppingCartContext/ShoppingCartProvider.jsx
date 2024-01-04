

import ShoppingCartContext from "./ShoppingCartContext.mjs"
import { useState } from "react"

const ShoppingCartProvider = ({children}) => {

  //state to see if the cart contains an item
  const [cartItem, setCartItem] = useState(false)

  //function to handle conditional rendering if the cart contains an item
  const handleCartItem = () => {
    setCartItem(!cartItem)
    console.log(cartItem)
  }

    

  return (
    <ShoppingCartContext.Provider 
    value={{
      cartItem, 
      setCartItem, 
      handleCartItem
      }} >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
