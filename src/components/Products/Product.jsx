import { Add, Remove } from "@mui/icons-material";
import { useFormik } from "formik";
import React, { useState } from "react";
import classes from "./Product.module.css";

const Product = (props) => {
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);

  const onAdd = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const onRemove = () => {
    setQuantity((prevState) => prevState - 1);
  };

  const formik = useFormik({
    initialValues: {
      size: "",
    },
    onSubmit: async (values) => {
      props.addToCart({ ...values, color, quantity });
    },
  });

  return (
    <div className={classes.product}>
      <div className={classes.image}>
        <img src={props.product.img} alt={props.product.title} />
      </div>
      <div className={classes.content}>
        <h1>{props.product.title}</h1>
        <p>{props.product.desc}</p>
        <h2 className="pb-4">$ {props.product.price}</h2>
        <form onSubmit={formik.handleSubmit}>
          <h5 className="mt-4">Select Color</h5>
          <div className={classes.filter}>
            {props.product.color?.map((itemColor) => (
              <div
                key={itemColor}
                className={
                  itemColor === color
                    ? classes.colorFilter2
                    : classes.colorFilter
                }
                style={{ backgroundColor: `${itemColor}` }}
                value={itemColor}
                onClick={() => {
                  setColor(itemColor);
                }}
              ></div>
            ))}
          </div>
          <h5>Select Size</h5>
          <div className={classes.filter}>
            <select id="size" onChange={formik.handleChange}>
              <option disabled>SELECT SIZE</option>
              {props.product.size?.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.order}>
            <div className={classes.select}>
              <Remove onClick={onRemove} />
              <input
                id="quantity"
                type="text"
                value={quantity}
                onChange={formik.handleChange}
              />
              <Add onClick={onAdd} />
            </div>
            <div>
              <button type="submit">ADD TO CART</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
