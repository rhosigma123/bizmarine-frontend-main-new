import CollectionsContainer from "@/components/marine-components/Collections/CollectionsContainer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Categories Biz Marine",
    description: "",
    url: "/collection",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/collection`,
  },
};

const Collections = () => {
  return (
    <>
      <CollectionsContainer />
    </>
  );
};

export default Collections;
