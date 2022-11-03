import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import Product from "../components/Products/Product";

const ProductDetails = () => {
  const params = useParams();
  const { productId } = params;

  const product = useSelector((state) =>
    state.products.products.find((product) => product._id === productId)
  );

  return (
    <div>
      <Navbar />
      <Product product={product} />
      <Footer />
    </div>
  );
};

export default ProductDetails;
