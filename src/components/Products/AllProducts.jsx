import React, { useEffect } from "react";
import classes from "./AllProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/api";
import ProductItem from "./ProductItem";

const AllProducts = () => {
  const products = useSelector((state) => state.products.products);
  const productsStatus = useSelector((state) => state.products.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(getProducts());
    }
  }, [dispatch, productsStatus]);

  return (
    <div className={classes.productList}>
      <h2>WOMEN</h2>
      <div className={`row ${classes.items}`}>
        {products.map((item) => {
          return (
            <div className="col-4">
              <ProductItem key={item._id} item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;