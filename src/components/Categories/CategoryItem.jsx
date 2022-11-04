import React from "react";
import { Link } from "react-router-dom";
import classes from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <Link to="/products">
      <div className={classes.item}>
        <div className={classes.imageContainer}>
          <img alt={props.item.cat} src={props.item.img} />
          <div className={classes.text}>
            <h1>{props.item.cat}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
