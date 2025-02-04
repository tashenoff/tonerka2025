// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import PhoneNumber from './PhoneNumber'; // Импортируем компонент PhoneNumber

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`navbar ${isScrolled ? 'bg-opacity-70 backdrop-blur-md shadow-md bg-black' : 'bg-transparent'} fixed border-b border-white text-white border-opacity-15 top-0 w-full z-50 transition-all duration-300`}>
            <div className="container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div> */}
                        {/* <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a href="#services">Услуги</a></li>
                            <li><a href="#adv">Преимущества</a></li>
                            <li><a href="#footer">Контакты</a></li>
                        </ul> */}
                    </div>
                    <a href="/" className="btn btn-ghost lg:text-xl text-sm">
                    <img className='w-[100px]' src='/images/1/logo.jpg'/>

                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#services">Услуги</a></li>
                        <li><a href="#adv">Преимущества</a></li>
                        <li><a href="#footer">Контакты</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center justify-end'>
                        <PhoneNumber />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
