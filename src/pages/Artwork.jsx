// src/pages/AboutPage.js
import React from 'react';
import ProductListRow from '../components/product-list-row';
import HeroHeader from '../components/hero-header';

import categories from '../data/categories.json'; // Importing categories data

const ArtworkPages = () => {
  return (
    <div>
      <div className='max-w-[1440px] flex flex-col justify-center items-center h-1/4 mx-auto'>
        <HeroHeader
          heroTitle="Artwork Gallery"
          heroSubtitle="Explore our collection of stunning artworks"
          heroDescription="Discover a variety of art styles and mediums. From contemporary to classic, find the perfect piece to enhance your space."
          bgColor="bg-blue-950"
          textColor="text-white"
          customStyles="min-h-[300px]"
        />

        <div className='flex flex-col justify-center items-center w-full max-w-[1200px] mx-auto mt-10'>

          <ProductListRow
            catergoryTitle='Featured Artworks'
            catergoryLink='/category'
            type='featured'
            bgColor="bg-slate-700"
            textColor="text-white"
            customStyles="" />

          <ProductListRow
            catergoryTitle='New Arrivals'
            catergoryLink='/category'
            type='new' 
            bgColor="bg-slate-800"
            textColor="text-white"
            customStyles="mt-10"/>

          <ProductListRow
            catergoryTitle='Dead By Daylight'
            catergoryLink='/category' 
            type='dbd'
            bgColor="bg-slate-700"
            textColor="text-white"
            customStyles="my-10"/>
        </div>
      </div>

    </div>
  );
};

export default ArtworkPages;