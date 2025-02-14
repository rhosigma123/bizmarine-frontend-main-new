import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import React from "react";
import AboutBanner from "@/components/marine-components/About/AboutBanner";
import { Metadata } from "next";
import WhyChoose from "./WhyChoose";
import OurCertifications from "./OurCertifications";

export const metadata: Metadata = {
  title: "About Us Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Us Biz Marine",
    description: "",
    url: "/about-us",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/about-us`,
  },
};

const AboutUs = () => {
  return (
    <>
      <AboutBanner image={"/aboutimage.jfif"} title={"We are Bizmarine"} />
      <MarineBreadCrumb />
      <div className="w-full relative h-auto biz__container gap-7 py-10 md:py-20 flex flex-col items-center justify-center">
        <h2 className="w-full relative h-auto text-center font-medium text-primary    text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl ">
          Welcome to Bizmarine – Your Global Partner in Industrial & Marine
          Automation Solutions!
        </h2>
        <p className="text-base text-center font-medium text-secondary ">At Bizmarine, we are dedicated to delivering top-quality industrial and marine automation equipment, parts, and components worldwide. With a commitment to excellence and customer satisfaction, we provide a comprehensive range of solutions tailored to meet the evolving needs of the industry.</p> 

        <p className="text-base text-center font-medium text-secondary ">At Bizmarine, we are dedicated to delivering top-quality industrial and marine automation equipment, parts, and components worldwide. With a commitment to excellence and customer satisfaction, we provide a comprehensive range of solutions tailored to meet the evolving needs of the industry.</p> 

      </div>
      <WhyChoose/>
      <OurCertifications/>
    </>
  );
};

export default AboutUs;
