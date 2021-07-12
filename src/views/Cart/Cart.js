import React from "react";
import "./Cart.css";

function Cart({ match }) {
  console.log(match.params);

  return (
    <div className="cart-container">
      <h1>Cart</h1>
    </div>
  );
}

export default Cart;
