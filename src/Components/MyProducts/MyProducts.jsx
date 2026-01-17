import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Product from '../Products/Product';
import { FaStar } from 'react-icons/fa6';


const MyProducts = () => {
    const { user } = use(AuthContext);
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/myProducts?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
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
        <div>
            <div>
                <div className='py-10 space-y-5'>
                    <h2 className='text-5xl font-bold text-center'>My <span className='text-red-600'>Products</span></h2>
                </div>
            </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5'>
            {
                product.map(product =>
                    <Product key={product._id} product={product}></Product>
                )
            }
        </div>

        </div>
        
    );
};

export default MyProducts;