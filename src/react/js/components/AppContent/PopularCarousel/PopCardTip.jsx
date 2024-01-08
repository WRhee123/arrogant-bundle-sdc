import '../../../../css/popularcarousel.css';
import { Tooltip } from 'react-tooltip';

const PopCardTip = ({game}) => {
    
    return (
        <Tooltip id="discount-tip" place="top" >
        <div className="tip-header">
            DISCOUNT BREAKDOWN
        </div>
        <div className="tip-content">
            <div className="store-discount-percent">
                <span className='deal'>-${game.deal}% </span>
                STORE DISCOUNT 
            </div>
            <div className="store-discount-amount">
                <span className='old-price'>${game.price} </span>
                <img src="https://cdn.humblebundle.com/static/hashed/14ba8ecd2fd68f1d77c8c41f0d0f48486c30da74.svg" alt="hb arrow"/>
                {game.deal_price}
            </div>
            
            
        </div>
    </Tooltip>
    )
}

export default PopCardTip