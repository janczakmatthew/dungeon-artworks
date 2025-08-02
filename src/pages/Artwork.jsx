// src/pages/AboutPage.js
import React from 'react';
import ProductListRow from '../components/product-list-row';
import HeroHeader from '../components/hero-header';

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

        <ProductListRow 
          catergoryTitle='Featured Artworks'
          catergoryLink='/category'/>

          <ProductListRow 
          catergoryTitle='New Arrivals'
          catergoryLink='#Link'/>

        <ProductListRow  
        catergoryTitle='Dead By Daylight'
        catergoryLink='#Link'/>
      </div>

    </div>
  );
};

export default ArtworkPages;