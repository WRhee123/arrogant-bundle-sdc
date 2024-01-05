import '../../../../css/popularcarousel.css';
import {FaChevronRight, FaChevronLeft} from "react-icons/fa";

import { Tooltip } from 'react-tooltip';
import PopCard from './PopCard';


// TODO conditional rendering based on genre
// TODO wishlist star link needs proper tiitle
const PopularCarousel = ({productData}) => {

    const {
        other_popular_games: popGames, 
        genre,
    } = productData


    return (
    <>
    
        <div id='pop-carousel-section' className=' ctn'>
            <div className="pop-carousel-container">
                <h4 className='popular-title'>Popular Games Today</h4>
                {/* <div className="nav-button prev" onClick={prevImage}>{<FaChevronLeft/>}</div>
                    <div className="nav-button next" onClick={nextImage}>{<FaChevronRight/>}</div> */}

                <div className="pop-carousel ctn">
                    <PopCard popGames={popGames}/>
                </div> {/* end pop-carousel*/}
            </div> {/* end pop-carousel-container*/}
        </div> {/* end pop-carousel-section*/}

        <Tooltip id="discount-tip" place="top" >
            <div className="tip-header">
                DISCOUNT BREAKDOWN
            </div>
            <div className="tip-content">
                <div className="store-discount-percent">
                    <span className='deal'>-${popGames[4].deal}% </span>
                    STORE DISCOUNT 
                </div>
                <div className="store-discount-amount">
                    <span className='old-price'>${popGames[4].price} </span>
                    <img src="https://cdn.humblebundle.com/static/hashed/14ba8ecd2fd68f1d77c8c41f0d0f48486c30da74.svg" alt="hb arrow"/>
                    {popGames[4].deal_price}
                </div>
                
                
            </div>
        </Tooltip>
    </>

    )
}

export default PopularCarousel