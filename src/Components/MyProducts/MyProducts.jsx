import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Product from '../Products/Product';

const MyProducts = () => {
    const { user } = use(AuthContext);
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://localhost:4000/myProducts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
                setLoading(false)
            })
    }, [user])
    if (loading) {
        return <div>loading.....</div>
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                product.map(product =>
                    <Product key={product._id} product={product}></Product>
                )
            }
        </div>
    );
};

export default MyProducts;