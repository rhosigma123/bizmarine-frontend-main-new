import React, { useEffect, useState } from "react";
import ProductGridCard from "./ProductGridCard";
import ProductListCard from "./ProductListCard";
import { Products, ProductsCardProps } from "@/types/interface";
import NewProductGridCard from "./NewProductGridCard";

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
      className={`grid gap-2 sm:gap-5  ${
        gridView ? "w-full relative h-fit grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3  gap-5" : ""
      }`}
    >
      {gridView &&
        data.map((product) => (
          <NewProductGridCard key={product.id} data={product} wishlist={false} />
        ))}

      {listView &&
        data.map((product) => (
          <ProductListCard key={product.id} data={product} />
        ))}
    </div>
  );
};

export default ProductsContainer;
