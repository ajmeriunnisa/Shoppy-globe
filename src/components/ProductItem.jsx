import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../utils/cartSlice";

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

  const dispatch = useDispatch();

  // Local state for managing if item is added to cart
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Add to cart initially
  function handleAddToCart() {
    dispatch(addToCart({ ...product, quantity: 1 }));
    setAddedToCart(true);
  };

  // Handle quantity changes after added
  function handleQuantityChange(type) {
    if (type === "increase") {
      const newQty = quantity + 1;
      setQuantity(newQty);
      dispatch(updateQuantity({ id: product.id, quantity: newQty }));
    } else if (type === "decrease") {
      if (quantity > 1) {
        const newQty = quantity - 1;
        setQuantity(newQty);
        dispatch(updateQuantity({ id: product.id, quantity: newQty }));
      } else {
        // Remove from cart if quantity hits 0
        dispatch(removeFromCart(product.id));
        setAddedToCart(false);
        setQuantity(1);
      }
    }
  }

  return (
    <div className="relative group bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">

      <Link to={`/product/${product.id}`}>
        {/* Product Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            loading='lazy'
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="mt-4 space-y-2">
          <h3 className="font-bold text-lg text-gray-800 truncate group-hover:text-blue-700 transition-colors">
            {product.title}
          </h3>
          <p className="text-gray-700 font-medium">${product.price}</p>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
            <FaStar className="text-white text-sm" />
            <span>{product.rating}</span>
          </div>
        </div>
      </Link>

      {/* Action Section */}
      <div className="mt-4">
        {!addedToCart ? (
          // Show Add to Cart initially
          <button
            onClick={handleAddToCart}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-200 cursor-pointer"
          >
            Add to Cart
          </button>
        ) : (
          // Once added, show quantity controls
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => handleQuantityChange("decrease")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-3 py-1 rounded-md text-lg cursor-pointer"
            >
              -
            </button>
            <span className="font-semibold text-blue-800">{quantity}</span>
            <button
              onClick={() => handleQuantityChange("increase")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold px-3 py-1 rounded-md text-lg cursor-pointer"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
