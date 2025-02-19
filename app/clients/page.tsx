import ClientsContainer from "@/components/marine-components/Clients/ClientsContainer";
import React from "react";
import { Metadata } from "next";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Clients - Biz Marine | Trusted by Marine Industry Leaders",
  description:
    "Discover our valued clients at Biz Marine. We proudly serve industry leaders with premium marine parts and exceptional customer service.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Clients - Biz Marine | Trusted by Marine Industry Leaders",
    description:
      "See the clients who trust Biz Marine for their marine parts needs. Our commitment to quality and service makes us a preferred partner.",
    url: "/clients",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/clients`,
  },
});
const Clients = () => {
  return (
    <div>
      <ClientsContainer />
    </div>
  );
};

export default Clients;
