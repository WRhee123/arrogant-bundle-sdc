import '../../../../css/popularcarousel.css';
import {FaChevronRight, FaChevronLeft} from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import { useState, useRef } from 'react';
import PopCard from './PopCard';


// TODO conditional rendering based on genre
// TODO wishlist star link needs proper tiitle
const PopularCarousel = ({productData}) => {

    const [currentIndex, setCurrentIndex] = useState(0); //carousel index
    const cardRef = useRef(null);

    const {
        other_popular_games: popGames, 
        genre,
    } = productData

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % popGames.length);
    };
    
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + popGames.length) % popGames.length);
    };

    
    const cardWidth = cardRef.current ? cardRef.current.offsetWidth : 0;
    const gapWidth = 12; 


    return (
    <>
        <div id='pop-carousel-section' className=' ctn'>
            <div className="pop-nav-box">
                <div className="pop-nav-btn pop-prev unscrollable" onClick={prevImage}>{<FaChevronLeft/>}</div>
                <div className="pop-nav-btn pop-next" onClick={nextImage}>{<FaChevronRight/>}</div>
            </div>
            <div className="pop-carousel-container">
                <h4 className='popular-title'>Popular Games Today</h4>
                <div className="pop-carousel-wrapper"
                    style={{ transform: `translateX(-${currentIndex * (cardWidth + gapWidth)}px)` }}>
                    <PopCard popGames={popGames} cardRef={cardRef}/>
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