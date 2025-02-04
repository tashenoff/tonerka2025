// src/components/Footer.js
import React from 'react';
import ScrollArrow from './ScrollArrow';
import PhoneNumber from './PhoneNumber'; // Импортируем компонент PhoneNumber


function Footer() {
    return (
        <footer className="bg-black p-4">
            <div className="container mx-auto flex items-center flex-col  text-center">
                <ScrollArrow className='bottom-10 bg-opacity-20 backdrop-blur-md  bg-primary relative w-10 rounded-lg' direction="top" targetId="services" />
                <p className='mb-2 text-white'>&copy; 2024 Заправка картриджей. Все права защищены.</p>
                <PhoneNumber />
            </div>
        </footer>
    );
}

export default Footer;
