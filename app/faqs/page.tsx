import FAQsContainer from "@/components/marine-components/FAQs/FAQsContainer";
import React from "react";
import { Metadata } from "next";

import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "FAQs - Biz Marine | Frequently Asked Questions",
  description: "Find answers to the most frequently asked questions about Biz Marine’s products, services, and shipping policies.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "FAQs - Biz Marine | Frequently Asked Questions",
    description: "Get all your questions answered on Biz Marine's FAQs page. Learn more about our marine parts, services, and shipping details.",
    url: "/faqs",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/faqs`,
  },
});

const FAQs = () => {
  return <FAQsContainer />;
};

export default FAQs;
