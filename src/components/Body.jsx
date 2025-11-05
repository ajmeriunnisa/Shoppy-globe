import React from 'react'
import useProducts from "../CustomHook/useProducts";

function Body() {

  //Using the custom hook to get product data, loading state, and any error
  const { products, loading, error } = useProducts();

  return (
    <div>
      <h1>Body</h1>
      
      
    </div>
  )
}

export default Body