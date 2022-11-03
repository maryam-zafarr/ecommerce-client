import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import classes from "./CartItems.module.css";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.products);
  return (
    <div className={classes.cartItems}>
      <div className="row mb-4">
        <div className="col-2 me-4">Product Details</div>
        <div className="col-3" />
        <div className="col-2">Price</div>
        <div className="col-2">Quantity</div>
        <div className="col-2">Total</div>
      </div>

      {cartItems.map((item) => {
        return <CartItem key={item._id} item={item} />;
      })}
    </div>
  );
};

export default CartItems;
