import CareersContainer from "@/components/marine-components/Careers/CareersContainer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Careers Biz Marine",
    description: "",
    url: "/careers",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/careers`,
  },
};

const Careers = () => {
  return <CareersContainer />;
};

export default Careers;
