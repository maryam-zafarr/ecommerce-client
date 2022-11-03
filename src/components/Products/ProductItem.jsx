import React from "react";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  console.log(props.item.img);
  return (
    <div className={classes.product}>
      <div className={classes.imgContainer}>
        <img alt={props.item.title} src={props.item.img} />
        <h5>{props.item.title}</h5>
        <p>$ {props.item.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
