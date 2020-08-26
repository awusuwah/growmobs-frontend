import React from "react";
import { Link } from "react-router-dom";

/**
 * The navbar which allows the user to navigate the application.
 *
 * @author Marko Maric
 */
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          ></img>
        </Link>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/grows" className="navbar-item">
              Grows
            </Link>
            <Link to="/strains" className="navbar-item">
              Strains
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
