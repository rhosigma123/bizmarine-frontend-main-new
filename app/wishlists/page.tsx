import React from "react";
// import AboutBanner from '@/components/marine-components/About/AboutBanner'
import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import CommonBanner from "@/components/marine-components/Common/CommonBanner";
import WishlistSection from "../../components/marine-components/Common/WishlistSection";
import MarineShopbanner from "@/components/marine-components/Home/MarineShopbanner";
import { Metadata } from "next";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Wishlist - Biz Marine | Save Your Favorite Marine Parts",
  description:
    "Create and manage your wishlist at Biz Marine. Save your favorite marine parts and easily purchase them later with a few clicks.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Wishlist - Biz Marine | Save Your Favorite Marine Parts",
    description:
      "Build your wishlist at Biz Marine. Keep track of your favorite marine parts and quickly purchase them when you're ready.",
    url: "/wishlist",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/wishlists`,
  },
});

function page() {
  return (
    <>
      <CommonBanner
        title={"Bizmarine Wishlist"}
        image={"/Wishlist-image.png"}
      />
      <MarineBreadCrumb />
      <WishlistSection />
    </>
  );
}

export default page;
