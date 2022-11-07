import React from "react";
import { Link } from "react-router-dom";
import classes from "./CartHeader.module.css";

const CartHeader = () => {
  return (
    <div className={classes.cartHeader}>
      <h2 className="text-center">MY CART</h2>
      <div className={classes.headerButtons}>
        <div>
          <Link className="btn btn-outline-dark" to="/products">
            CONTINUE SHOPPING
          </Link>
        </div>
        <div>
          <Link className="btn btn-dark" to="/address">
            CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
