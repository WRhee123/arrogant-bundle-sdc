import React, { useState } from 'react';
import '../../../css/herocarousel.css'; // Assuming the CSS is in this file
import Slider from 'infinite-react-carousel';

// see: https://g787543.github.io/infinite-react-carousel/ for infinite library: https://github.com/g787543/infinite-react-carousel

const HeroCarousel = ({images}) => {
    const items = images;
    

    return (
        <div className="carousel-container">
                {items.map((image, index) => (
                    <div key={image} className="carousel-item">
                        <img src={`https://arrogant-bundle.onrender.com${image}`} alt={`Slide ${index}`} />
                    </div>
                ))}
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default HeroCarousel;