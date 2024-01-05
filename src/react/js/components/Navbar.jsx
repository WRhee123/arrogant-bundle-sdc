// TODO nav

import '../../css/navbar.css'
import { useContext } from 'react'
import ShoppingCartContext from './ShoppingCartContext/ShoppingCartContext.mjs'
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";



const Navbar = () => {

    const {
        handleCartDisplay
    } = useContext(ShoppingCartContext)

    return (
    <>
        <div className="nav ctn">
            <div className="nav-links">
                <div id='humble-links' >
                    <h1>Humble</h1>
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
                    <IoMdWallet className='nav-icons' />
                    <FaStar className='nav-icons'/>
                    <FaShoppingCart className='nav-icons' onClick={handleCartDisplay} />
                </div>
            </div>
        </div>
    </>

    )
}

export default Navbar