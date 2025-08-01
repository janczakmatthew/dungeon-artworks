'use client'; // only needed in Next.js App Router

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import artworks from '../data/artworks.json'; // <-- DIRECT IMPORT
import Card from './card'; // Assuming you have a Card component

export default function GallerySwiper({ galleryTitle, galleryDescription }) {
    return (
        <section className="py-12 bg-gray-950 text-stone-200 h-screen flex flex-col justify-center items-center">
            {galleryTitle && (
                <h2 className="text-3xl font-bold text-center mb-8 border-b">{galleryTitle}</h2>
            )}
            {galleryDescription && (
                <p className="text-center text-lg mb-8">{galleryDescription}</p>
            )}
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={false}
                    centeredSlides={false}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="max-w-5xl mx-auto"
                >
                    {artworks.map((art, i) => (
                        <SwiperSlide key={i}>
                            <Card
                                title={art.title}
                                image={art.image}
                                description={art.description}
                                price={art.price}
                                saleprice={art.salePrice} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
