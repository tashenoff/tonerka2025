import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faStopwatch, faWallet, faUserTie } from '@fortawesome/free-solid-svg-icons';

function AdvantagesSection() {
    const advantages = [
        { text: "Прозрачные условия", icon: faEye },
        { text: "Быстрая заправка", icon: faStopwatch },
        { text: "Ценовая политика", icon: faWallet },
        { text: "Опытные специалисты", icon: faUserTie }
    ];

    return (
        <div id="adv" className="py-10 bg-base-100">
            <div className='container mx-auto'>
                <h2 className="text-3xl font-bold text-center mb-6">Наши преимущества</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {advantages.map((advantage, index) => (
                        <div key={index} className="card p-4 flex items-center">
                            <FontAwesomeIcon icon={advantage.icon} className="text-black text-2xl mr-2" />
                            <p className="text-lg mt-5">{advantage.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AdvantagesSection;
