// src/pages/AtoZMedicines.tsx
import React from 'react';
import { ProductType } from '../types';
import Product from '../components/Product';
import { useCart } from '../context/CartContext';

const products: ProductType[] = [
  { id: 7, title: 'Vitamin C', price: 500, imageUrl: '', quantity: 0 },
  { id: 8, title: 'Zinc Tablets', price: 300, imageUrl: '', quantity: 0 },
];

const AtoZMedicines: React.FC = () => {
  const { cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          cartItem={cart.find(item => item.id === product.id)}
          addToCart={addToCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default AtoZMedicines;
