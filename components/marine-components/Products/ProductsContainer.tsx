import React, { useEffect, useState } from "react";
import ProductGridCard from "./ProductGridCard";
import ProductListCard from "./ProductListCard";
import { Products, ProductsCardProps } from "@/types/interface";

const ProductsContainer: React.FC<ProductsCardProps> = ({
  data,
  gridView,
  listView,
}) => {
  if (!data) {
    return <p className="text-center">No products available.</p>;
  }

  return (
    <div
      className={`grid gap-2 sm:gap-5 min-h-[40vh] ${
        gridView ? "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : ""
      }`}
    >
      {gridView &&
        data.map((product) => (
          <ProductGridCard key={product.id} data={product} />
        ))}

      {listView &&
        data.map((product) => (
          <ProductListCard key={product.id} data={product} />
        ))}
    </div>
  );
};

export default ProductsContainer;
