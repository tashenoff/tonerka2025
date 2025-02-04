import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Подключение стилей Swiper
// import WhatsAppButton from './WhatsAppButton';

function ServiceSection() {
    const services = [
        {
            name: "ПРОДАЖА ЛАЗЕРНЫХ ПРИНТЕРОВ",
            image: "/images/1/1.jpg",
            description: "Профессиональная заправка и восстановление черно-белых лазерных картриджей для принтеров различных марок.",
        },
        {
            name: "ЗАПРАВКА ЦВЕТНЫХ КАРТРИДЖЕЙ",
            image: "/images/1/9.jpg",
            description: "Качественная заправка цветных лазерных картриджей с гарантией на все виды работ и расходных материалов.",
        },
        {
            name: "ЗАПРАВКА КАРТРИДЖЕЙ  ВЫЕЗДОМ",
            image: "/images/1/2.jpg",
            description: "Заправка и восстановление тонер-картриджей для лазерных принтеров с использованием высококачественных тонеров.",
        },
        {
            name: "ЗАПРАВКА КАРТРИДЖЕЙ В ОФИСЕ",
            image: "/images/1/4.jpg",
            description: "Профессиональная диагностика и обслуживание офисных принтеров с использованием сертифицированного оборудования.",
        },
        {
            name: "ЧЕРНО-БЕЛЫЕ КАРТРИДЖИ К ЛАЗЕРНЫМ ПРИНТЕРАМ И МФУ",
            image: "/images/1/3.jpg",
            description: "Оперативная поставка оригинальных расходных материалов для офисной техники.",
        },
        {
            name: "ЗАПАСНЫЕ ЧАСТИ НА НОУТБУКИ",
            image: "/images/1/7.jpg",
            description: "Ремонт и обслуживание офисной техники с использованием профессионального инструмента.",
        },
    ];

    return (
        <div id="services" className="bg-black py-10 text-white w-full">
            <h2 className="text-4xl font-bold text-center mb-8">Наши услуги</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={5}
                navigation
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination', // Указываем кастомный элемент для пагинации
                }}
                
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 4 },
                }}
                className="w-full"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-auto lg:mx-0 mx-5">
                            {/* Изображение */}
                            <div className="h-[250px] flex items-center justify-center bg-gray-100">
                                <img
                                    src={service.image}
                                    alt={service.name}
                                    className="h-full w-full object-contain"
                                />
                            </div>
                            {/* Текстовая часть */}
                            <div className="flex flex-col justify-between p-4 flex-1">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{service.name}</h3>
                                    {/* <p className="text-gray-600 mt-3 line-clamp-3">{service.description}</p> */}
                                </div>
                               
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Пагинация под слайдером */}
            
        </div>
    );
}

export default ServiceSection;
