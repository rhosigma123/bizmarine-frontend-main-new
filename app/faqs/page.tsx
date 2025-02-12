import FAQsContainer from "@/components/marine-components/FAQs/FAQsContainer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "FAQs Biz Marine",
    description: "",
    url: "/faqs",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/faqs`,
  },
};

const FAQs = () => {
  return <FAQsContainer />;
};

export default FAQs;
