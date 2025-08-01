import React from "react";
import Card from "./card";

import artworks from "../data/artworks.json"; // Assuming artworks data is in this file

const ProductListRow = ({ catergoryTitle, catergoryLink }) => {
    return (
        <div>
            <div className="flex justify-between items-center py-4">
                {catergoryTitle && (<h2 class="text-2xl font-bold tracking-tight text-white">{catergoryTitle}</h2>)}
                {catergoryLink && (<a href={catergoryLink} className="text-blue-400 hover:underline">View All</a>)}
            </div>
            <div className="product-list-row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {artworks.slice(0, 4).map((product) => (
                    <Card
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        saleprice={product.salePrice} />

                ))}
            </div>
        </div>
    );
}

export default ProductListRow;