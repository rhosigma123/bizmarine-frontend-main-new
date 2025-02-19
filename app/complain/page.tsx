import React from "react";
import CompnainForm from "@/components/marine-components/Complaint/CompnainForm";
import Link from "next/link";
import CommonBanner from "@/components/marine-components/Common/CommonBanner";
import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import { Metadata } from "next";

import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Complain - Biz Marine | Customer Support & Issue Resolution",
  description: "Submit your complaints or concerns to Biz Marine. We're committed to resolving issues promptly and ensuring customer satisfaction.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Complain - Biz Marine | Customer Support & Issue Resolution",
    description: "File a complaint with Biz Marine. Our team is dedicated to addressing your concerns and ensuring a smooth, satisfactory experience.",
    url: "/complain",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/complain`,
  },
});

function page() {
  return (
    <>
      <CommonBanner title="Bizmarine Feedback" image="/Drone-image.png" />
      <MarineBreadCrumb />
      <section className="w-full relative h-auto py-10 md:py-20 biz__container grid  grid-cols-1 lg:grid-cols-[1fr_1fr]  gap-5 md:gap-10 lg:gap-20 xl:gap-40">
        <CompnainForm />

        <div
          className="w-full gap-3  relative h-aut
         flex flex-col"
        >
          <h2 className="text-2xl font-medium text-foreground  ">Contact Us</h2>

          <span className="w-full relative h-auto flex flex-col gap-1 ">
            <h2 className="w-full text-xl   font-medium  text-secondary  ">
              Contact :
            </h2>
            <div className="w-full relative flex  flex-wrap items-center gap-3 md:gap-5 ">
              <Link
                href={"tel:(+91) 9773141989"}
                className="text-lg font-medium  text-secondary "
              >
                (+91) 9773141989
              </Link>
              /
              <Link
                href={"tel:(+91) 9773141989"}
                className="text-lg font-medium text-secondary "
              >
                (+91) 9773141989
              </Link>
            </div>
          </span>

          <div className="w-full relative flex  flex-wrap items-centergap-3 md:gap-3 ">
            <h2 className="w-full text-xl font-medium text-secondary  ">
              Email :
            </h2>
            <Link href={"/"} className="text-lg font-medium text-secondary ">
              sales@pcd-flowmeter.com
            </Link>
            /
            <Link
              href={"melto:sales.pcdpl@gmail.com"}
              className="text-lg font-medium text-secondary "
            >
              sales.pcdpl@gmail.com
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
