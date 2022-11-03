import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import Product from "../components/Products/Product";
import { addProduct } from "../store/cartSlice";

const ProductDetails = () => {
  const params = useParams();
  const { productId } = params;

  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.products.find((product) => product._id === productId)
  );

  const addToCartHandler = (data) => {
    dispatch(addProduct({ ...product, ...data }));
  };

  return (
    <div>
      <Navbar />
      <Product product={product} addToCart={addToCartHandler} />
      <Footer />
    </div>
  );
};

export default ProductDetails;
