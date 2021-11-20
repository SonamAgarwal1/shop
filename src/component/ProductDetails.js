import React from "react";
import JSON from "./db.json";
import "./ProductDetails.css";
const ProductDetails = () => {
  const product = JSON;
  const renderproduct = product.map((item) => {
    return (
      <div id="product" class="col-xl-4">
        <center>
          <img
            src={item.image}
            alt="alt_image"
            style={{ height: 100, width: 100 }}
          />
        </center>
        <h2>{item.price}</h2>
        <p>{item.category}</p>
      </div>
    );
  });

  return <div>{renderproduct}</div>;
};

export default ProductDetails;
