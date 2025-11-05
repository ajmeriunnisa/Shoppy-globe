import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        // ===== Footer Section =====
        <footer className="fixed bottom-0 left-0 w-full bg-gray-200 mt-12 py-6 text-center border-t border-gray-200">

            {/* ===== Copyright Text ===== */}
            <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} <Link to='/'><span className="cursor-pointer font-semibold">ShoppyGlobe</span></Link>. All rights reserved.
            </p>

            {/* ===== Social Media Links (LinkedIn and GitHub) ===== */}
            <div className="flex justify-center items-center gap-6 mt-3">
              <p className="text-gray-600">Contact Me - </p>
                <a
                    href="https://www.linkedin.com/in/ajmeri-unnisa/"
                    target="_blank"
                    className="text-gray-600 hover:text-blue-600 transition"
                >
                    <FaLinkedin size={22} />
                </a>

                <a
                    href="https://github.com/ajmeriunnisa"
                    target="_blank"

                    className="text-gray-600 hover:text-black transition"
                >
                    <FaGithub size={22} />
                </a>
            </div>

            {/* ===== Creator Info ===== */}
            <p className="text-gray-600 text-xs mt-3">
                Created by <span className="font-medium">Ajmeri Unnisa</span> for React Project.
            </p>
        </footer>
    );
}

export default Footer;
