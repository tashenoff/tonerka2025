import React from 'react';
import ScrollArrow from './ScrollArrow';
import WhatsAppButton from './WhatsAppButton'; // Импортируем компонент WhatsAppButton

function HeroSection() {
    return (
        <div id="home" className="hero relative h-[600px] bg-base-200">
            {/* Видео фон */}
            <video 
                className="absolute inset-0 w-full h-full object-cover"
                src="images/home.mp4" // Замените путь на ваш файл
                autoPlay 
                loop 
                muted 
                playsInline
            ></video>

            {/* Затемнение поверх видео */}
            <div className="hero-overlay bg-black bg-opacity-80 absolute inset-0"></div>

            {/* Контент */}
            <div className="hero-content text-center relative z-10">
                <div className="w-full">
                    <h1 className="lg:text-5xl text-3xl text-white/70 font-bold">Заправка картриджей в Астане</h1>
                    <p className="py-6 text-white/80">Профессиональная заправка картриджей в Астане с гарантией качества. <br/>Мы предоставляем услуги по восстановлению и заправке картриджей для всех типов принтеров.</p>
                    <WhatsAppButton />
                </div>
            </div>

            {/* Стрелка прокрутки */}
            <ScrollArrow className="bottom-5 absolute animate-bounce z-10" direction="down" targetId="services" />
        </div>
    );
}

export default HeroSection;
