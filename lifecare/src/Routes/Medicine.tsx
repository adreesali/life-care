// src/pages/Medicine.tsx
import React from 'react';
import { ProductType } from '../types';
import Product from '../components/Product';
import { useCart } from '../context/CartContext';

const products: ProductType[] = [
  { id: 3, title: 'Paracetamol', price: 50, imageUrl: '', quantity: 0 },
  { id: 4, title: 'Ibuprofen', price: 100, imageUrl: '', quantity: 0 },
];

const Medicine: React.FC = () => {
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

export default Medicine;
