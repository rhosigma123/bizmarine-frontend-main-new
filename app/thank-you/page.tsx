import React from "react";
import Link from "next/link";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Thank You - Biz Marine ",
  description: "Thank you for your order at Biz Marine! We appreciate your purchase of premium marine parts. We'll process your order and keep you updated.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Thank You - Biz Marine ",
    description: "Thank you for choosing Biz Marine. Your order is confirmed, and we'll notify you once it's processed and shipped.",
    url: "/thank-you",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/thank-you`,
  },
});

const ThankYou = () => {
  return (
    <>
      <div className="h-[calc(100vh-150px)] flex  gap-10 flex-col items-center justify-center place-content-center ">
        <h1 className="  text-5xl xl:text-6xl 2xl:text-8xl font-bold text-primary">Thank You</h1>

        <Link href="/" className="text-base font-medium px-5 py-2 text-white bg-primary rounded-lg ">Back to Home</Link>
      </div>
    </>
  );
};

export default ThankYou;
