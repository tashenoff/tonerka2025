import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCommentDots } from '@fortawesome/free-solid-svg-icons'; // Иконка
import WhatsAppButton from './WhatsAppButton'; // Компонент WhatsAppButton

function ContactForm() {
    return (
        <div id="footer" className="relative bg-gray-800 py-16 text-white">
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url(/images/baner-bot.jpeg)" }}></div>
            <div className="container mx-auto relative z-10 px-6 sm:px-12 md:px-24">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
                    {/* Левый блок с иконкой и заголовками */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                     
                        <h2 className="text-4xl font-extrabold mb-4">Оставить заявку</h2>
                        <p className="text-lg mb-6">Свяжитесь с нами, и мы обязательно поможем вам в решении ваших вопросов!</p>
                    </div>

                    {/* Правый блок с кнопкой WhatsApp */}
                    <div className="w-full md:w-1/3 bg-white text-gray-800 p-8 rounded-xl shadow-xl flex flex-col items-center">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Получите консультацию прямо сейчас</h3>
                        <WhatsAppButton />
                    </div>
                </div>

          
            </div>
        </div>
    );
}

export default ContactForm;
