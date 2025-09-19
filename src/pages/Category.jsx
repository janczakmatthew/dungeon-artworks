import HeroHeader from "../components/hero-header";
import ProductGrid from "../components/product-grid";
import filterProducts from "../utils/filter-product-data";

import artworks from "../data/artworks.json";

import { useLocation } from 'react-router-dom';

function Category() {

    const location = useLocation();
    const state = location.state;

    const { title } = state;

    let filteredArtworks = [];

    if (title === 'Featured Artworks') {
        filteredArtworks = filterProducts(artworks, "featured", title);
    } else if (title === 'New Arrivals') {
        filteredArtworks = filterProducts(artworks, "new", title);
    }  else if (title === 'On Sale') {
        filteredArtworks = filterProducts(artworks, "sale", title);
    } else if (title === 'Best Sellers') {
        filteredArtworks = filterProducts(artworks, "bestseller", title);
    } else if (title === 'Digital Products') {
        filteredArtworks = filterProducts(artworks, "digital", title);
    } else if (title === 'Physical Products') {
        filteredArtworks = filterProducts(artworks, "physical", title);
    } else {
        filteredArtworks = filterProducts(artworks, "category", title);
    }

    //console.log("Filtered Artworks in Category Page:", filteredArtworks);
    return (
        <div className="category-page text-white min-h-screen pb-10" >
            <HeroHeader
                heroTitle={title ? title : 'Default Title'}
                heroDescription={state ? state.heroDescription : 'Default Description'}
                heroSubtitle={state ? state.heroSubtitle : 'Default Subtitle'}
                bgColor="bg-gray-900"
                textColor="text-white"
                customStyles="min-h-[300px]"
            />

            <div className="flex justify-center mt-10">
                <div className="max-w-[1440px]">
                    <ProductGrid products={filteredArtworks} />
                </div>
            </div>


        </div>
    );
}

export default Category;
