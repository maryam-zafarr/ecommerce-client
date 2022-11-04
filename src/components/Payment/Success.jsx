import React from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./Success.module.css";

const Success = () => {
  return (
    <Card>
      <div className={classes.success}>
        <div>
          <h2>Payment successful</h2>
          <p className="text-justify">
            Thank you for choosing Vanity. Your order will be delivered within
            2-3 business days.
          </p>
          <Link to="/" className="btn btn-dark mt-4">
            Continue Shopping
          </Link>
        </div>
        <div>
          <img
            className={classes.successImg}
            alt="success"
            src="https://i.ibb.co/wgLthMf/success.jpg"
          />
        </div>
      </div>
    </Card>
  );
};

export default Success;
