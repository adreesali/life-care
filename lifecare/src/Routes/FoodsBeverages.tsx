// src/pages/FoodsBeverages.tsx
import React from 'react';
import { ProductType } from '../types';
import Product from '../components/Product';
import { useCart } from '../context/CartContext';

const products: ProductType[] = [
  { id: 9, title: 'Apple Juice', price: 150, imageUrl: '', quantity: 0 },
  { id: 10, title: 'Orange Juice', price: 130, imageUrl: '', quantity: 0 },
];

const FoodsBeverages: React.FC = () => {
  const { cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          cartItem={cart.find((item: { id: number; }) => item.id === product.id)}
          addToCart={addToCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default FoodsBeverages;
