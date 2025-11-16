import React from 'react';
import choose from "../../assets/choose.png";
import services from "../../assets/services (1).png";
import customer from "../../assets/customer.png";

const ChooseUs = () => {
    return (
        <div>
            <div>
                <div className='py-10 space-y-5'>
                    <h2 className='text-5xl font-bold text-center'>Why <span className='text-red-600'>Choose-Us</span></h2>
                    <p className='text-center font-bold text-2xl'>Your smile is our real achievement — and we work every day to reach that goal.</p>
                </div>
            </div>
            <div className='bg-orange-200 p-5 gap-5 flex lg:flex-row flex-col justify-around '>
                <img className='lg:w-[400px] rounded-xl lg:h-[400px]' src={choose} alt="" />
                <div className='grid lg:grid-cols-2 grid-cols-1'>
                    <div className='mx-auto w-[250px] h-[200px] text-center bg-amber-200 p-5 lg:border-b-2 lg:border-r-2 border-r-gray-700 border-b-gray-700'>
                        <img className='w-24 mx-auto' src={services} alt="" />
                        <ul className='font-bold'>
                            <li>Home Delivery</li>
                            <li>Live chat support</li>
                            <li>Pickup point</li>
                            <li>Return & refund policy</li>
                        </ul>
                    </div>
                    <div className='mx-auto lg:w-[250px] lg:h-[200px] text-center bg-orange-200 p-5'>

                    </div>
                    <div className='mx-auto lg:w-[250px] lg:h-[200px] text-center bg-orange-200 p-5'>
                    </div>
                    <div className='mx-auto w-[250px] h-[200px] text-center bg-amber-200 p-5 lg:border-t-2 lg:border-l-2 border-l-gray-700 border-t-gray-700'>
                        <img className='w-30 mx-auto' src={customer} alt="" />
                        <ul className='font-bold'>
                            <li>24/7 hours service</li>
                            <li>Handling Complaints</li>
                            <li>Giving Order Updates</li>
                            <li>Solving Customer Problems</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;