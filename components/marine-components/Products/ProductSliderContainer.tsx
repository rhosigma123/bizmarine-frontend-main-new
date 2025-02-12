import React from "react";
import ProductSlider from "./ProductSlider";

const ProductSliderContainer = () => {
  return (
    <div className="py-10 container">
      <h2 className="px-5  mb-10 text-3xl text-secondary-foreground font-medium">
        Top Products
      </h2>
      <ProductSlider />
    </div>
  );
};

export default ProductSliderContainer;
