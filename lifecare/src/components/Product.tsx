import React from 'react';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { ProductType, CartItemType } from '../types';

interface ProductProps {
  product: ProductType;
  cartItem: CartItemType | undefined;
  addToCart: (product: ProductType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({
  product,
  cartItem,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  const inCart = cartItem && cartItem.quantity > 0;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col h-auto relative transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <img src={product.imageUrl} alt={product.title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-black dark:text-white mb-2">{product.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">PKR {product.price.toLocaleString()}</p>
        {!inCart ? (
          <button
  onClick={handleAddToCart}
  className="relative px-6 py-3 overflow-hidden font-medium text-gray-100 bg-gray-900 rounded-lg shadow-inner group mb-4 transition-colors duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
  <span className="relative transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:translate-y-1">
    Add to Cart
  </span>
</button>
        ) : (
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="bg-red-600 text-white p-2 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center"
                >
                  <FaMinus size={20} />
                </button>
                <span className="text-lg font-semibold">{cartItem.quantity}</span>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <FaPlus size={20} />
                </button>
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="bg-red-600 text-white p-2 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <FaTrash size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
