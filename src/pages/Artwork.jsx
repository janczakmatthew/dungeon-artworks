// src/pages/AboutPage.js
import React from 'react';
import ProductListRow from '../components/product-list-row';
import HeroHeader from '../components/hero-header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const ArtworkPages = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center h-1/4 mx-auto'>
        <HeroHeader
          heroTitle="Artwork Gallery"
          heroSubtitle="Explore our collection of stunning artworks"
          heroDescription="Discover a variety of art styles and mediums. From contemporary to classic, find the perfect piece to enhance your space."
          bgColor="bg-blue-950"
          textColor="text-white"
          customStyles="min-h-[300px]"
        />

        <div className='flex flex-col justify-center items-center w-full mx-auto px-10 py-20 bg-slate-900'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            centeredSlides={false}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            //pagination={{ clickable: true }}
            navigation
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
            }}
            className="flex flex-col justify-center items-center w-full max-w-[1200px] mx-auto"
          >
            <SwiperSlide>
              <ProductListRow
                catergoryTitle='Featured Artworks'
                catergoryLink='/category'
                type='featured'
                size='1'
                bgColor="bg-slate-700"
                textColor="text-white"
                customStyles="" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductListRow
                catergoryTitle='New Arrivals'
                catergoryLink='/category'
                type='new'
                size='1'
                bgColor="bg-slate-800"
                textColor="text-white"
                customStyles="" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductListRow
                catergoryTitle='On Sale'
                catergoryLink='/category'
                type='sale'
                size='1'
                bgColor="bg-slate-700"
                textColor="text-white"
                customStyles="" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductListRow
                catergoryTitle='Best Sellers'
                catergoryLink='/category'
                type='bestseller'
                size='1'
                bgColor="bg-slate-800"
                textColor="text-white"
                customStyles="" />
            </SwiperSlide>
            <SwiperSlide>
              <ProductListRow
                catergoryTitle='Seasonal'
                catergoryLink='/category'
                type='category'
                size='1'
                bgColor="bg-slate-700"
                textColor="text-white"
                customStyles="" />
            </SwiperSlide>

          </Swiper>
        </div>

        <div className='flex flex-col justify-center items-center w-full max-w-[1200px] mx-auto mt-10'>

          <ProductListRow
            catergoryTitle='Horror Art'
            catergoryLink='/category'
            type='category'
            size='4'
            bgColor="bg-slate-800"
            textColor="text-white"
            customStyles="my-10" />

            <ProductListRow
            catergoryTitle='Fantasy Art'
            catergoryLink='/category'
            type='category'
            size='4'
            bgColor="bg-slate-700"
            textColor="text-white"
            customStyles="my-10" />

            <ProductListRow
            catergoryTitle='Physical Products'
            catergoryLink='/category'
            type='physical'
            size='4'
            bgColor="bg-slate-800"
            textColor="text-white"
            customStyles="my-10" />

            <ProductListRow
            catergoryTitle='Digital Products'
            catergoryLink='/category'
            type='digital'
            size='4'
            bgColor="bg-slate-700"
            textColor="text-white"
            customStyles="my-10" />

          <ProductListRow
            catergoryTitle='Dead by Daylight'
            catergoryLink='/category'
            type='category'
            size='4'
            bgColor="bg-slate-800"
            textColor="text-white"
            customStyles="my-10" />


        </div>
      </div>

    </div>
  );
};

export default ArtworkPages;