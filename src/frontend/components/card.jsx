import { Link } from "react-router-dom";

import { importProductImage } from "../utils/import-product-image";

import useCartQuantity from "../utils/cart-quantity";

export default function Card({ id, type, title, description, price, saleprice, category, image_folder, image, gallery, link, hide_btn, highlights, includes, tags, onClick }) {

const mainImage = importProductImage(type, image_folder, image);

const { quantity, handleAddToCart, handleIncrease, handleDecrease } =
    useCartQuantity(onClick, { id, title, price, saleprice });

  return (
    <div className="bg-gray-600 rounded-lg shadow-md overflow-hidden w-full mx-auto group hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={mainImage}
          alt={title || 'Artwork Image'}
          className="w-full h-full object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-stone-100">{title}</h2>

        {description && (
          <p className="text-gray-400 text-sm mt-2 line-clamp-2">{description}</p>
        )}

        <div className="flex items-center justify-between mt-4">
          {saleprice && price ? (
            <div className="flex items-center">
              <span className="text-blue-400 font-medium line-through mr-2">${price}</span>
              <span className="text-red-400 font-semibold">${saleprice}</span>
            </div>
          ) : price ? (
            <span className="text-blue-400 font-semibold">${price}</span>
          ) : (null)}
          
          {hide_btn === true ? (
            <Link
            to={link}
            state={{ id, type, title, description, price, saleprice, category, image_folder, image, gallery, highlights, includes, tags }}
            className="bg-blue-600 text-white px-4 py-2 rounded transition-colors invisible group-hover:visible"
          >
            View
          </Link>
          ) : hide_btn ? (
            <Link
            to={link}
            state={{ id, type, title, description, price, saleprice, category, image_folder, image, gallery, highlights, includes, tags }}
            className="bg-blue-600 text-white px-4 py-2 rounded transition-colors"
          >
            View
          </Link>
          ): (null)}
        </div>

        {/* Shopping cart button */}
        <div className="mt-4">
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded transition-colors hover:bg-blue-700"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center justify-between bg-gray-700 rounded px-3 py-2">
              <button
                onClick={handleDecrease}
                className="text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-600"
              >
                -
              </button>
              <span className="text-white font-medium">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-600"
              >
                +
              </button>
            </div>
          )}  
          </div>
      </div>
    </div>
  );
}
