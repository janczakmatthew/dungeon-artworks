import React from "react";
import { Link } from "react-router-dom";

import Card from "./card";

import categories from '../data/categories.json'; // Importing categories data
import artworks from '../data/artworks.json'; // Importing artworks data

const ProductListRow = ({ catergoryTitle, catergoryLink, type, bgColor, textColor, customStyles }) => {

    // Filter artworks based on the type
    const filteredArtworks = artworks.filter((artwork) => {
        if (type === 'featured') {
            return artwork.featured;
        }

        if (type === 'new') {
            const daysAgo = 30;
            const now = new Date();
            const cutoffDate = new Date(now.setDate(now.getDate() - daysAgo));

            const newProducts = artworks.filter(product => {
                if (!product.dateAdded) return false;
                const addedDate = new Date(product.dateAdded);
                return addedDate >= cutoffDate;
            });

            return newProducts.some(product => product.id === artwork.id);

        }
        if (type === 'category') return artwork.category.includes(catergoryTitle);
        return true; // Default case, return all artworks
    });
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