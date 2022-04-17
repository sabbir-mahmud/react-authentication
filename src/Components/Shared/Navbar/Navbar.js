import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import profile from '../../../images/profile.png';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <CustomLink style={{ TextDecoder: "none" }} to="/home" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Sabbir Mahmud</span>
                    </CustomLink>
                    <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                            <span className="sr-only">Open user menu</span>
                            <img src={profile} className="w-8 h-8 rounded-full" alt="user-img" />
                        </button>

                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" ></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" ></path></svg>
                        </button>
                    </div>
                    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <CustomLink to="/">Home</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/#service-container">Services</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/#price-list">Prices</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/checkout">Checkout</CustomLink>
                            </li>
                            <li>
                                <CustomLink to="/about">About</CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;