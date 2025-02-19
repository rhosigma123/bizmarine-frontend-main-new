import BrandsContainer from "@/components/marine-components/Brands/BrandsContainer";
import React from "react";
import { Metadata } from "next";

import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Brands - Biz Marine | Trusted Marine Parts Brands",
  description: "Explore top marine parts brands at Biz Marine. We partner with trusted manufacturers to bring you high-quality, reliable marine components.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Brands - Biz Marine | Trusted Marine Parts Brands",
    description: "Browse Biz Marine’s collection of top marine parts brands. Discover high-quality parts and accessories from industry-leading manufacturers.",
    url: "/brands",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/brands`,
  },
});

const Brands = () => {
  return (
    <>
      <BrandsContainer />
    </>
  );
};

export default Brands;
