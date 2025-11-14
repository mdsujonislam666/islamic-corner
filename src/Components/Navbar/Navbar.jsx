import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import { FaUser } from 'react-icons/fa6';
import MyLink from './MyLink';
import { IoHome } from 'react-icons/io5';
import { BsFillCartCheckFill, BsMortarboardFill } from 'react-icons/bs';
import { FcApproval, FcHome, FcInvite } from 'react-icons/fc';

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);
    console.log(user);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
            .then(data => {
                console.log(data);
                navigate('/login');
                toast.success('SignOut Successful')

            })
            .catch(error => console.log(error))
    }

    const links = <>
        <li><MyLink to="/"><FcHome />Home</MyLink></li>
        <li><MyLink to="/allProducts"><BsFillCartCheckFill />All Products</MyLink></li>
        {
            user && <>
                <li><MyLink to="/myProducts"><BsMortarboardFill />My Products</MyLink></li>
                <li><MyLink to="/myRating"><FcApproval />My Rating</MyLink></li>
                <li><MyLink to="/addProduct"><FcInvite />Add Product</MyLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Islamic <span className='text-red-500'>Corner</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex gap-5'>

                            <div className='dropdown dropdown-end z-50 '>
                                <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar'>
                                    <div className='w-20 rounded-full border-2 border-gray-200 '>
                                        <img alt="Tailwind css navbar component" referrerPolicy='no-referrer' src={user.photoURL || "https://i.ibb.co/tMCRQ5Gk/tanzid.jpg"} />
                                    </div>
                                </div>
                                <ul tabIndex={-1} className='menu menu-sm dropdown-content bg-amber-400 w-[200px] space-y-3 rounded-xl'>
                                    <div className='space-y-3'>
                                        <li className='text-sm font-bold bg-white py-2 px-3 rounded-xl'>Name: {user.displayName
                                        }</li>
                                        <li className='text-xs bg-white py-2 rounded-xl'>Email: {user.email}</li>
                                    </div>
                                    <div>
                                        <a onClick={handleSignOut} className="btn btn-primary w-full">Sign Out</a>
                                    </div>
                                </ul>
                            </div>

                        </div>

                        :
                        <Link to="/login" className="btn btn-primary">Login</Link>

                }
            </div>
        </div>
    );
};

export default Navbar;