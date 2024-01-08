
import '../../../../css/popularcarousel.css';
import { useRef } from 'react'
import { FaRegStar, FaStar} from "react-icons/fa";
import PopCardTip from './PopCardTip';

const PopCard = ({popGames, cardRef}) => {

    const priceRef = useRef(null)

    const starClick = (e) => {
        console.log('starclicked')
    }

    return (
        popGames.map((game,index) => (
            <div className="carouselCard"
                ref={cardRef}
                key={game.title+index+'pop'}>
                <a target='_blank' rel="noopener noreferrer" href={`${game.link}`}>
                    <img 
                        className='card-img'
                        src={`https://arrogant-bundle.onrender.com${game.thumbnail_link}`} 
                        alt={`https://arrogant-bundle.onrender.com${game.title}`} 
                        
                    />
                    <div className="title-box"> 
                        <p className='card-title'>{game.title}</p>
                        <a target='_blank'
                            href={`https://www.humblebundle.com/login?goto=/store/${game.title}?action=wishlist`}
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
                            {game.platform_images.map((image, index) => (
                                <img src={`https://arrogant-bundle.onrender.com${image}`} 
                                key={image+index+'plat'} 
                                />
                            ))}
                        </div>

                        <div className='verticalborder'></div>

                        <div className='card-system-os'>
                            {game.operating_system_images.map((image,index) => (
                                    <img src={`https://arrogant-bundle.onrender.com${image}`} 
                                    key={image+index+'os'} 
                                    />
                            ))}
                        </div>
                    </div>
                    
                    <div className="card-price-ctn">
                        {game.deal ? (
                            <>
                            <div className='pop-discount-ctn' 
                                ref={priceRef}
                                data-tooltip-id="discount-tip"
                            >
                                <p>-{game.deal}%</p>
                            </div>
                            <div className="pop-price-deal pop-hover">${game.deal_price}</div>
                            <PopCardTip game={game}/>
                            </>
                            
                        ) : (
                            <>
                            <div className="pop-price pop-hover">${game.price}</div>
                            </>
                        )}
                        
                    </div>
                </div>
        </div> // end carousel card
        ))  // end game map fx

    )
}

export default PopCard

