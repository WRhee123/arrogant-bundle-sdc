import '../../../css/popularcarousel.css';
import { FaRegStar, FaStar, FaChevronRight, FaChevronLeft} from "react-icons/fa";
import { useRef } from 'react'
import { Tooltip } from 'react-tooltip';



// TODO conditional rendering based on genre
// TODO wishlist star link needs proper tiitle
const PopularCarousel = ({productData}) => {

    const {
        other_popular_games: popGames, 
        genre,
    } = productData

    const priceRef = useRef(null)

    const starClick = (e) => {
        console.log('starclicked')
    }

    console.log(priceRef.current)

    return (
    <>
    
        <div id='pop-carousel-section' className=' ctn'>
            <div className="pop-carousel-container">
                <h4 className='popular-title'>Popular Games Today</h4>
                {/* <div className="nav-button prev" onClick={prevImage}>{<FaChevronLeft/>}</div>
                    <div className="nav-button next" onClick={nextImage}>{<FaChevronRight/>}</div> */}

                <div className="pop-carousel ctn">
                    
                    <div className="carouselCard ctn">
                        <a target='_blank' rel="noopener noreferrer" href={`${popGames[0].link}`}>
                            <img 
                                src={`https://arrogant-bundle.onrender.com${popGames[0].thumbnail_link}`} 
                                alt={`https://arrogant-bundle.onrender.com${popGames[0].title}`} 
                                className='card-img'
                            />
                            <div className="title-box"> 
                                <p className='card-title'>{popGames[0].title}</p>
                                <a target='_blank'
                                    href={`https://www.humblebundle.com/login?goto=/store/${popGames[0].title}?action=wishlist`}
                                    rel="noopener noreferrer"  
                                    onClick={()=>starClick()} className="starholder">
                                    <FaRegStar className='star starOne'/>
                                    <FaStar className='star starTwo'/>
                                </a>
                            </div>
                        </a>

                        <div className="card-footer">
                            <div className="card-systems-box">
                                <div className="card-system-platforms">
                                    {popGames[0].platform_images.map((image, index) => (
                                        <img src={`https://arrogant-bundle.onrender.com${image}`} 
                                        key={image+index+'plat'} 
                                        />
                                    ))}
                                </div>

                                <div className='verticalborder'></div>

                                <div className='card-system-os'>
                                    {popGames[0].operating_system_images.map((image,index) => (
                                            <img src={`https://arrogant-bundle.onrender.com${image}`} 
                                            key={image+index+'os'} 
                                            />
                                    ))}
                                </div>
                                
                            </div>
                            
                            <div className="card-price-ctn">
                                <div className='pop-discount' 
                                ref={priceRef}
                                data-tooltip-id="discount-tip"
                                >
                                    <p>-{popGames[4].deal}%</p>
                                    
                                </div>
                                <div className="pop-price">${popGames[4].deal_price}</div>
                            </div>
                        </div>


                    </div>
                    <div className="carouselCard ctn">
                        
                    </div>
                </div>
            </div>

        </div>

        <Tooltip id="discount-tip" place="top" >
            <div className="tip-header">
                DISCOUNT BREAKDOWN
            </div>
            <div className="tip-content">
                <div className="store-dscount-percent">
                    <span className='deal'>-${popGames[4].deal}%</span>
                    STORE DISCOUNT 
                </div>
                <div className="store-discount-amount">
                    <span className='old-price'>${popGames[4].price}</span>
                    <img src="https://cdn.humblebundle.com/static/hashed/14ba8ecd2fd68f1d77c8c41f0d0f48486c30da74.svg" alt="hb arrow"/>
                    {popGames[4].deal_price}
                </div>
                
                
            </div>
        </Tooltip>
    </>

    )
}

export default PopularCarousel