import React from "react";
import { Link, NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";

function Header() {
  return (
    <header >
      <nav className="flex justify-between items-center bg-white px-10 py-6 shadow-md">
        <Link to="/"><h1 className="font-extrabold tracking-tighter text-blue-800 text-3xl">ShoppyGlobe</h1>
        </Link>

        <ul className="flex items-center space-x-6 text-[20px] font-semibold">
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
              <TiShoppingCart size={28} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
