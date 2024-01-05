// TODO nav

import '../../css/navbar.css'
import { useContext } from 'react'
import ShoppingCartContext from './ShoppingCartContext/ShoppingCartContext.mjs'
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";



const Navbar = () => {

    const {
        cartItem,
        handleCartDisplay
    } = useContext(ShoppingCartContext)

    return (
    <>
        <div className="nav ctn">
            <div className="nav-links">
                <div id='humble-links' >
                    <small>site logo in progress</small>
                    <h3>Bundles</h3>
                    <h3>Store</h3>
                    <h3>Choice</h3>
                    <h3>About</h3>
                </div>

                <div id='search-signUp' >
                    <input type="search" placeholder='Search'/>
                    <h3>Sign Up</h3>
                    <h3>Log In</h3>
                </div>
            </div>
            <hr/>
            <div className="charity-nav">
                <div id='charity-links' >
                    <h3>Choose Charity</h3>
                    <h3>Earn Wallet Credit</h3>
                </div>
                <div id='wallet-cart'>
                    <>
                        <IoMdWallet className='nav-icons' id='wallet-icon' />
                        <h3>$0.00</h3>
                    </>
                    <>
                        <FaStar className='nav-icons' id='star-icon'/>
                        <h3>0</h3>
                    </>
                    <>
                        <FaShoppingCart className='nav-icons' id='cart-icon' onClick={handleCartDisplay} />
                        <h3>{cartItem}</h3>
                    </>
                </div>
            </div>
        </div>
    </>

    )
}

export default Navbar