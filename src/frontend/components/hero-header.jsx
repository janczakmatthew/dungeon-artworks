import React from 'react';

export default function HeroHeader({heroTitle, heroDescription, heroSubtitle, bgColor, textColor, customStyles}) {
    return (    
        <section className={`flex flex-col justify-center items-center w-full ${bgColor} ${textColor} py-16 px-6 ` + customStyles}>
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-blue-200 text-lg">{heroSubtitle}</p>
                <h1 className="text-4xl font-bold mb-4">{heroTitle}</h1>
                <p className="text-gray-400 text-lg">
                    {heroDescription}
                </p>
            </div>
        </section>
    );
}