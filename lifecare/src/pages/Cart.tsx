import React, { useState } from 'react';
import { ProductType } from '../types';
import { FaTrash } from 'react-icons/fa';

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
  const [orderType, setOrderType] = useState<'Take Away' | 'Delivery' | ''>('');
  const [error, setError] = useState('');

  const totalPrice = cart.reduce((total, product) => {
    const price = product.halfPrice ? product.price / 2 : product.price;
    return total + (price * product.quantity);
  }, 0);

  const handleWhatsAppOrder = () => {
    if (!name || !phone || !address || !orderType) {
      setError("Please fill in all the fields.");
      return;
    }

    setError("");

    const orderItems = cart.map(item => {
      const price = item.halfPrice ? item.price / 2 : item.price;
      return `**${item.title}**\nPrice: ${price.toLocaleString()} PKR × ${item.quantity} = ${price * item.quantity} PKR`;
    }).join('\n');

    const totalBill = `\n\n**Total Bill:** ${totalPrice.toLocaleString()} PKR`;

    const customerDetails = `\n\n**Customer Details:**\nName: ${name}\nPhone: ${phone}\nAddress: ${address}`;

    const orderDetails = `\n\n**Order Type:** ${orderType}`;

    const whatsappMessage = encodeURIComponent(`**Order Details:**\n${orderItems}${totalBill}${orderDetails}${customerDetails}`);

    const whatsappLink = `https://wa.me/923207725050?text=${whatsappMessage}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Cart</h1>
      <div className="w-full max-w-3xl">
        {cart.length === 0 ? (
          <p className="text-lg text-gray-600">Your Cart is Empty</p>
        ) : (
          <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold mb-4">Your Cart Items</h2>
                {cart.map((product, index) => {
                  const price = product.halfPrice ? product.price / 2 : product.price;
                  return (
                    <div key={index} className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4 border-b border-gray-200">
                      <img src={product.imageUrl} alt={product.title} className="w-20 h-20 sm:w-40 sm:h-40 object-cover rounded-lg" />
                      <div className="flex-1">
                        <div className="text-lg font-semibold">{product.title}</div>
                        <div className="text-gray-600">
                          Price: <span className="font-bold text-lg text-gray-900">{price.toLocaleString()} PKR</span>
                        </div>
                        <div className="flex items-center mt-2 space-x-4">
                          <button
                            onClick={() => decreaseQuantity(product.id)}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all text-xl flex items-center justify-center"
                          >
                            <span className="font-semibold">-</span>
                          </button>
                          <button
                            className="bg-gray-200 text-black px-4 py-2 rounded-lg text-xl flex items-center justify-center"
                            disabled
                          >
                            {product.quantity}
                          </button>
                          <button
                            onClick={() => increaseQuantity(product.id)}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all text-xl flex items-center justify-center"
                          >
                            <span className="font-semibold">+</span>
                          </button>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all flex items-center justify-center"
                          >
                            <FaTrash className="text-lg" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="flex justify-between text-lg mb-4">
                  <span className="font-semibold">Total Price:</span>
                  <span className="text-black font-bold text-2xl lg:text-3xl">
                    {totalPrice.toLocaleString()} PKR
                  </span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                  <div className="flex flex-col space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border p-2 rounded-lg text-lg w-full"
                    />
                    <input
                      type="text"
                      placeholder="Your Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="border p-2 rounded-lg text-lg w-full"
                    />
                    <textarea
                      placeholder="Your Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="border p-2 rounded-lg text-lg w-full"
                    />
                    <select
                      value={orderType}
                      onChange={(e) => setOrderType(e.target.value as 'Take Away' | 'Delivery')}
                      className="border p-2 rounded-lg text-lg w-full"
                    >
                      <option value="">Select Order Type</option>
                      <option value="Take Away">Take Away</option>
                      <option value="Delivery">Delivery</option>
                    </select>
                    {error && <p className="text-red-500 text-lg">{error}</p>}
                    <button
                      onClick={handleWhatsAppOrder}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all text-lg w-full"
                    >
                      Send Order via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <footer className="w-full max-w-3xl mt-8 p-4 bg-gray-800 text-white rounded-lg shadow-md text-center">
        <p className="text-lg font-semibold">Interested in a Custom Software Solution?</p>
        <p className="text-gray-400 mt-2">If you need a similar software solution for your business, feel free to get in touch with us. We offer professional software development tailored to your needs.</p>
        <a
          href="tel:03287725050"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
        >
          Contact Us
        </a>
      </footer>
    </div>
  );
};

export default Cart;
