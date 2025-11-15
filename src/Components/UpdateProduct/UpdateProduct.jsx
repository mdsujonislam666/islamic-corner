
import { useLoaderData, useNavigate } from 'react-router';
import { toast } from 'react-toastify';


const UpdateProduct = () => {
    const product = useLoaderData();
    console.log(product._id);
    
    const navigate = useNavigate()

    const handleUpdateProduct = (e) => {
        e.preventDefault();

        const formData = {
            property_name: e.target.name.value,
            description: e.target.description.value,
            price: e.target.price.value,
            location: e.target.location.value,
            category: e.target.category.value,
            property_image: e.target.image.value,
        }

        fetch(`http://localhost:4000/products/${product._id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate(`/productDetails/${product._id}`)
                toast.success('Successfully Update');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl mt-10 mx-auto ">
            <form onSubmit={handleUpdateProduct} className="card-body">
                <h1 className='mx-auto text-3xl font-bold py-5'>Update Product</h1>
                <fieldset className="fieldset space-y-2">
                    {/* name */}
                    <label className="label font-bold text-sm">property_name</label>
                    <input type="text" name='name' defaultValue={product.property_name} className="input rounded-3xl w-full" placeholder="Name" />


                    {/* Price */}
                    <label className="label font-bold text-sm">Price</label>
                    <input type="text" name='price' defaultValue={product.price} className="input rounded-3xl w-full" placeholder="Price" />

                    {/* location */}
                    <label className="label font-bold text-sm">Location</label>
                    <input type="text" name='location' defaultValue={product.location} className="input rounded-3xl w-full" placeholder="location" />

                    {/* Category */}
                    <label className="label font-bold text-sm">Category</label>
                    <input type="text" name='category' defaultValue={product.category
                    } className="input rounded-3xl w-full" placeholder="Category" />

                    {/* property_image */}
                    <label className="label font-bold text-sm">Property_image</label>
                    <input type="url" defaultValue={product.property_image
                    } name='image' className="input rounded-3xl w-full" placeholder="http://example.com/image.jpg" />

                    {/* description */}
                    <label className="label font-bold text-sm">Description</label>
                    <textarea name='description' required rows="3" defaultValue={product.description} placeholder='Enter Description' className='textarea w-full h-[150px] rounded-2xl'></textarea>

                    <button className="btn btn-neutral mt-4 rounded-3xl">Update Product</button>
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateProduct;