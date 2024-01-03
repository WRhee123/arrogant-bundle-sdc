import HeroCarousel from "./HeroCarousel";

const Hero = ({productData}) => {

    const {title, 
        thumbnail_link: thumbs, 
        price, 
        humble_choice_savings: savings,
        gameplay_image_links: images,
    } = productData;

    console.log({images})

    return (
    <>
        <div id='hero' className="ctn">
            <div id="hero-content">
                <div id='product-hero' className='ctn'>
                    <div className="product-title">
                        <h2>{title}</h2>
                    </div>
                    <div className="main-carousel-img">
                        <img src={`https://arrogant-bundle.onrender.com/${images[0]}`}/>
                    </div>
                    <div className="shop-section">
                        <img src={`https://arrogant-bundle.onrender.com/${thumbs}`} alt={title} />
                    </div>
                </div>
                <div id='hero-carousel' className='ctn'>
                    {/* <HeroCarousel/> */}
                </div>
            </div>
        </div>
    </>

    )
}

export default Hero