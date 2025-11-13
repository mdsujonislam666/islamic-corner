import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Product from '../Products/Product';
import Rating from './Rating';

const MyRating = () => {

    const { user } = use(AuthContext);
    const [rating, setRating] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:4000/myRating?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRating(data);
                setLoading(false)
            })
    }, [user])
    if (loading) {
        return <div>loading.....</div>
    }
    return (
        <div className='grid grid-cols-1 gap-5'>
            {
                rating.map(product =>
                    <Rating key={product._id} product={product}></Rating>
                )
            }
        </div>
    );
};

export default MyRating;