import React from 'react'
import useProducts from "../CustomHook/useProducts";
import { FaGlobeAsia } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Body() {
  // Using the custom hook to get products, loading state, and error state
  const { products, loading, error } = useProducts();

  // Show messages while data is loading or if there’s an error
  if (loading)
    return (
      <p className="text-center text-gray-500 py-10 text-lg">
        Loading products...
      </p>
    );

  if (error)
    return (
      <p className="text-center text-red-500 py-10 text-lg">
        Error: {error}
      </p>
    );

  const newArrivals = [...products].slice(0, 7);
  const bestBuys = products.filter((p) => p.price < 9).slice(0, 7);

  return (
    <div className="max-w-8xl mx-auto px-7 space-y-6 cursor-pointer">
      {/* ===== Welcome Message ===== */}
      <section className="text-center py-8 bg-white mt-4">
        <div className="flex flex-wrap items-center justify-center mb-2 gap-1 sm:gap-2">
          <h1 className="text-2xl sm:text-4xl font-bold text-blue-800 text-center">
            Welcome to ShoppyGlobe
          </h1>
          <FaGlobeAsia className="text-2xl sm:text-4xl text-blue-800" />
        </div>


        <p className="text-gray-600 text-lg">
          Explore new arrivals and grab the best deals under $10!
        </p>

      {/* ===== Shop Now Button ===== */}
        <div className="flex justify-center items-center">
          <Link to="/products">
            <button className="mt-4 flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold text-2xl rounded-lg shadow-md hover:bg-blue-700 hover:translate-x-0.5 transition-all duration-300">
              Shop Now
              <FaArrowRight className="text-2xl" />
            </button>
          </Link>
        </div>
      </section>

      {/* ===== New Arrivals Section ===== */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-blue-700 border-l-4 border-blue-600 pl-3">
          New Arrivals
        </h2>

        {/* Grid layout for products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="p-3 hover:border-blue-500 hover:border rounded-xl shadow bg-white"
            >
              <Link to={`/product/${product.id}`}>
              
              {/* Product Image */}
              <div className="flex justify-center items-center h-40">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-30 h-30  rounded-lg mb-3"
                /></div>

              {/* Product Info */}
              <h3 className="font-semibold text-lg text-blue-900 truncate">
                {product.title}
              </h3>
              <p className="text-gray-700 mt-1">${product.price}</p>
              <div className="flex items-center text-sm mt-1 text-yellow-600 space-x-1">
                <FaStar className="text-yellow-500" />
                <p className="font-medium">{product.rating}</p>
              </div>
              </Link>
            </div>

          ))}
        </div>
      </section>

      {/* ===== Best Buys Under $100 Section ===== */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-blue-700 border-l-4 border-blue-600 pl-3">
          Best Buys Under $10
        </h2>

        {/* Grid layout for best deals */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {bestBuys.map((product) => (
            <div
              key={product.id}
              className="p-4 hover:border hover:border-blue-500 rounded-xl shadow bg-white"
            >
              <Link to={`/product/${product.id}`}>
            
              {/* Product Image */}
              <div className="flex justify-center items-center h-40">

                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-30 h-30  rounded-lg mb-3"
                /></div>

              {/* Product Info */}
              <h3 className="font-semibold text-lg text-blue-900 truncate">
                {product.title}
              </h3>
              <p className="text-gray-700 mt-1">${product.price}</p>
              <p className="text-green-600 text-sm mt-1">
                Save More — Limited Time!
              </p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Body;
