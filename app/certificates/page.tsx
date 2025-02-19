import CertificatesContainer from "@/components/marine-components/Certificates/CertificatesContainer";
import React from "react";
import { Metadata } from "next";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Certificates - Biz Marine | Our Certifications & Quality Standards",
  description: "Explore the certifications and quality standards that Biz Marine adheres to. We ensure the highest level of excellence in all our marine parts.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Certificates - Biz Marine | Our Certifications & Quality Standards",
    description: "Learn about the certifications Biz Marine holds, showcasing our commitment to high-quality marine parts and industry-leading standards.",
    url: "/certificates",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/certificates`,
  },
});
const Certificates = () => {
  return <CertificatesContainer />;
};

export default Certificates;
