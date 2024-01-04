import { useState, useRef} from 'react';
import '../../../css/herocarousel.css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const HeroCarousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const imageRef = useRef(null);
  
    const handleClick = (index) => {
      setCurrentIndex(index);
    };
  
    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
  
    const imageWidth = imageRef.current ? imageRef.current.offsetWidth : 0;
  
    return (
        <>
            <div className='carousel-box'>
                <div className="nav-button prev" onClick={prevImage}>{<FaChevronLeft/>}</div>
                <div className="nav-button next" onClick={nextImage}>{<FaChevronRight/>}</div>
                <div className="carousel-container">
                    <div
                    className="image-wrapper"
                    style={{ transform: `translateX(-${currentIndex * imageWidth}px)` }}
                    >
                    {images.map((image, index) => (
                        <img
                        key={index}
                        className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
                        src={`https://arrogant-bundle.onrender.com${image}`}
                        alt={`Image ${index + 1}`}
                        onClick={() => handleClick(index)}
                        ref={index === 0 ? imageRef : null}
                        />
                    ))}
                    </div>
                </div>
            </div>
        </>
    
    );
};

export default HeroCarousel;