"use client";
import { TbLocationFilled } from "react-icons/tb";
import { CgFacebook } from "react-icons/cg";
import { IoLogoLinkedin } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
import React, { useContext } from "react";
import Logo from "./Logo";
import { RootContext } from "@/app/Context/RootContext";

const navLinks1 = [
  {
    name: "All Categories",
    link: "collection",
  },
  {
    name: "All brands",
    link: "brands",
  },
  {
    name: "All Products",
    link: "products",
  },
  {
    name: "About Us",
    link: "about-us",
  },
  {
    name: "Contact Us",
    link: "contact-us",
  },
  {
    name: "Certificates",
    link: "certificates",
  },
  {
    name: "Clients",
    link: "clients",
  },
  {
    name: "Become a Supplier",
    link: "become-supplier",
  },
];

const navLinks2 = [
  {
    name: "FAQs",
    link: "faqs",
  },
  {
    name: "Blogs",
    link: "blogs",
  },
  {
    name: "Careers",
    link: "careers",
  },
  {
    name: "Testimonials",
    link: "testimonials",
  },
  {
    name: "Terms & Condition",
    link: "terms-and-conditions",
  },
  {
    name: "Return & Refund Policy",
    link: "return-and-refund-policy",
  },
  {
    name: "Privacy Policy",
    link: "privacy-policy",
  },
  {
    name: "Shipping Policy",
    link: "shipping-policy",
  },
];

const Footer = () => {
  const data = useContext(RootContext);

  return (
    <>
      <footer className=" bg-white p-5 md:p-10 border-t">
        <div className="container px-0 grid  lg:grid-cols-[1.2fr_1.5fr_1fr] gap-5 justify-between">
          <div className="grid gap-5">
            <Logo
              companyName={data?.info.company_name}
              logo={data?.info.header_logo}
            />
            <p className="text-secondary-foreground">
              {data?.info.company_tagline}
            </p>
            <Link
              className="text-primary font-bold underline"
              href={"/about-us"}
            >
              Know More
            </Link>
            <div className="flex gap-5 items-center">
              <Link className="text-3xl" href={"/"}>
                <CgFacebook />
              </Link>
              <Link className="text-3xl" href={"/"}>
                <AiOutlineTwitter />
              </Link>
              <Link className="text-3xl" href={"/"}>
                <AiFillInstagram />
              </Link>
              <Link className="text-3xl" href={"/"}>
                <AiFillYoutube />
              </Link>
              <Link className="text-3xl" href={"/"}>
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-5 justify-between content-center items-start">
            <ul className="grid gap-3">
              <h3 className="font-bold text-lg text-primary">Usefull Links</h3>
              {navLinks1.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-base text-secondary-foreground font-normal"
                    href={`/${item.link}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="grid gap-3">
              {navLinks2.map((item, index) => (
                <li key={index}>
                  <Link
                    className="text-base text-secondary-foreground font-normal"
                    href={`/${item.link}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-3 content-center items-start">
            <h3 className="font-bold text-lg text-primary">Contact Us</h3>
            <Link
              className="grid grid-cols-[20px_auto] gap-1 items-center"
              href={"tel:8655587403"}
            >
              <FaPhone />
              +91 8655587403
            </Link>
            <Link
              className="grid grid-cols-[20px_auto] gap-2 items-center"
              href={"mailto:sales@lanjekarmarine.com"}
            >
              <MdEmail />
              sales@lanjekarmarine.com
            </Link>
            <p className="grid grid-cols-[20px_auto] gap-2">
              <TbLocationFilled />
              Address: 404, Virani Business Centre, Opp Bharat Gear Company,
              Kausa, Mumbra, Thane 400612
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
