import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { clearCart, selectCartItems, selectCartTotal } from "../utils/cartSlice";
import { TiShoppingCart } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access cart items from Redux store
  const cartItems = useSelector(selectCartItems);

  // Compute total price using Redux selector
  const totalPrice = useSelector(selectCartTotal)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function handlePlaceOrder(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.address || !formData.phone) {
      alert("Please fill all fields before placing the order!");
      return;
    }

    setOrderPlaced(true);
    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  // If cart is empty, show message instead of checkout form
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gray-50 rounded-2xl shadow-sm">
        <h2 className="flex items-center gap-2 text-3xl font-bold text-gray-700 mb-4">
          <TiShoppingCart className="text-blue-600" size={36} />
          Your cart is empty!
        </h2>

        <p className="text-gray-500 text-lg mb-6 max-w-md">
          Looks like you haven’t added anything to your cart yet.
        </p>

        <Link to="/products">
          <button className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg hover:translate-x-1 transition-all duration-300 cursor-pointer">
            Go Shop Now
            <FaArrowRight className="text-white text-xl" />
          </button>
        </Link>
      </div>
    );
  }

  // ===== MAIN CHECKOUT PAGE =====
  return (
    <div className="max-w-5xl mx-auto p-8 mt-10 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
        Checkout
      </h2>

      {orderPlaced ? (
        <div className="flex flex-col items-center justify-center text-center py-24 px-6 bg-linear-to-b from-green-50 to-white rounded-2xl shadow-sm">

          <h3 className="flex items-center gap-3 text-4xl font-extrabold text-green-600 mb-4">
            <GiPartyPopper className="text-5xl" />
            Order Placed Successfully!
          </h3>

          <p className="text-gray-600 text-lg font-medium">
            Redirecting you to the Home page...
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-10">
          {/* ===== FORM SECTION ===== */}
          <form
            onSubmit={handlePlaceOrder}
            className="flex flex-col gap-5 bg-gray-50 p-6 rounded-lg shadow-inner"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Customer Details
            </h3>

            {/* ====== Name ====== */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-400"
              />
              {!/^[A-Za-z\s]*$/.test(formData.name) && formData.name !== "" && (
                <p className="text-red-500 text-sm mt-1">
                  Name can contain only letters and spaces.
                </p>
              )}
            </div>

            {/* ====== Email ====== */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-400"
              />
              {!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && formData.email !== "" && (
                <p className="text-red-500 text-sm mt-1">Enter a valid email address.</p>
              )}
            </div>

            {/* ====== Address ====== */}
            <div>
              <textarea
                name="address"
                placeholder="Shipping Address"
                value={formData.address}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-400 h-24"
              ></textarea>
              {formData.address.trim() === "" && formData.address !== "" && (
                <p className="text-red-500 text-sm mt-1">Address cannot be empty.</p>
              )}
            </div>

            {/* ====== Phone ====== */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-400"
              />
              {!/^\d{10,15}$/.test(formData.phone) && formData.phone !== "" && (
                <p className="text-red-500 text-sm mt-1">
                  Enter a valid phone number (10–15 digits).
                </p>
              )}
            </div>

            {/* ====== Submit Button ====== */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 mt-3 text-lg rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 cursor-pointer"
            >
              Place Order
            </button>
          </form>


          {/* ===== CART SUMMARY SECTION ===== */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Order Summary
            </h3>

            <ul className="divide-y divide-gray-300">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between items-center py-3">
                  <div>
                    <p className="font-semibold text-blue-800">{item.title}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-gray-700">
                    ${item.price * item.quantity}
                  </p>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between font-bold text-lg text-blue-800">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;