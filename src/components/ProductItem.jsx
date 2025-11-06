import React from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

function ProductItem({ product }) {

  return (

      <div className="relative group bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
        {/* Product Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-2">
          <h3 className="font-semibold text-lg text-gray-800 truncate group-hover:text-blue-700 transition-colors">
            {product.title}
          </h3>
          <p className="text-gray-700 font-medium">${product.price}</p>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            <FaStar className="text-white text-sm" />
            <span>{product.rating}</span>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            onClick={(e) => {
              e.preventDefault(); 
              console.log(`Added ${product.title} to cart`);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
  );
}

export default ProductItem;
