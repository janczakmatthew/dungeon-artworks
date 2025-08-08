import HeroHeader from "../components/hero-header";
import ProductGrid from "../components/product-grid";
import filterProducts from "../components/filter-product-data";

import artworks from "../data/artworks.json";   

import { useLocation } from 'react-router-dom';

function Category() {

    const location = useLocation();
    const state = location.state;

    const { title } = state;

   const filteredArtworks = filterProducts(artworks, "category", title);

    console.log("Location State:", state);
    return (
        <div className="category-page bg-gray-800 text-white min-h-screen">
            <HeroHeader
                heroTitle={title ? title : 'Default Title'}
                heroDescription={state ? state.heroDescription : 'Default Description'}
                heroSubtitle={state ? state.heroSubtitle : 'Default Subtitle'}
                bgColor="bg-gray-900"
                textColor="text-white"
                customStyles="min-h-[300px]"
            />

            <ProductGrid products={state ? filteredArtworks : ['test']} />
        </div>
    );
}

export default Category;
