import React from 'react';
import './rating.css';


const Rating = ({ product }) => {
    const { rating, numOfReviews } = product;
    return (
        <div className="rating">
            <span>
                <i
                    className={
                        rating >= 1 ? 'fa fa-star' : rating >= 0.5 ? 'fa fa-star-half' : 'fa fa-star-o'
                    }
                ></i>
            </span>
            <span>
                <i
                    className={
                        rating >= 2 ? 'fa fa-star' : rating >= 1.5 ? 'fa fa-star-half' : 'fa fa-star-0'
                    }
                ></i>
            </span>
            <span>
                <i
                    className={
                        rating >= 3 ? 'fa fa-star' : rating >= 2.5 ? 'fa fa-star-half' : 'fa fa-star-o'
                    }
                ></i>
            </span>
            <span>
                <i
                    className={
                        rating >= 4 ? 'fa fa-star' : rating >= 3.5 ? 'fa fa-star-half' : 'fa fa-star-o'
                    }
                ></i>
            </span>
            <span>
                <i
                    className={
                        rating >= 4 ? 'fa fa-star' : rating >= 3.5 ? 'fa fa-star-half-o' : 'fa fa-star-0'
                    }
                ></i>
            </span>
            <span className='reviews'>{numOfReviews + ' reviews'}</span>
        </div>
    )
}

export default Rating;