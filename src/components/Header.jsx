import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { FiMenu, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";

function Header() {

  const [menuOpen,setMenuOpen]=useState(false);

  // Get the cart items from Redux store 
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Calculate total quantity 
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header >
      <nav className="flex justify-between items-center bg-white px-6 py-6 shadow-md">
        {/* ===== Logo Section ===== */}
        <Link to="/">
        <h1 className="font-extrabold tracking-tighter text-blue-800 text-3xl cursor-pointer">
          ShoppyGlobe
        </h1>
        </Link>

        {/* ===== Hamburger Icon (visible only on small screens) ===== */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-800 text-3xl focus:outline-none cursor-pointer"
          >
            {menuOpen ? <FiX/> : <FiMenu/>}
          </button>
        </div>

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden md:flex items-center space-x-6 text-[20px] font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-blue-800 hover:bg-blue-100 hover:text-blue-600"
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-blue-800 hover:bg-blue-100 hover:text-blue-600"
                }`
              }
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/checkout"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-blue-800 hover:bg-blue-100 hover:text-blue-600"
                }`
              }
            >
              Checkout
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-blue-800 hover:bg-blue-100 hover:text-blue-600"
                }`
              }
            >
            <div className="relative">
              <TiShoppingCart size={28} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
            </NavLink>
          </li>
        </ul>

        {/* ===== Mobile Menu ===== */}
        {menuOpen && (
          <div className="absolute top-[72px] left-0 w-full bg-blue-50 shadow-md border-t border-gray-200 md:hidden z-50">
            <ul className="flex flex-col items-center py-4 space-y-4 text-[20px] font-semibold">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-blue-800 hover:bg-blue-100 hover:text-blue-600"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/products"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-blue-800 hover:bg-blue-100 hover:text-blue-600"
                    }`
                  }
                >
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/checkout"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-blue-800 hover:bg-blue-100 hover:text-blue-600"
                    }`
                  }
                >
                  Checkout
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/cart"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-blue-800 hover:bg-blue-100 hover:text-blue-600"
                    }`
                  }
                >
                  <TiShoppingCart size={28} />
                  <span className="ml-2">Cart</span>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;