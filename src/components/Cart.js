import React from 'react';

const Cart = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-400">Your Cart</h1>
        <div className="cart-items space-y-4">
          <div className="border-b pb-2">
            <span className="block text-gray-700 font-bold">Item Name</span>
            <div className="flex justify-between items-center">
              <div className="text-gray-500">
                <span className="font-bold">Price:</span> ₹212.98
              </div>
              <div className="text-gray-500">
                <span className="font-bold">Quantity:</span> 2
              </div>
            </div>
          </div>
          {/* Add more cart items as needed */}
        </div>
        <div className="cart-total flex justify-between mt-4">
          <span className="text-gray-700 font-bold">Total:</span>
          <span className="text-blue-400 font-bold">₹212.98</span>
        </div>
        <button className="bg-blue-400 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
