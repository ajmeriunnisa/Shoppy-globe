import React from "react";
import useProducts from "../CustomHook/useProducts";
import { FaStar } from "react-icons/fa";

function ProductList() {
  // Using the custom hook to fetch products
  const { products, loading, error } = useProducts();

  // Loading and error states
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

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* ===== Page Heading ===== */}
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Our Products
      </h1>

      {/* ===== Product Grid ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            {/* ===== Product Image ===== */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-52 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* ===== Product Info ===== */}
            <div className="mt-4 space-y-2">
              <h3 className="font-semibold text-lg text-gray-800 truncate group-hover:text-blue-700 transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-700 font-medium">${product.price}</p>

              {/* ===== Rating ===== */}
              <div className="inline-flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                <FaStar className="text-white text-sm" />
                <span>{product.rating}</span>
              </div>
            </div>

            {/* ===== Add to Cart Button ===== */}
            <button
              className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => alert(`Added ${product.title} to cart!`)}
            >
              Add to Cart
            </button>

            {/* ===== Hover Effect: subtle glow around card ===== */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none "></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
