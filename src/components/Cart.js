
import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        <div className="cart-item">
          <span className="item-name">Item Name</span>
          <div className = "itemPriceAndQuantity">
            <span className="item-price">$10.99</span>
            <span className="item-quantity">Quantity: 2</span>
          </div>
        </div>
      </div>
      <div className="cart-total">
        <span>Total:</span>
        <span className="total-price">₹212.98</span>
      </div>
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
