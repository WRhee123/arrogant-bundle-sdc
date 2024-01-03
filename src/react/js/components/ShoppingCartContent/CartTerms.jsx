
import { FaGift } from "react-icons/fa6";

const CartTerms = () => {
  return (
    <div id='cart-terms' >
      <p className='cart-p' >Must be logged in to purchase <span>Login</span></p>
      <p className="cart-p" > <input className="checkbox" type='checkbox'/> Subscribe to hear about more deals!</p>
      <p className="cart-p" > <input className="checkbox" type='checkbox'/> <FaGift /> This purchase is a gift.</p>
      <p className="cart-p" >By signing up, you agree to the Terms of Service and Privacy Policy. You may unsubscribe from any newsletter at any time.</p>
    </div>
  )
}

export default CartTerms
