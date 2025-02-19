import CareersContainer from "@/components/marine-components/Careers/CareersContainer";
import React from "react";
import { Metadata } from "next";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Careers - Biz Marine | Join Our Team",
  description: "Explore exciting career opportunities at Biz Marine. Join our team and help shape the future of the marine parts industry.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Careers - Biz Marine | Join Our Team",
    description: "Discover career opportunities at Biz Marine. Join a dynamic team dedicated to providing high-quality marine parts and exceptional service.",
    url: "/careers",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/careers`,
  },
})
const Careers = () => {
  return <CareersContainer />;
};

export default Careers;
