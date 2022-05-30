import React from 'react';
import data from './../../data';
import Product from './../product/Product';



const Products = () => {
    return (
        <div className="row center">
            {data.products.map((product) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
}

export default Products;