

import React from 'react';
import { ProductType, CartItemType } from '../types';

interface ProductProps {
  product: ProductType;
  cartItem: CartItemType | undefined;
  addToCart: (product: ProductType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({ product, cartItem, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const inCart = cartItem && cartItem.quantity > 0;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-center">{product.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">PKR {product.price.toLocaleString()}</p>
        {!inCart ? (
          <button
            onClick={() => addToCart(product)}
            className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-700 transition-colors w-full"
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center justify-center mt-2 space-x-2">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              -
            </button>
            <span className="text-xl">{cartItem.quantity}</span>
            <button
              onClick={() => increaseQuantity(product.id)}
              className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
            >
              +
            </button>
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
            >
              Deletea
            </button> 
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;




