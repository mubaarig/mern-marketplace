import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import Loading from '../components/Loading';
import MessageBox from '../components/MessageBox';

export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetData = async () => {
            try {
                // Show Loading first
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);

            } catch (err) {
                setError(err.message)
                setLoading(false);
            }
        };
        fetData();
    }, []);

    return (
        <div>
            {loading ? (<Loading />) : error ? (<MessageBox>{error}</MessageBox>) 
            : 
            (<div className="row center">
                {products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))}
            </div>)
            }
           
        </div>
    );
}
