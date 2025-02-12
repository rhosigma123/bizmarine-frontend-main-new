import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Thank You Biz Marine",
    description: "",
    url: "/thank-you",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/thank-you`,
  },
};

const ThankYou = () => {
  return (
    <>
      <div className="h-[calc(100vh-150px)] grid place-content-center">
        <h1 className="text-8xl font-bold text-primary">Thank You</h1>
      </div>
    </>
  );
};

export default ThankYou;
