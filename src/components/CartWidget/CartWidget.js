import React from "react";
import "../CartWidget/CartWidget.css";
import CartIcon from "../CartWidget/IconCart.png";
// REACT ROUTER DOM
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <Link to="/cart">
      <img className="cartIcon" src={CartIcon} alt={"Cart icon"} />
    </Link>
  );
}

export default CartWidget;
