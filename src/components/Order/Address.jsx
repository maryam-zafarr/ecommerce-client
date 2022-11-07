import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../store/cartSlice";
import { useHistory } from "react-router-dom";
import Card from "../UI/Card";
import { addOrder } from "../../store/api";

const validate = (values) => {
  const errors = {};

  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.city) {
    errors.city = "Required";
  }

  return errors;
};

const Address = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const products = useSelector((state) => state.cart.products);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const user = useSelector((state) => state.user.user);
  const userId = user._id;

  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
    },
    validate,
    onSubmit: async (values) => {
      dispatch(addAddress(values));
      const add = values.address;
      dispatch(
        addOrder({ products, amount: totalPrice, address: add, userId })
      );
      history.push("/payment");
    },
  });

  return (
    <Card>
      <h2>Shipping Details</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="form-group mt-3">
          <input
            id="address"
            name="address"
            placeholder="Street Address"
            className="form-control mt-1"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div>{formik.errors.address}</div>
          ) : null}
        </div>
        <div className="form-group mt-3">
          <input
            id="city"
            name="city"
            placeholder="City"
            className="form-control mt-1"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city ? (
            <div>{formik.errors.city}</div>
          ) : null}
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-dark">
            PROCEED TO PAYMENT
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Address;
