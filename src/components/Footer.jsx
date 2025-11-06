import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-linear-to-r from-blue-50 to-blue-100 mt-16 py-8 border-t border-blue-200">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center space-y-4">
        {/* Brand / Copyright */}
        <p className="text-gray-700 text-sm sm:text-base">
          © {new Date().getFullYear()}{" "}
          <Link to="/" className="font-semibold text-blue-700 hover:text-blue-900 transition">
            ShoppyGlobe
          </Link>
          . All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6">
          <span className="text-gray-600 text-sm sm:text-base">Connect with me:</span>
          <a
            href="https://www.linkedin.com/in/ajmeri-unnisa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700 transition-transform transform hover:scale-110"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://github.com/ajmeriunnisa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-transform transform hover:scale-110"
          >
            <FaGithub size={22} />
          </a>
        </div>

        {/* Creator Info */}
        <p className="text-gray-600 text-xs sm:text-sm">
          Created by <span className="font-medium text-blue-700">Ajmeri Unnisa</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
