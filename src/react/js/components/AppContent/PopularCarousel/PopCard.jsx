
import '../../../../css/popularcarousel.css';
import { useRef } from 'react'
import { FaRegStar, FaStar} from "react-icons/fa";

const PopCard = ({popGames, cardRef}) => {

    const priceRef = useRef(null)

    const starClick = (e) => {
        console.log('starclicked')
    }

    return (
        <div className="carouselCard"
            ref={cardRef}>
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
    )
}

export default PopCard

