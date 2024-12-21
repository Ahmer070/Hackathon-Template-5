
"use client";
import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Bandage</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-600 hover:text-blue-500">
            Home
          </Link>

          {/* Shop Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setShopDropdownOpen(true)}
            onMouseLeave={() => setShopDropdownOpen(false)}
          >
            <span className="text-gray-600 hover:text-blue-500 flex items-center">
              Shop <span className="ml-1">▼</span>
            </span>

            {isShopDropdownOpen && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md py-2 w-48 z-10">
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100"
                >
                  All Products
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100"
                >
                  Category 1
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100"
                >
                  Category 2
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-gray-600 hover:text-blue-500 hover:bg-gray-100"
                >
                  Category 3
                </Link>
              </div>
            )}
          </div>

          <Link href="#" className="text-gray-600 hover:text-blue-500">
            About
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-blue-500">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-500">
            Pages
          </Link>

          {/* Search, Cart, and Login/Register */}
          <div className="flex items-center space-x-6">
            <FiSearch size={18} className="text-gray-600 hover:text-blue-500 cursor-pointer" />
            <FiShoppingCart size={18} className="text-gray-600 hover:text-blue-500 cursor-pointer" />

            {/* Login/Register */}
            <Link href="/login" className="text-gray-600 hover:text-blue-500">
              Login / Register
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-center py-4">
          <Link href="/" className="block text-gray-600 hover:text-blue-500 py-2">
            Home
          </Link>

          {/* Shop Dropdown */}
          <details className="block">
            <summary className="text-gray-600 hover:text-blue-500 py-2 cursor-pointer">
              Shop
            </summary>
            <div className="pl-4">
              <Link href="#" className="block text-gray-600 hover:text-blue-500 py-1">
                All Products
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-blue-500 py-1">
                Category 1
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-blue-500 py-1">
                Category 2
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-blue-500 py-1">
                Category 3
              </Link>
            </div>
          </details>

          <Link href="/about" className="block text-gray-600 hover:text-blue-500 py-2">
            About
          </Link>
          <Link href="/blog" className="block text-gray-600 hover:text-blue-500 py-2">
            Blog
          </Link>
          <Link href="/contact" className="block text-gray-600 hover:text-blue-500 py-2">
            Pages
          </Link>

          {/* Login/Register for Mobile */}
          <div className="mt-4">
            <Link href="/login" className="block text-gray-600 hover:text-blue-500 py-1">
              Login / Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
