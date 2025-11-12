import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import AllProduct from '../allProduct/allProduct';

const allProductsPromise = fetch('http://localhost:4000/allProducts')
.then(res => res.json());

const AllProducts = () => {
    return (
        <div>
            <AllProduct allProductsPromise={allProductsPromise}></AllProduct>
        </div>
    );
};

export default AllProducts;