import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importing the cart icon from react-icons

interface NavbarProps {
  cartItemCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ cartItemCount }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center w-full">
      <div>
        <Link to="/" className="text-2xl">TADHEX Scanner</Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link to="/links" className="hover:text-gray-300">Links</Link>
        <Link to="/shop" className="hover:text-gray-300">Shop</Link>
        <div className="relative">
          <Link to="/cart" className="hover:text-gray-300 flex items-center">
            <FaShoppingCart className="text-3xl text-gray-300" /> {/* Cart icon with larger size and gray color */}
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2">{cartItemCount}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;