import React, { use, useRef } from 'react';
import { FaBangladeshiTakaSign, FaStar } from 'react-icons/fa6';
import { Link, Navigate, useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const product = useLoaderData();
    const ratingModal = useRef(null);
    const { user } = use(AuthContext);

    const navigate = useNavigate();

    const handleRatingModal = () => {
        ratingModal.current.showModal();
    }

    const handleRatingSubmit = (e) => {
        e.preventDefault();
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        console.log(rating, description);

        const formData = {
            productName: product.property_name,
            category: product.category,
            property_image: product.property_image,
            rating: e.target.rating.value,
            reviewText: e.target.description.value,
            posted_date: new Date(),
            posted_by: {
                name: user.displayName,
                email: user.email,
                profile_photo: user.photoURL
            }
        }

        fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success("Thank you for your Rating");
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleDeleteProduct = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_BACKEND_URL}/products/${product._id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json",
                    },
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        toast.success("Successfully Delete Product");
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error);
                    })

            }
        });
    }

    console.log(product);
    const { _id, property_name, category, description, location, property_image, price, posted_by } = product;
    return (
        <div>
            <div className='max-w-3xl mx-auto bg-blue-100 inset-shadow-sm inset-shadow-indigo-500/50 bg-gradient-to-r from-indigo-500 via-sky-300 to-violet-500'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <div>
                        <figure className="p-5">
                            <img
                                src={property_image}
                                alt="Shoes"
                                className="rounded-xl w-full h-66 hover:scale-105" />
                        </figure>
                    </div>
                    <div className="card-body space-y-3">
                        <h2 className="card-title text-2xl font-bold">{property_name}</h2>
                        <div className='bg-white px-2 py-3 rounded-xl shadow-lg shadow-white-500/50'>
                            <p className='text-gray-600 '>{description}</p>
                        </div>

                        <h1 className='font-bold flex items-center '>BTD: <span className='text-red-500'><FaBangladeshiTakaSign size={15} /></span><span className='text-blue-600'>{price}</span></h1>
                        <div className='flex justify-between bg-white py-3 rounded-xl px-2 shadow-lg shadow-white-500/50'>
                            <h3 className='font-bold text-indigo-600'>{category}</h3>
                            <h2 className='text-lime-600'>{location}</h2>
                        </div>
                        <div className="card-actions">
                            <Link to={`/updateProduct/${_id}`} className="btn btn-primary w-full">Update Product</Link>
                            <button onClick={handleDeleteProduct} to={`/updateProduct/${_id}`} className="btn btn-primary w-full">Delete Product</button>
                        </div>
                    </div>

                </div>
                <div className='lg:w-[400px] mx-6 lg:mx-auto text-center'>
                    <p className='text-xl font-bold py-5'>Say Something! How was your Experience</p>
                    <div className="card-actions">
                        <Link onClick={handleRatingModal} className="btn btn-primary w-full">Give Your Rating</Link>
                    </div>
                    <dialog ref={ratingModal} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box inset-shadow-sm inset-shadow-indigo-500/50 hover:scale-105 bg-gradient-to-r from-indigo-500 via-sky-300 to-violet-500">
                            <h3 className="font-bold text-lg">Give Your Rating!</h3>
                            <p className="py-4 text-xl font-bold">Please Say Something! How Was Your Experience</p>

                            <form onSubmit={handleRatingSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label text-black font-bold text-sm"><FaStar />  Rating Only Number (1-5)</label>
                                    <input type="number" name='rating' className="input input-bordered w-full" placeholder="Rating (1-5)" min="1" max="5" required />

                                    <label className="label text-black font-bold text-sm">Description</label>
                                    <textarea name='description' required rows="3" placeholder='Enter Description' className='textarea w-full h-[150px] rounded-2xl'></textarea>


                                    <button className="btn btn-neutral mt-4">Submit</button>
                                </fieldset>
                            </form>

                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
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
            {/* Open the modal using document.getElementById('ID').showModal() method */}

        </div>
    );
};

export default ProductDetails;