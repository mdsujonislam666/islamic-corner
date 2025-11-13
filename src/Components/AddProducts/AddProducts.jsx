import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const AddProducts = () => {

    const {user} = use(AuthContext);
    // console.log(user);

    const navigate = useNavigate();

    const handleAddProduct = (e) =>{
        e.preventDefault();

        const formData = {
            property_name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value,
            location: e.target.location.value,
            category: e.target.category.value,
            property_image: e.target.image.value,
            posted_date: new Date(),
            posted_by: {
                name: user.displayName,
                email: user.email,
                profile_photo: user.photoURL
            }
        }
        
        fetch('http://localhost:4000/products',{
            method: "POST",
            headers: {
                "Content-type" : "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success("Successfully Add Product");
            navigate('/')
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (

        <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl mt-10 mx-auto">
            <form onSubmit={handleAddProduct} className="card-body">
                <h1 className='mx-auto text-3xl font-bold py-5'>Add Product</h1>
                <fieldset className="fieldset space-y-2">
                    {/* name */}
                    <label className="label font-bold text-sm">property_name</label>
                    <input type="text" name='name' className="input rounded-3xl w-full" placeholder="Name" />


                    {/* Price */}
                    <label className="label font-bold text-sm">Price</label>
                    <input type="text" name='price' className="input rounded-3xl w-full" placeholder="Price" />

                    {/* location */}
                    <label className="label font-bold text-sm">Location</label>
                    <input type="text" name='location' className="input rounded-3xl w-full" placeholder="location" />

                    {/* Category */}
                    <label className="label font-bold text-sm">Category</label>
                    <input type="text" name='category' className="input rounded-3xl w-full" placeholder="Category" />

                    {/* property_image */}
                    <label className="label font-bold text-sm">Property_image</label>
                    <input type="url" name='image' className="input rounded-3xl w-full" placeholder="http://example.com/image.jpg" />

                    {/* description */}
                    <label className="label font-bold text-sm">Description</label>
                    <textarea name='description' required rows="3" placeholder='Enter Description' className='textarea w-full h-[150px] rounded-2xl'></textarea>

                    <button className="btn btn-neutral mt-4 rounded-3xl">Add Property</button>
                </fieldset>
            </form>
        </div>

    );
};

export default AddProducts;