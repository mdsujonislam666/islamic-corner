import React, { use } from 'react';
import Product from '../Products/Product';
import { Link } from 'react-router';

const LatestProducts = ({ latestProductsPromise }) => {
    const products = use(latestProductsPromise);
    console.log(products);
    return (
        <div>
            <div className='py-10 space-y-5'>
                <h2 className='text-5xl font-bold text-center'>Recent <span className='text-red-600'>Product</span></h2>
                <p className='text-center font-bold text-2xl'>Follow the Sunnah in daily life — let it begin with a beautiful Islamic product</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product =>
                        <Product key={product._id} product={product}></Product>
                    )
                }
            </div>
            <div className='items-center text-center py-10'>
                <Link to="/allProducts"><button className='btn btn-primary w-40'>View All</button></Link>
            </div>
        </div>

    );
};

export default LatestProducts;