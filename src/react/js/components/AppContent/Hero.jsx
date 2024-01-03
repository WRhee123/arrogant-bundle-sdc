import HeroCarousel from "./HeroCarousel";

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
        <div id='hero' className="">
            <div id="hero-content">
                <div id='product-hero' className='ctn'>
                    <div className="product-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="main-img">
                        <img src={`https://arrogant-bundle.onrender.com/${images[0]}`} className="main-carousel-img"/>
                    </div>
                    <div id='mini-product'>
                        <div className="thumbnail">
                            <img src={`https://arrogant-bundle.onrender.com/${thumbs}`} alt={title} />
                        </div>
                        <div className="itemlogo">
                            <img src={`https://arrogant-bundle.onrender.com${platImg[0].image_link}`} alt="" />
                        </div>
                        <div className="price">
                            {price}
                        </div>
                        <div className="savings">
                            {`SAVE UP TO $${(savings).toFixed(2)} MORE WITH HUMBLE CHOICE`}
                        </div>
                        <button>ADD TO CART</button>
                        <button>ADD TO WISHLIST</button>
                    </div>
                </div>
                <div id='hero-carousel' className='ctn'>
                    {/* <HeroCarousel/> */}
                </div>
            </div> {/* end hero-content */}
        </div>
    </>

    )
}

export default Hero