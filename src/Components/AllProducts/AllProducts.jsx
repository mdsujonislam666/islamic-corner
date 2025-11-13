import React from 'react';
import { useLoaderData } from 'react-router';
import Product from '../Products/Product';


const AllProducts = () => {
    const data = useLoaderData();
    // console.log(data);
    return (

        <div>
            <h2 className='text-5xl font-bold text-center py-10'>All <span className='text-red-500'>Product</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data.map(product =>
                        <Product key={product._id} product={product}></Product>
                    )
                }
            </div>
        </div>
    );
};

export default AllProducts;