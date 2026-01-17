import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import Sliders from '../Slider/Sliders';
import ChooseUs from '../ChooseUs/ChooseUs';
import CustomerReview from '../CustomerReview/CustomerReview'


const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <LatestProducts></LatestProducts>
            <ChooseUs></ChooseUs>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;