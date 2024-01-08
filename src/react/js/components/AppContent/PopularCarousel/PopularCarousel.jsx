import '../../../../css/popularcarousel.css';
import {FaChevronRight, FaChevronLeft} from "react-icons/fa";
import { useState, useRef } from 'react';
import PopCard from './PopCard';


// TODO conditional rendering based on genre
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
    </>

    )
}

export default PopularCarousel