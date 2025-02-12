import ClientsContainer from "@/components/marine-components/Clients/ClientsContainer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Clients Biz Marine",
    description: "",
    url: "/clients",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/clients`,
  },
};
const Clients = () => {
  return (
    <div>
      <ClientsContainer />
    </div>
  );
};

export default Clients;
