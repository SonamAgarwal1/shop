import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductDetails from "./ProductDetails";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <ProductDetails />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
