import '../../css/cart.css';

import ShoppingCart from "./ShoppingCartContent/ShoppingCart"
import ShoppingCartContext from './ShoppingCartContext/ShoppingCartContext.mjs';
import { useContext } from 'react';

const CurtainModal = () => {

  return (
    <div id ='curtain-modal'>
        <ShoppingCart/>
    </div>
  )
}

export default CurtainModal



