import React from "react";
import { useSelector } from "react-redux";
import classes from "./CartCheckout.module.css";

const CartCheckout = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div className={classes.summary}>
      <h2>Cart Summary</h2>
      <div className={classes.content}>
        <div className="row">
          <div className="col-8">
            <p>Subtotal</p>
          </div>
          <div className="col-4">
            <p>$ {totalPrice}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <p>Shipping Charges</p>
          </div>
          <div className="col-4">
            <p>$ 15.00</p>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <p>Grand Total</p>
          </div>
          <div className="col-4">
            <h5>$ {totalPrice + 15}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
