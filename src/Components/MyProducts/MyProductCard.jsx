import React from 'react';
import { FaStar } from 'react-icons/fa6';

const MyProductCard = ({ product }) => {
    // const { posted_by, rating, productName, index } = product;
    if (!Array.isArray(product)) {
        return <h2 className="text-center text-red-500">Product is not an array</h2>;
    }
    return (

        product.map((item) => {
            const { _id, property_name, category, description, location, property_image, price } = item;
            return (
                
                <tr className='bg-sky-500/100 my-5'>
                    <th>
                        <FaStar />
                    </th>
                    <td>
                        <div><h1>{item.property_name}</h1></div>
                    </td>
                    <td>{item.category}</td>
                    <td>
                        <div className="btn btn-ghost btn-xs">{item.location}</div>
                    </td>
                    <td className="flex items-center gap-3">
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

                    </td>
                </tr>
                );
        })
    );
};

export default MyProductCard;