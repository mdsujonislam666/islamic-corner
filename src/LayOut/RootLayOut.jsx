import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const RootLayOut = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayOut;