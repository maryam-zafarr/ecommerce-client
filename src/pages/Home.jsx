import React from "react";
import Navbar from "../components/Layout/Navbar";
import Newsletter from "../components/Layout/Newsletter";
import Slider from "../components/Layout/Slider";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Newsletter />
    </>
  );
};

export default Home;
