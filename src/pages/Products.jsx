import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import AllProducts from "../components/Products/AllProducts";

const Products = () => {
  return (
    <div>
      <Navbar />
      <AllProducts />
      <Footer />
    </div>
  );
};

export default Products;
