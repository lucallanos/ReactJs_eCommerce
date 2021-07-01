import React from "react";
import "./NavBar.css";
// COMPONENTS
import CartWidget from "../CartWidget/CartWidget";
// REACT ROUTER DOM
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <Link className="title-text" to="/">
        Minimum60
      </Link>
      <div className="navBar-center">
        <Link className="navBar-center-text" to="/">
          Home
        </Link>
        <Link className="navBar-center-text" to="/category/info">
          Info
        </Link>
        <Link className="navBar-center-text" to="/category/contact">
          Contact
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
