import React, { useState, useEffect } from 'react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Replace 'backendAPIUrl' with the actual URL of your backend API
    fetch('backendAPIUrl/cart')
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
      })
      .catch((error) => {
        console.error('Error fetching cart data:', error);
      });
  }, []);

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1>In-Cart</h1>
      <div>
        <ul>
            {cartItems.map((item) => (
            <li key={item.id}>
                {item.name} - ${item.price}
            </li>
            ))}
        </ul>
      </div>

      <div>
        <strong>Total Price: ${calculateTotalPrice()}</strong>
      </div>
    </div>
  );
}
