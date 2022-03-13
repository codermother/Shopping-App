import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBasketTotal } from "../redux/reducer/handleCart";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import db from "../firebase";

function Checkout() {
  const state = useSelector((state) => state.handleCart);
  const userState = useSelector((userState) => userState.handleUser);
  const { error, setError } = useState(null);
  const { disabled, setDisabled } = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(state) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [state]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        db.collection("users")
          .doc(userState?.state._delegate.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: state,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setProcessing(false);
        setSucceeded(true);
        navigate("/orders");
        dispatch({
          type: "EMPTYCART",
        });
      })
      .catch((error) => {
        setError(error.response);
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  var total = 0;
  const itemList = (item) => {
    total = total + item.price;

    return (
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{item.title}</h6>
        </div>
        <span className="text-muted">${item.price}</span>
      </li>
    );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row g-5">
          <div className="col-md-5 col-lg-4 order-md-last">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-primary">Your cart</span>
              <span className="badge bg-primary rounded-pill">
                {state.length}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {state.map(itemList)}
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>${getBasketTotal(state)}</strong>
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="needs-validation" noValidate="">
              <h4 className="mb-3">Payment</h4>

              {/* stripe */}
              <form onSubmit={handleSubmit}>
                <CardElement
                  onChange={handleChange}
                  className="form-control p-3 mb-5 mt-5"
                />
                <div className="payment-priceContainer">
                  <hr className="my-4" />
                  <button
                    className="w-100 btn btn-primary btn-lg p-1 d-flex align-items-center justify-content-center"
                    disabled={processing || disabled || succeeded}
                  >
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>
                {/* Errors */}
                {error && <div>{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
