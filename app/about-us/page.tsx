import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import React from "react";

import { Metadata } from "next";

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
      <MarineBreadCrumb />
      <div className="container grid gap-3 md:gap-5 p-5 md:py-10">
        <h2 className="text-2xl font-medium">About Us</h2>
        <p className="text-base text-secondary-foreground font-normal">
          Welcome to Biz Marine - Your Global Supplier of Industrial & Marine
          Automation Equipment, Parts, and Components!
        </p>
        <p className="text-base text-secondary-foreground font-normal">
          At Biz Marine, we take pride in being a trusted supplier of
          top-quality industrial and marine automation solutions worldwide. With
          a focus on excellence and a commitment to customer satisfaction, we
          provide a comprehensive range of equipment, parts, and components to
          meet the diverse needs of the industry.
        </p>
        <h2 className="text-2xl font-medium">Our Expertise </h2>
        <p className="text-base text-secondary-foreground font-normal">
          As a leading supplier, we specialize in offering a wide array of
          industrial and marine automation equipment, parts, and components.
          From advanced PLC systems and electrical components to navigation
          equipment and communication solutions, we have the expertise to
          support various sectors within the industrial and maritime domains.
        </p>
        <h2 className="text-2xl font-medium">Why Choose Us</h2>
        <p className="text-base text-secondary-foreground font-normal">
          Quality and Reliability: We recognize the paramount significance of
          quality and reliability in industrial and marine environments. why we
          meticulously source products from reputable manufacturers and brands
          renowned for their exceptional craftsmanship and strict adherence to
          stringent quality standards. Every product in our inventory undergoes
          comprehensive testing to ensure unparalleled performance and
          durability, providing our customers with the utmost peace of mind.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full my-5">
          <div className="bg-secondary p-5 rounded-xl">
            <h3 className="text-primary font-bold text-lg">
              Comprehensive Product Range
            </h3>
            <p className="text-base text-secondary-foreground font-normal">
              Our extensive product range caters to the diverse requirements of
              industrial and marine automation. Whether you need advanced
              control systems, precision sensors, robust motors, or cutting-edge
              communication devices, we have you covered. Our comprehensive
              selection allows you to find the right solutions tailored to your
              specific applications.
            </p>
          </div>
          <div className="bg-secondary p-5 rounded-xl">
            <h3 className="text-primary font-bold text-lg">
              Global Reach and Service
            </h3>
            <p className="text-base text-secondary-foreground font-normal">
              With a global presence, we serve clients across the globe,
              offering seamless delivery and exceptional service. Whether you
              are based in the manufacturing, oil and gas, shipping, or any
              other industry, we have the capability to meet your automation
              needs.
            </p>
          </div>
          <div className="bg-secondary p-5 rounded-xl">
            <h3 className="text-primary font-bold text-lg">
              Customer Satisfaction
            </h3>
            <p className="text-base text-secondary-foreground font-normal">
              At Biz Marine, our customers are at the center of everything we
              do. We strive to build strong, long-lasting relationships by
              delivering superior products, reliable solutions, and exceptional
              customer experiences. We value your trust and are committed to
              exceeding your expectations.
            </p>
          </div>
        </div>
        <p className="text-base text-secondary-foreground font-normal">
          Discover the world of industrial and marine automation with Biz
          Marine. Explore our inventory for a wide range of products and access
          a comprehensive selection of automation solutions. Experience the
          convenience of browsing through our inventory and find the perfect
          equipment, parts, and components to meet your automation needs. Learn
          more about how we can support your specific requirements and elevate
          your industrial and marine operations.
        </p>
        <p className="text-base text-secondary-foreground font-normal">
          Partner with us for reliable, high-quality automation solutions that
          drive efficiency, productivity, and success in your industrial and
          marine operations.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
