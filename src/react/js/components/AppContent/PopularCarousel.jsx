import '../../../css/popularcarousel.css';
import { FaRegStar, FaStar, FaChevronRight, FaChevronLeft} from "react-icons/fa";



// TODO conditional rendering based on genre
const PopularCarousel = ({productData}) => {

    const {
        other_popular_games: popGames, 
        genre,
    } = productData

    const starClick = () => {
        console.log('starclicked')
    }

    return (
    <>
        <div className='pop-carousel-section ctn'>
            <div className="pop-carousel-container">
                <h4 className='popular-title'>Popular Games Today</h4>
                {/* <div className="nav-button prev" onClick={prevImage}>{<FaChevronLeft/>}</div>
                    <div className="nav-button next" onClick={nextImage}>{<FaChevronRight/>}</div> */}

                <div className="pop-carousel ctn">
                    
                    <div className="carouselCard ctn">
                        <a href={`${popGames[0].link}`}>
                            <img 
                                src={`https://arrogant-bundle.onrender.com${popGames[0].thumbnail_link}`} 
                                alt={`https://arrogant-bundle.onrender.com${popGames[0].title}`} 
                                className='card-img'
                            />
                            <div className="title-box"> 
                                <p className='card-title'>{popGames[0].title}</p>
                                <div onClick={()=>starClick()} className="starholder">
                                    <FaRegStar className='star starOne'/>
                                    <FaStar className='star starTwo'/>
                                </div>
                            </div>
                        </a>
                        <div className="card-footer">

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