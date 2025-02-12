import BlogContainer from "@/components/marine-components/Blog/BlogContainer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Blogs Biz Marine",
    description: "",
    url: "/blogs",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/blogs`,
  },
};

const Blogs = () => {
  return (
    <div className="container">
      <BlogContainer />
    </div>
  );
};

export default Blogs;
