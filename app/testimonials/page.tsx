import TestimonialsContainer from "@/components/marine-components/Testimonials/TestimonialsContainer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Testimonials Biz Marine",
    description: "",
    url: "/testimonials",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/testimonials`,
  },
};
const Testimonials = () => {
  return (
    <>
      <TestimonialsContainer />
    </>
  );
};

export default Testimonials;
