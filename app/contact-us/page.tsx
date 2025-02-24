import ContactForm from "@/components/marine-components/ContactForm";
import MarineBreadCrumb from "@/components/marine-components/MarineBreadCrumb";
import React from "react";
import Link from "next/link";

import { Metadata } from "next";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Presence from "@/components/marine-components/Contacts/Presence";

import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata({
  title: "Contact Us - Biz Marine | Get In Touch",
  description:
    "Contact Biz Marine for all your marine parts inquiries. We're here to help with expert advice and top-tier customer support.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us - Biz Marine | Get In Touch",
    description:
      "Reach out to Biz Marine for assistance with marine parts. We're ready to provide reliable support for all your maritime needs.",
    url: "/contact-us",
    locale: "en_us",
    siteName: "Biz Marine",
  },
  alternates: {
    canonical: `/contact-us`,
  },
});

const ContactUs = () => {
  return (
    <>
      <MarineBreadCrumb />
      <div className=" biz__container grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 content-start p-5 md:pt-5 pb-10">
        <h2 className="lg:col-span-2 text-2xl font-medium text-secondary-foreground">
          Contact Us
        </h2>
        <ContactForm />
        {/* <iframe
          className="rounded-xl w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1558964033984!2d73.03955167583095!3d19.14465204981249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c18251fdabcd%3A0x511df7c5b46843a1!2sBURAK%20Metering%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1725022516717!5m2!1sen!2sin"
          width="600"
          height="450"
          loading="lazy"
          ></iframe> */}

        <div className="w-full relative flex flex-col gap-4 md:gap-4 h-auto ">
          <h2 className="w-full relative text-xl md:text-2xl lg:text-3xl text-primary font-medium ">
            Head Office
          </h2>

          <span className="w-full relative h-auto flex flex-col gap-1 ">
            <h2 className="w-full  text-base   lg:text-lg font-medium text-foreground  ">
              Address :
            </h2>
            <p className=" text-base font-normal text-secondary ">
              Plot No. 22, Rautara Industrial Estate, Beside Hanuman Hotel,
              Shil-Mahape Road, Shilphata, Thane 400 612
            </p>
          </span>
          <span className="w-full relative h-auto flex flex-col gap-1 ">
            <h2 className="w-full text-base   lg:text-lg font-medium text-foreground  ">
              Contact :
            </h2>
            <div className="w-full relative flex  flex-wrap items-center gap-3 md:gap-5 ">
              <Link
                href={"tel:(+91) 9773141989"}
                className="text-lg font-medium text-secondary "
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

          <div className="w-full relative flex  flex-wrap items-centergap-3 md:gap-2 ">
            <h2 className="w-full text-base  lg:text-lg font-medium text-foreground ">
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

          <div className="w-full relative flex  flex-wrap items-center gap-5 ">
            <Link
              href={"/"}
              className="text-p18 font-medium bg-primary rounded-full p-2 text-secondary "
            >
              <FaFacebook className="text-white text-[25px]" />
            </Link>
            <Link
              href={"melto:sales.pcdpl@gmail.com"}
              className="text-p18 font-medium bg-primary p-2 rounded-full text-secondary "
            >
              <FaTwitter className="text-[25px] text-white " />
            </Link>

            <Link
              href={"/"}
              className="text-p18 font-medium bg-primary rounded-full p-2 text-secondary "
            >
              <FaInstagram className="text-white text-[25px]" />
            </Link>
            <Link
              href={"melto:sales.pcdpl@gmail.com"}
              className="text-p18 font-medium bg-primary p-[10px] rounded-full text-secondary "
            >
              <BsLinkedin className="text-[20px] text-white " />
            </Link>
            <Link
              href={"melto:sales.pcdpl@gmail.com"}
              className="text-p18 font-medium bg-primary p-2 rounded-full text-secondary "
            >
              <FaYoutube className="text-[25px] text-white " />
            </Link>
          </div>
        </div>
      </div>
      <Presence />
    </>
  );
};

export default ContactUs;
