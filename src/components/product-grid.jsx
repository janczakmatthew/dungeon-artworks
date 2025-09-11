import React from 'react';
import Card from './card';



function ProductGrid({ products }) {



    return (
        <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {products.map((product) => (
                <Card
                    key={product.id}
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
                />
            ))}
        </div>
    );
}

export default ProductGrid;