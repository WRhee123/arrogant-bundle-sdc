

import ShoppingCartContext from "./ShoppingCartContext.mjs"
import { useState } from "react"

const ShoppingCartProvider = ({children}) => {

  //state to see if the cart contains an item
  const [cartItem, setCartItem] = useState(false)
  const [cartDisplay, setCartDisplay] = useState(false)

  //function to handle conditional rendering if the cart contains an item
  const handleCartItem = () => {
    setCartItem(!cartItem)
    console.log(cartItem)
  }

  const handleCartDisplay = () => {
    setCartDisplay(!cartDisplay)
    console.log('working')
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
