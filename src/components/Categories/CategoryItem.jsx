import React from "react";
import classes from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.imageContainer}>
        <img alt={props.item.cat} src={props.item.img} />
        <div className={classes.text}>
          <h1>{props.item.cat}</h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
