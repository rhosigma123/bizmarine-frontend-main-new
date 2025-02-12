import React from "react";
import ProductCard from "../Products/ProductGridCard";

const RecentlyViewedSection = () => {
  return (
    <div className="grid gap-8 grid-cols-6 pb-20">
      <h2 className="container col-span-6 text-3xl text-secondary-foreground font-medium">
        Recently Viewed
      </h2>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default RecentlyViewedSection;
