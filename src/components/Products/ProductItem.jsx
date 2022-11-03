import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <div className={classes.product}>
      <div className={classes.imgContainer}>
        <Link to={`/products/${props.item._id}`}>
          <img alt={props.item.title} src={props.item.img} />
        </Link>
        <h5>{props.item.title}</h5>
        <p>$ {props.item.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
