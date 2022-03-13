import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Contact from "./components/Contact";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51IdVudBDYzH08iN6B3r4f8sFZke2NPuHtA2wRkqsvql1cKJCHuv5X4lQcGdpvCMBfz5JMirO3Q2uRvaF2Md4OL2G00we93HQ5l"
);

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/checkout"
            element={
              <Elements stripe={promise}>
                <Checkout />
              </Elements>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
