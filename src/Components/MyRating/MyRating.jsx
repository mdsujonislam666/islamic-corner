import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Product from '../Products/Product';
import Rating from './Rating';
import { FaStar } from 'react-icons/fa6';

const MyRating = () => {

    const { user } = use(AuthContext);
    const [rating, setRating] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/myRating?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRating(data);
                setLoading(false)
            })
    }, [user])
    if (loading) {
        return (
            <div className='w-full justify-center h-[400px] text-center py-[200px]'>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        )
    }
    return (
        <div className="overflow-x-auto ">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <FaStar />
                        </th>
                        <th>Reviewer Name</th>
                        <th>Property Name</th>
                        <th>Star Rating</th>
                        <th>Review Date</th>
                        <th>Thumbnail of Property</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        rating.map((product,index) =>
                            <Rating key={product._id} product={[product]} index={index} ></Rating>
                        )
                    }



                </tbody>
            </table>
        </div>

        // <div className='grid grid-cols-1 gap-5'>
        //     
        // </div>
    );
};

export default MyRating;