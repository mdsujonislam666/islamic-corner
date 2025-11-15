import React from 'react';
import { FaStar } from 'react-icons/fa6';

const Rating = ({ product }) => {
    // const { posted_by, rating, productName, index } = product;
    if (!Array.isArray(product)) {
        return <h2 className="text-center text-red-500">Product is not an array</h2>;
    }
    return (

        product.map((item) => {
            return (
                
                <tr className='bg-sky-500/100 my-5'>
                    <th>
                        <FaStar />
                    </th>
                    <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                        src={item.posted_by.profile_photo}
                                        alt="Avatar Tailwind CSS Component" />
                                </div>
                            </div>
                            <div>
                                <div className="font-bold">{item.posted_by.name}</div>
                                {/* <div className="text-sm opacity-50">{item.posted_by.email}</div> */}
                            </div>

                        </div>
                    </td>
                    <td>
                        <div><h1>{item.productName}</h1></div>
                    </td>
                    <td>{item.rating}-Star</td>
                    <th>
                        <div className="btn btn-ghost btn-xs">{item.posted_date}</div>
                    </th>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={item.property_image}
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{item.category}</div>
                        </div>

                    </div>
                    <th>
                        <div className="btn btn-primary btn-xs">Delete</div>
                    </th>
                </tr>
                );
        })
    );
};

export default Rating;