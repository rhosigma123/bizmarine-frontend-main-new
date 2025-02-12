import React from "react";
import { Metadata } from "next";
import AllProducts from "@/components/marine-components/Products/AllProducts";

export const metadata: Metadata = {
  title: "Products Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Products Biz Marine",
    description: "",
    url: "/products",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/products`,
  },
};

const Products = () => {
  return (
    <>
      <AllProducts />
    </>
  );
};

export default Products;
