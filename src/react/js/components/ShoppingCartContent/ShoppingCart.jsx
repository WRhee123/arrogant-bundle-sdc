

import CartHeader from "./CartHeader"
import CartHolder from "./CartHolder"
import CartCheckout from "./CartCheckout"
import CartTerms from "./CartTerms"
import CartFooter from "./CartFooter"

const ShoppingCart = () => {
  return (
    <div id='cart' >
      <CartHeader/>
      <CartHolder/>
      <CartCheckout/>
      <CartTerms/>
      <CartFooter/>
    </div>
  )
}

export default ShoppingCart
