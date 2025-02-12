import CertificatesContainer from "@/components/marine-components/Certificates/CertificatesContainer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certificates Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Certificates Biz Marine",
    description: "",
    url: "/certificates",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/certificates`,
  },
};
const Certificates = () => {
  return <CertificatesContainer />;
};

export default Certificates;
