// src/pages/AboutPage.js
import React from 'react';
import ProductListRow from '../components/product-list-row';
const ArtworkPages = () => {
  return (
    <div>
      <div className='max-w-[1440px] flex flex-col justify-center items-center h-1/4 mx-auto'>
        <h1>Artwork Pages</h1>
        <p>This is the about page content.</p>

        <ProductListRow 
          catergoryTitle='Featured Artworks'
          catergoryLink='#Link'/>

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