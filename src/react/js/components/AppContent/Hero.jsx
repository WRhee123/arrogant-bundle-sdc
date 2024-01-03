import { FaShoppingCart } from "react-icons/fa";
import { TbStarFilled } from "react-icons/tb";
import HeroCarousel from './HeroCarousel';

const Hero = ({productData}) => {

    const {title, 
        thumbnail_link: thumbs, 
        price, 
        humble_choice_savings: savings,
        gameplay_image_links: images,
        platforms: platImg,
    } = productData;

    // console.log({images})

    return (
    <>
        <div id='hero'>
            <div id="hero-content">
                <div className="product-title">
                        <h2>{title}</h2>
                </div>
                <div id='product-hero'>
                    <div className="main-img">
                        <img src={`https://arrogant-bundle.onrender.com/${images[0]}`} className="main-carousel-img"/>
                    </div>
                    <div id='mini-product'>
                        <div className='thumbnail-ctn'>
                            <img src={`https://arrogant-bundle.onrender.com/${thumbs}`} alt={title} className="thumbnail" />
                        </div>
                        
                        <div className="product-showcase">
                            <div className="itemlogo-ctn">
                                <img src={`https://arrogant-bundle.onrender.com${platImg[0].image_link}`} className="itemlogo" />
                            </div>
                            <div className="price">
                                ${price}
                            </div>
                            <div className="savings">
                                SAVE UP TO <span className="humble-green">${(savings).toFixed(2)} </span>
                                MORE WITH <span className="humble-gold">HUMBLE CHOICE</span>
                            </div>
                            <div id='checkoutBtn'><span><FaShoppingCart/> </span>CHECKOUT</div>
                            <div id='wishListBtn'><span><TbStarFilled/> </span>ADD TO WISHLIST</div>
                        </div>
                        
                    </div>
                </div>
                <div id='hero-carousel' className='ctn'>
                    <HeroCarousel/>
                </div>
            </div> {/* end hero-content */}
        </div>
    </>

    )
}

export default Hero