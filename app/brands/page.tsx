import BrandsContainer from "@/components/marine-components/Brands/BrandsContainer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brands Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Brands Biz Marine",
    description: "",
    url: "/brands",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/brands`,
  },
};

const Brands = () => {
  return (
    <>
      <BrandsContainer />
    </>
  );
};

export default Brands;
