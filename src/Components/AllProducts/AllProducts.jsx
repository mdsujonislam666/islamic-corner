
import { useLoaderData } from 'react-router';
import Product from '../Products/Product';
import { useState } from 'react';


const AllProducts = () => {
    const data = useLoaderData();
    // console.log(data);
    const [searchProduct, setSearchProduct] = useState(data);
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) =>{
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);
        setLoading(true)

        fetch(`http://localhost:4000/search?search=${search}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setSearchProduct(data)
            setLoading(false);
        })
    }
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }

    return (

        <div>
            <h2 className='text-5xl font-bold text-center py-10'>All <span className='text-red-500'>Product</span></h2>

            <form onSubmit={handleSearch} className='mt-5 mb-10 flex gap-2 justify-center'>
                <label className="input rounded-full mb-10">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input name='search' type="search" placeholder="Search" />
                </label>
                <button className='btn btn-primary rounded-full'>Search</button>
            </form>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    searchProduct.map(product =>
                        <Product key={product._id} product={product}></Product>
                    )
                }
            </div>
        </div>
    );
};

export default AllProducts;