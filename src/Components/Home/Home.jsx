import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import Sliders from '../Slider/Sliders';


const latestProductsPromise = fetch('http://localhost:4000/latest-products')
.then(res => res.json());

const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <LatestProducts latestProductsPromise={latestProductsPromise}></LatestProducts>
        </div>
    );
};

export default Home;