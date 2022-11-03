import React from "react";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import Newsletter from "../components/Layout/Newsletter";
import Slider from "../components/Layout/Slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Categories />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
