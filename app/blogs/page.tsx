import BlogContainer from "@/components/marine-components/Blog/BlogContainer";
import React from "react";
import { Metadata } from "next";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Blogs - Biz Marine | Marine Industry Insights & Tips",
  description: "Stay updated with the latest marine industry news, tips, and product insights on Biz Marine’s blog. Explore articles for marine enthusiasts and professionals.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Blogs - Biz Marine | Marine Industry Insights & Tips",
    description: "Discover expert advice, tips, and insights about marine parts and the maritime industry on the Biz Marine blog. Stay informed and inspired.",
    url: "/blogs",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/blogs`,
  },
});

const Blogs = () => {
  return (
      <BlogContainer />
  );
};

export default Blogs;
