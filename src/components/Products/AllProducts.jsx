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
      <div className={classes.filters}>
        <div className={classes.filter}>
          <h6 className="me-3">Filter Products</h6>
          <select>
            <option>Women</option>
            <option>Men</option>
            <option>Accessories</option>
          </select>
        </div>
        <div className={classes.filter}>
          <h6 className="me-3">Sort Products</h6>
          <select>
            <option>Ascending</option>
            <option>Descending</option>
          </select>
        </div>
      </div>
      <div className={`row ${classes.items}`}>
        {products.map((item) => {
          return (
            <div className="col-4" key={item._id}>
              <ProductItem item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
