import React from "react";
import AboutBanner from "@/components/marine-components/About/AboutBanner";
import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import Image from "next/image";
import { Metadata } from "next";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata ( {
  title: "Success Stories - Biz Marine | Customer Success & Testimonials",
  description: "Read the success stories of customers who trusted Biz Marine for their marine parts needs. Discover how we’ve helped businesses thrive.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Success Stories - Biz Marine | Customer Success & Testimonials",
    description: "Explore the success stories of Biz Marine clients. Learn how our high-quality marine parts and services have helped businesses succeed.",
    url: "/success-stories",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/success-stories`,
  },
});
function page() {
  return (
    <>
      <AboutBanner image="/success-stroies.jfif" title="Bizmarine Success Stories" />
      <MarineBreadCrumb />

      <section className="w-full relative flex py-10 flex-col biz__container items-center justify-center gap-20">
        <h2 className=" text-md  md:text-2xl lg:text-4xl font-medium text-primary text-center  ">
          How BizMarine Empowers the Diverse Industry
        </h2>
        <section className="w-full relative  h-auto grid grid-cols-1 ms:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 pb-10">

          <div className="w-full relative h-auto  flex flex-col  gap-2">
            <Image
              src="/msc.png"
              alt="Ayan"
              height={400}
              width={400}
              className="w-full relative h-[200px] object-cover border  rounded-xl"
            />

            <h2 className="text-3xl font-semibold text-primary ">MSC Shipping</h2>
            <p className="text-lg  font-medium text-foreground  ">
              Streamlining Fleet Operations with Reliable Automation
            </p>
            <p className="text-base font-medium text-secondary mt-1 line-clamp-4">
              MSC Shipping struggled with frequent system failures due to
              inconsistent automation components. Partnering with BizMarine
              provided access to high-quality, warrantied parts, reducing
              downtime by 40% and improving operational efficiency across their
              global fleet.
            </p>
          </div>
          <div className="w-full relative h-auto  flex flex-col  gap-2">
            <Image
              src="/msc.png"
              alt="Ayan"
              height={400}
              width={400}
              className="w-full relative h-[200px] object-cover border  rounded-xl"
            />

            <h2 className="text-3xl font-semibold text-primary ">MSC Shipping</h2>
            <p className="text-lg  font-medium text-foreground  ">
              Streamlining Fleet Operations with Reliable Automation
            </p>
            <p className="text-base font-medium text-secondary mt-1 line-clamp-4">
              MSC Shipping struggled with frequent system failures due to
              inconsistent automation components. Partnering with BizMarine
              provided access to high-quality, warrantied parts, reducing
              downtime by 40% and improving operational efficiency across their
              global fleet.
            </p>
          </div>
          <div className="w-full relative h-auto  flex flex-col  gap-2">
            <Image
              src="/msc.png"
              alt="Ayan"
              height={400}
              width={400}
              className="w-full relative h-[200px] object-cover border  rounded-xl"
            />

            <h2 className="text-3xl font-semibold text-primary ">MSC Shipping</h2>
            <p className="text-lg  font-medium text-foreground  ">
              Streamlining Fleet Operations with Reliable Automation
            </p>
            <p className="text-base font-medium text-secondary mt-1 line-clamp-4">
              MSC Shipping struggled with frequent system failures due to
              inconsistent automation components. Partnering with BizMarine
              provided access to high-quality, warrantied parts, reducing
              downtime by 40% and improving operational efficiency across their
              global fleet.
            </p>
          </div>


        </section>
      </section>
    </>
  );
}

export default page;
