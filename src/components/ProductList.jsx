import React, { useState } from "react";
import useProducts from "../CustomHook/useProducts";
import { FaStar, FaSearch } from "react-icons/fa";

function ProductList() {
  // Custom hook to fetch products
  const { products, loading, error } = useProducts();

  // Local state for search query
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-6">
        Browse Products
      </h1>

      {/* ===== Search Bar ===== */}
      <div className="flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-3 px-4 pl-12 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
          />
          <FaSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400 text-lg" />
        </div>
      </div>

      {/* ===== Product Grid ===== */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative group bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
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
              </div>

              {/* Add to Cart Button */}
              <button
                className="w-full mt-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-all duration-300 hover:scale-[1.02]"
                onClick={() => alert(`Added ${product.title} to cart!`)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No products found matching your search.
        </p>
      )}
    </div>
  );
}

export default ProductList;
