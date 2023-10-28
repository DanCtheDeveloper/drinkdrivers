import React from "react";
import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-links">
        <Link to="/cart">
          <img
            src={require("./components/images/Cart.png")}
            alt="Cart"
            height={200}
            width={200}
          />
        </Link>
        <Link to="/">
          <img
            src={require("./components/images/App-logo.png")}
            alt="DRINK DRIVERS"
            height={200}
            width={200}
          />
        </Link>
        <Link to="/login">
          <img
            src={require("./components/images/Settings-logo.png")}
            alt="Login"
            height={200}
            width={200}
          />
        </Link>
      </div>
    </nav>
  );
}
