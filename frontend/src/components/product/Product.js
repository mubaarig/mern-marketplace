import React from 'react'
import './product.css';
import Rating from '../rating/Rating';

const Product = ({ id, image, name, price, rating, numOfReviews }) => {
    const product = { rating, numOfReviews };
    return (
        <div key={id} className="card">
            <a href={`/product/${id}`}>
                <img
                    className="medium"
                    src={image}
                    alt={name}
                />
            </a>
            <div className="card-body">
                <a href={`/product/${id}`}>
                    <h2>{name}</h2>
                </a>

                <Rating product={product} />

                <div className="price">${price}</div>
            </div>
        </div>
    );
}

export default Product;