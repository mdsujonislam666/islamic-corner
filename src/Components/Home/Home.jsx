import React from 'react';
import LatestProducts from '../LatestProducts/LatestProducts';
import Sliders from '../Slider/Sliders';
import ChooseUs from '../ChooseUs/ChooseUs';


const Home = () => {
    return (
        <div>
            <Sliders></Sliders>
            <LatestProducts></LatestProducts>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;