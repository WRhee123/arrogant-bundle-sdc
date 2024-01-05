// TODO nav

import '../../css/navbar.css'
import { useContext } from 'react'
import ShoppingCartContext from './ShoppingCartContext/ShoppingCartContext.mjs'


const Navbar = () => {

    

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
                    <div id='charity-cart' >cart</div>
                </div>
            </div>
        </div>
    </>

    )
}

export default Navbar