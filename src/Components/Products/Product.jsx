import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { Link } from 'react-router';

const Product = ({ product }) => {
    const { _id, property_name, category, description, location, property_image, price } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="p-5">
                    <img
                        src={property_image}
                        alt="Shoes"
                        className="rounded-xl w-full h-40 lg:h-66" />
                </figure>
                <div className="card-body space-y-3">
                    <h2 className="card-title text-2xl font-bold">{property_name}</h2>
                    <p className='text-gray-600'>{description}</p>
                    <h1 className='font-bold flex items-center '>BTD: <span className='text-red-500'><FaBangladeshiTakaSign size={15} /></span><span className='text-blue-600'>{price}</span></h1>
                    <div className='flex justify-between'>
                        <h3 className='font-bold cursor-pointer text-indigo-600 px-5 py-1 bg-amber-300 rounded-xl'>{category}</h3>
                        <h2 className='text-lime-600'>{location}</h2>
                    </div>
                    <div className="card-actions">
                        <Link to={`/productDetails/${_id}`} className="btn btn-primary w-full">View Details</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Product;