import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total price
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
        Your Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 rounded-2xl shadow-inner px-6 py-16">
          <div className="bg-blue-100 p-5 rounded-full mb-5 shadow-sm">
            <TiShoppingCart className="text-blue-600" size={60} />
          </div>

          <p className="text-center text-gray-600 text-2xl font-semibold mb-8">
            Your cart is empty
          </p>

          <Link to="/products">
            <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg hover:translate-x-1 transition-all duration-300 cursor-pointer">
              Go Shop Now
              <FaArrowRight className="text-white text-xl" />
            </button>
          </Link>
        </div>

      ) : (
        <>
          <div className="flex flex-col gap-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Total: ${totalAmount.toFixed(2)}
            </h3>

            <div className="flex justify-center items-center gap-6">
              <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-all duration-200 cursor-pointer"
            >
              Clear Cart
            </button>
            <Link to="/checkout"><button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 cursor-pointer">
              Checkout
              </button></Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart