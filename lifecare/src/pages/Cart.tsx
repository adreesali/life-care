import React, { useState } from 'react';
import { ProductType } from '../types';
import { FaUser, FaPhone, FaHome, FaTrash, FaShoppingBasket } from 'react-icons/fa'; // Importing necessary icons

interface CartProps {
  cart: ProductType[];
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [orderType, setOrderType] = useState<'In Dine' | 'Take Away' | 'Delivery' | ''>('');
  const [error, setError] = useState('');

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const handleWhatsAppOrder = () => {
    if (!name || !phone || !address || !orderType) {
      setError("Please fill in all the fields.");
      return; 
    }
  
    setError("");
  
    // Prepare order items with emojis
    const orderItems = cart.map(item => {
      return `**${item.title}**\nPrice: ${item.price.toLocaleString()} PKR × ${item.quantity} = ${item.price * item.quantity} PKR`;
    }).join('\n');
  
    // Total bill.   s
    const totalBill = `\n\n**Total Bill:** PKR ${totalPrice.toLocaleString()}`;
  
    // Customer details
    const customerDetails = `\n\n**Customer Details:**\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`;
  
    // Order type
    const orderDetails = `\n\n**Order Type:** ${orderType}`;
  
    // WhatsApp message
    const whatsappMessage = encodeURIComponent(`**Order Details:**\n${orderItems}${totalBill}${orderDetails}${customerDetails}`);
  
    // WhatsApp link
    const whatsappLink = `https://wa.me/923207725050?text=${whatsappMessage}`;
  
    // Open WhatsApp link in new tab
    window.open(whatsappLink, '_blank');
  };
  
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Cart</h1>
      <div className="w-full max-w-3xl">
        {cart.length === 0 ? (
          <p className="text-lg">Your cart is empty</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4">
              {cart.map((product, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex items-center space-x-4">
                  <img src={product.imageUrl} alt={product.title} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <div className="font-semibold text-lg">{product.title}</div>
                    <div className="text-gray-600 text-base">Price: <span className="font-bold">PKR {product.price.toLocaleString()}</span></div>
                    <div className="flex items-center mt-2 space-x-4">
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all flex items-center"
                      >
                        <span className="font-semibold text-lg">-</span>
                      </button>
                      <button
                        className="bg-gray-200 text-black px-3 py-1 rounded-lg flex items-center"
                        disabled
                      >
                        {product.quantity}
                      </button>
                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-all flex items-center"
                      >
                        <span className="font-semibold text-lg">+</span>
                      </button>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-all flex items-center"
                      >
                        <FaTrash className="mr-1" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Bill */}
            <div className="text-xl sm:text-2xl font-bold mt-4">Total: <span className="font-bold">PKR {totalPrice.toLocaleString()}</span></div>

            {/* Order Type Buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-4 space-y-2 sm:space-y-0 sm:space-x-4">

          
              <button
                onClick={() => setOrderType('Delivery')}
                className={`flex-1 py-2 rounded-lg font-semibold transition-all duration-300 ${orderType === 'Delivery' ? 'bg-red-500 text-white shadow-md hover:bg-red-600' : 'bg-red-200 text-black hover:bg-red-300'}`}
              >
                Delivery
              </button>
            </div>

            {/* Customer Details Form */}
            <div className="mt-4 space-y-4">
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <FaPhone className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <FaHome className="absolute top-3 left-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && <div className="text-red-500 mt-2">{error}</div>}

            {/* WhatsApp Order Button */}
            <button
              onClick={handleWhatsAppOrder}
              className="bg-green-500 text-white mt-4 px-4 py-2 rounded-lg hover:bg-green-600 w-full shadow-md transition-all"
            >
              Send Order to WhatsApp
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;