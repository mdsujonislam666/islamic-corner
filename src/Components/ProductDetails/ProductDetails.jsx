import React, { useRef } from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router';

const ProductDetails = () => {
    const product = useLoaderData();
    const ratingModal = useRef(null);

    const handleRatingModal = () =>{
        ratingModal.current.showModal();
    }

    console.log(product);
    const { _id, property_name, category, description, location, property_image, price, posted_by } = product;
    return (
        <div>
            <div className='max-w-3xl mx-auto bg-blue-100'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div>
                        <figure className="p-5">
                            <img
                                src={property_image}
                                alt="Shoes"
                                className="rounded-xl w-full h-66" />
                        </figure>
                    </div>
                    <div className="card-body space-y-3">
                        <h2 className="card-title text-2xl font-bold">{property_name}</h2>
                        <p className='text-gray-600'>{description}</p>
                        <h1 className='font-bold flex items-center '>BTD: <span className='text-red-500'><FaBangladeshiTakaSign size={15} /></span><span className='text-blue-600'>{price}</span></h1>
                        <div className='flex justify-between'>
                            <h3 className='font-bold text-indigo-600'>{category}</h3>
                            <h2 className='text-lime-600'>{location}</h2>
                        </div>
                        <div className="card-actions">
                            <Link onClick={handleRatingModal} to={`/updateProduct/${_id}`} className="btn btn-primary w-full">Update Product</Link>
                        </div>
                    </div>

                </div>
                <div className='card-body items-center p-5 m-5 mb-5 bg-amber-200 rounded-xl'>
                    <h1 className='text-2xl font-bold'>Posted By</h1>
                    <div>
                        <img className='w-40 h-40 rounded-full' src={posted_by.profile_photo} alt="" />
                    </div>
                    <p className='font-bold'>Name: <span>{posted_by.name}</span></p>
                    <p className='font-bold'>Email: <span>{posted_by.email}</span></p>

                </div>

            </div>
        </div>
    );
};

export default ProductDetails;