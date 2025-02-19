import React from "react";
import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";

import HistoryorderPage from "@/components/marine-components/HIstoryOrders/HistoryorderPage";
import { Metadata } from "next";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Order History - Biz Marine | Your Purchase Records",
  description: "Access your order history at Biz Marine. Review past purchases, track orders, and manage your marine parts orders easily.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Order History - Biz Marine | Your Purchase Records",
    description: "View and manage your order history at Biz Marine. Check past purchases and track the status of your marine parts orders.",
    url: "/order-history",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/order-history`,
  },
});
function page() {
  return (
    <>
      <MarineBreadCrumb />
      <HistoryorderPage />
    </>
  );
}

export default page;
