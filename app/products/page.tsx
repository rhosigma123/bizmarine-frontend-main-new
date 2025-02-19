import React from "react";
import { Metadata } from "next";
import AllProducts from "@/components/marine-components/Products/AllProducts";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Product - Biz Marine | Premium Marine Parts",
  description: "Explore detailed information about the premium marine part you're interested in. Find specifications, features, and more at Biz Marine.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Product - Biz Marine | Premium Marine Parts",
    description: "Learn more about the high-quality marine parts available at Biz Marine. View detailed specs, features, and options for the products you need.",
    url: "/product",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/product`,
  },
});

const Products = () => {
  return (
    <>
      <AllProducts />
    </>
  );
};

export default Products;
