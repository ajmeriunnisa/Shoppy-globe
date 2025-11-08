import React, { useState } from "react";
import useProducts from "../CustomHook/useProducts";
import ProductItem from "./ProductItem";
import { FaSearch } from "react-icons/fa";

function ProductList() {
  // Custom hook to fetch products
  const { products, loading, error } = useProducts();

  // Local state for search query
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        Browse Our Products
      </h2>

      {/* Search Bar */}
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

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
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
