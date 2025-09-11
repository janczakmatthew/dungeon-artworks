import React from "react";
import { Link } from "react-router-dom";

import Card from "./card";

//import categories from '../data/categories.json'; // Importing categories data
import artworks from '../data/artworks.json'; // Importing artworks data
import filterProducts from "../utils/filter-product-data";

const ProductListRow = ({ catergoryTitle, catergoryLink, type, bgColor, textColor, customStyles }) => {

    const filteredArtworks = filterProducts(artworks, type, catergoryTitle);

   //console.log("Filtered Artworks:", filteredArtworks);

    return (
        <div className={`product-list-row ${bgColor} ${textColor} ${customStyles} max-w-[1200px] mx-auto w-full px-4 py-6 rounded-xl`}>
            <div className="flex justify-between items-center py-4">
                {catergoryTitle && (
                    <h2 class="text-2xl font-bold tracking-tight text-white">{catergoryTitle}</h2>
                )}
                {catergoryLink && (
                    <Link
                        to={catergoryLink}
                        state={{ title: catergoryTitle }}
                        className="text-blue-400 hover:underline">View All</Link>
                )}
            </div>
            <div className="product-list-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {filteredArtworks.slice(0, 4).map((product) => (
                    <Card
                        id={product.id}
                        title={product.title}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        saleprice={product.salePrice}
                        category={product.category}
                        gallery={product.gallery}
                        link={product.link} />

                ))}
            </div>
        </div>
    );
}

export default ProductListRow;