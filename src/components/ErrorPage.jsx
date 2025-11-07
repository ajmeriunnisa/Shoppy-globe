import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiErrorCircle } from "react-icons/bi";

function ErrorPage() {
  const error = useRouteError();
//   console.log(error);
  
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-blue-50 px-4">
      {/* ===== Error Icon ===== */}
      <div className="text-blue-700 mb-4 animate-bounce">
        <BiErrorCircle size={80} />
      </div>

      {/* ===== Error Title ===== */}
      <h1 className="text-6xl font-extrabold text-blue-900 mb-3">{error.status}</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Oops! Page Not Found
      </h2>

      {/* ===== Show the URL ===== */}
      <p className="text-sm text-gray-500 mb-4">
        <span className="font-mono text-gray-700">{error.data}</span>
      </p>

      {/* ===== Return to Home Button ===== */}
      <Link
        to="/"
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md"
      >
        <FaHome />
        Go Back Home
      </Link>
    </div>
  );
}

export default ErrorPage;
