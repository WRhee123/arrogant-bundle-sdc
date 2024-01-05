import '../../../css/popularcarousel.css';
import { FaRegStar, FaStar, FaChevronRight, FaChevronLeft} from "react-icons/fa";



// TODO conditional rendering based on genre
// TODO wishlist star link needs proper tiitle
const PopularCarousel = ({productData}) => {

    const {
        other_popular_games: popGames, 
        genre,
    } = productData

    const starClick = (e) => {
        console.log('starclicked')
    }


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
                                {/* TODO issue here, platforms not showing up */}
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
                            
                            <div className="card-discounts">
                                {/* if deal */}
                            </div>
                            <div className="card-price"></div>
                        </div>


                    </div>
                    <div className="carouselCard ctn">
                        
                    </div>
                </div>
            </div>

        </div>
    </>

    )
}

export default PopularCarousel