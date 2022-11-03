import React from "react";
import CartCheckout from "../components/Cart/CartCheckout";
import CartHeader from "../components/Cart/CartHeader";
import CartItems from "../components/Cart/CartItems";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <CartHeader />
      <div className="row">
        <div className="col-8">
          <CartItems />
        </div>
        <div className="col-4">
          <CartCheckout />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
