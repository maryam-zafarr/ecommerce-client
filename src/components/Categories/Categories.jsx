import React from "react";
import classes from "./Categories.module.css";
import { categories } from "../../assets/data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className={classes.categories}>
      {categories.map((item) => {
        return <CategoryItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Categories;
