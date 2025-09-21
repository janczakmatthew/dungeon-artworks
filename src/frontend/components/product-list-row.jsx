import React from "react";
import { Link } from "react-router-dom";

import Card from "./card";

//import categories from '../data/categories.json'; // Importing categories data
import artworks from '../../data/artworks.json'; // Importing artworks data
import filterProducts from "../utils/filter-product-data";

const ProductListRow = ({ catergoryTitle, catergoryLink, type, size, bgColor, textColor, customStyles }) => {

    const filteredArtworks = filterProducts(artworks, type, catergoryTitle);

    //console.log("Filtered Artworks:", filteredArtworks);

    return (
        <div className={`product-list-row ${bgColor} ${textColor} ${customStyles} max-w-[1200px] mx-auto w-full px-4 py-6 rounded-xl`}>

            {size === '4' ? (
                <div>
                    <div className="flex justify-between items-center py-4">
                        {catergoryTitle && (
                            <h2 className="text-2xl font-bold tracking-tight text-white">{catergoryTitle}</h2>
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
                                type={product.type}
                                title={product.title}
                                image={product.image}
                                image_folder={product.image_folder}
                                description={product.description}
                                price={product.price}
                                saleprice={product.salePrice}
                                category={product.category}
                                gallery={product.gallery}
                                link={product.link}
                                hide_btn={true}
                                highlights={product.highlights}
                                includes={product.includes}
                                tags={product.tags}   
                            />

                        ))}
                    </div>
                </div>
            ) : size === '2' ? (
                <div>
                    <div className="flex justify-between items-center py-4">
                        {catergoryTitle && (
                            <h2 className="text-2xl font-bold tracking-tight text-white">{catergoryTitle}</h2>
                        )}
                        {catergoryLink && (
                            <Link
                                to={catergoryLink}
                                state={{ title: catergoryTitle }}
                                className="text-blue-400 hover:underline">View All</Link>
                        )}
                    </div>
                    <div className="product-list-row grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                        {filteredArtworks.slice(0, 2).map((product) => (
                            <Card
                                id={product.id}
                                type={product.type}
                                title={product.title}
                                image={product.image}
                                image_folder={product.image_folder}
                                description={product.description}
                                price={product.price}
                                saleprice={product.salePrice}
                                category={product.category}
                                gallery={product.gallery}
                                link={product.link}
                                hide_btn={true}
                                highlights={product.highlights}
                                includes={product.includes}
                                tags={product.tags}
                            />

                        ))}
                    </div>
                </div>

            ) : size === '1' ? (
                <div className="flex flex-col justify-between items-center py-4">

                    {catergoryTitle && (
                        <h2 className="text-2xl font-bold tracking-tight text-white">{catergoryTitle}</h2>
                    )}
                    {catergoryLink && (
                        <Link
                            to={catergoryLink}
                            state={{ title: catergoryTitle }}
                            className="text-blue-400 hover:underline">View All</Link>
                    )}
                    <div className="product-list-row grid grid-cols-1 gap-4 p-4">
                        {filteredArtworks.slice(0, 1).map((product) => (
                            <Card
                                id={product.id}
                                type={product.type}
                                title={product.title}
                                image={product.image}
                                image_folder={product.image_folder}
                                description={product.description}
                                price={product.price}
                                saleprice={product.salePrice}
                                category={product.category}
                                gallery={product.gallery}
                                link={product.link}
                                hide_btn={true}
                                highlights={product.highlights}
                                includes={product.includes}
                                tags={product.tags}
                            />

                        ))}
                    </div>
                </div>

            ) : (null)}
        </div>
    );
}

export default ProductListRow;