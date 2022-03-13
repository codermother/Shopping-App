import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCart } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const state = useSelector((state) => state.handleCart);
  const userState = useSelector((userState) => userState.handleUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeFromCart = (item) => {
    dispatch(deleteCart(item));
  };

  const proceedCheckout = () => {
    if (userState !== null) {
      navigate("/checkout");
    } else {
      toast("Please login first!");
    }
  };

  const cartItems = (product) => {
    return (
      <div key={product.id} className="px-4 my-5 bg-light rounded-3 ">
        <div className="container py-4">
          <button
            onClick={() => removeFromCart(product)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const checkoutButton = () => {
    return (
      <div className="container">
        <div className="row">
          <button
            onClick={proceedCheckout}
            className="btn btn-dark mb-5 w-25 mx-auto"
          >
            Proceed To Checkout
          </button>
          <ToastContainer />
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && checkoutButton()}
    </>
  );
}

export default Cart;
