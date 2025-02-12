import ContactForm from "@/components/marine-components/ContactForm";
import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us Biz Marine",
  description: "",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us Biz Marine",
    description: "",
    url: "/contact-us",
    locale: "en_us",
    siteName: "BizMarine",
  },
  alternates: {
    canonical: `/contact-us`,
  },
};

const ContactUs = () => {
  return (
    <>
      <MarineBreadCrumb />
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 content-start p-5 md:py-10">
        <h2 className="lg:col-span-2 text-2xl font-medium text-secondary-foreground">
          Contact Us
        </h2>
        <ContactForm />
        <iframe
          className="rounded-xl w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1558964033984!2d73.03955167583095!3d19.14465204981249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c18251fdabcd%3A0x511df7c5b46843a1!2sBURAK%20Metering%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1725022516717!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default ContactUs;
