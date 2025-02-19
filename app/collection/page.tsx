import CollectionsContainer from "@/components/marine-components/Collections/CollectionsContainer";
import React from "react";
import { Metadata } from "next";

import CommonBanner from "@/components/marine-components/Common/CommonBanner";
import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Products Collections - Biz Marine | Premium Marine Parts",
  description: "Browse Biz Marine’s extensive collection of premium marine parts. Find high-quality, durable components for all your marine needs.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Products Collections - Biz Marine | Premium Marine Parts",
    description: "Explore Biz Marine's wide range of marine parts and accessories. Discover high-quality solutions for boats, ships, and maritime equipment.",
    url: "/products-collections",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/products-collections`,
  },
});
const Collections = () => {
  return (
    <>
      <CommonBanner title={"Bizmarine Categories"} image={"/collectionbanner.jfif"}/>
      <MarineBreadCrumb />
      <CollectionsContainer />
    </>
  );
};

export default Collections;
