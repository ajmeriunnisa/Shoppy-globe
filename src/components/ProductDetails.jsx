import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../utils/cartSlice";

function ProductDetails() {
  // Get product ID from URL route parameters
  const { id } = useParams();

  // Store product details
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

   // Find the product in the cart (if already added)
  const cartItem = cartItems.find((item) => item.id === Number(id));

  // Fetch product details when component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Add product to cart
  function handleAddToCart(){
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  // Increase product quantity
  const handleIncrease = () => {
    dispatch(updateQuantity({ id: product.id, quantity: cartItem.quantity + 1 }));
  };

  // Decrease product quantity
  const handleDecrease = () => {
    if (cartItem.quantity > 1) {
      dispatch(updateQuantity({ id: product.id, quantity: cartItem.quantity - 1 }));
    } else {
      // Remove from cart if quantity hits 0
      dispatch(removeFromCart(product.id));
    }
  };


  // Handle loading state
  if (loading) {
  return (
    <div className="animate-pulse flex flex-col md:flex-row items-center justify-center space-x-4 py-10">
      <div className="w-60 h-60 bg-gray-300 rounded-lg"></div>
      <div className="flex-1 space-y-4 mt-6 md:mt-0">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
    </div>
  );
}

  // Handle error state
  if (error)
    return (
      <p className="text-center text-red-500 py-10 text-lg">
        Error: {error}
      </p>
    );

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* Product Detail Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-xl w-full max-w-md object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center space-y-4">
            {/* Category Badge */}
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium w-fit shadow-sm">
                {product.category}
            </span>
            {/* Title */}
            <h2 className="text-3xl font-bold text-blue-900">{product.title}</h2>
            {/* Brand */}
            {product.brand && (
            <p className="text-gray-600 text-sm font-medium">
                Brand: <span className="text-gray-800">{product.brand}</span>
            </p>
            )}
            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
            </p>

          {/* Price */}
          <p className="text-2xl font-bold text-green-700">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              <FaStar className="text-white text-sm" />
              <span>{product.rating}</span>
            </div>
            <p className="text-gray-500 text-sm">({product.stock} in stock)</p>
          </div>

          {/* Add to Cart or Quantity Controls */}
          {!cartItem ? (
            <button
              onClick={handleAddToCart}
              className="mt-3 px-8 py-3 bg-blue-600 text-white font-bold text-xl rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-4 mt-3">

              {/* Decrease Quantity */}
              <button
                onClick={handleDecrease}
                className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md text-lg hover:bg-blue-600 transition"
              >
                −
              </button>

              {/* Display Quantity */}
              <span className="text-xl font-bold text-blue-900">{cartItem.quantity}</span>

              {/* Increase Quantity */}
              <button
                onClick={handleIncrease}
                className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md text-lg hover:bg-blue-600 transition"
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

export default ProductDetails;
