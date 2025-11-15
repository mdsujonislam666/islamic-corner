import React from 'react';
import { BsMoonStars, BsTwitterX } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
    return (
        <div>
            <footer className="footer rounded-tr-4xl rounded-bl-4xl sm:footer-horizontal bg-black text-white text-base-content p-10">
                <aside>
                    <a className="btn btn-ghost text-xl"><BsMoonStars />Islamic <span className='text-red-500'>Corner</span></a>
                    <p>
                        Islamic Corner Ltd.
                        <br />
                        Providing reliable tech since 2025
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Our Services</h6>
                    <a className="link link-hover">Home delivery</a>
                    <a className="link link-hover">Live chat support</a>
                    <a className="link link-hover">Pickup point</a>
                    <a className="link link-hover">Return & refund policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <BsTwitterX size={22}/>
                        </a>
                        <a>
                            <FaFacebookSquare size={25}/>
                        </a>
                        <a>
                            <IoLogoYoutube size={25}/>
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;