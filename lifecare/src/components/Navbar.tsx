import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

interface NavbarProps {
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount }) => {
  return (
    <nav className="bg-black text-white p-4 md:p-6 flex justify-between items-center shadow-lg border-b border-gray-600 w-full rounded-xl">
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-4xl font-bold hover:text-gray-300 transition duration-200"
          >
            TADHEX Scanner
          </Link>
        </div>
        <div className="flex md:hidden items-center space-x-4">
          <Link
            to="/"
            className="text-2xl font-extrabold hover:text-gray-300 transition duration-300"
          >
            TADHEX
          </Link>
        </div>
      </div>
      <div className="flex space-x-8 items-center ml-auto">
        <Link
          to="/links"
          className="text-xl font-semibold hover:text-gray-300 transition duration-300"
        >
          Links
        </Link>
        <Link
          to="/shop"
          className="text-xl font-semibold hover:text-gray-300 transition duration-300"
        >
          Shop
        </Link>
        <div className="relative">
          <Link
            to="/cart"
            className="flex items-center text-lg font-semibold hover:text-gray-300 transition duration-300"
          >
            <FaShoppingCart className="text-4xl" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
