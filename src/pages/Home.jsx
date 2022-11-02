import React from "react";
import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import Newsletter from "../components/Layout/Newsletter";
import Slider from "../components/Layout/Slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
