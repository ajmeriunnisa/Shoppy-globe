import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { FaStar } from "react-icons/fa";

function ProductDetails() {
  // Get product ID from URL route parameters
  const { id } = useParams();

  // Store product details
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Handle loading state
  if (loading)
    return (
    <p className="text-center text-red-500 py-10 text-lg">
        Loading product details...
    </p>
  );

  // Handle error state
  if (error)
    return (
      <p className="text-center text-red-500 py-10 text-lg">
        Error: {error}
      </p>
    );

  return (
    <div>
        <h1>{product.title}</h1>
    </div>
  );
}

export default ProductDetails;
