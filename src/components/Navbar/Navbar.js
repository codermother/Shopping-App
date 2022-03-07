import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import Login from "../Login";
import Signup from "../Signup";

function Navbar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LA COLLECTION
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <button className="btn">
                <Login />
                <Signup />
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-shopping-cart me-1"></i> Cart (
                  {state.length === 0 ? 0 : state.length})
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
