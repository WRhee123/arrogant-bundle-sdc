

import ShoppingCartContext from "./ShoppingCartContext.mjs"

const ShoppingCartProvider = ({children}) => {

    

  return (
    <ShoppingCartContext.Provider>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
