import React from "react";
import CategorySlider from "./CategorySlider";

const CategorySliderContainer = () => {
  return (
    <div className="container p-5 md:py-10">
      <h2 className="col-span-1 mb-10 md:col-span-2 lg:col-span-4 text-3xl text-secondary-foreground font-medium">
        Our Categories
      </h2>
      <CategorySlider />
    </div>
  );
};

export default CategorySliderContainer;
