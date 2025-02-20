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
import Image from "next/image";

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

const productLinks = [
  {
    name: "Steel",
    link: "steel",
  },
  {
    name: "Soft",
    link: "soft",
  },
  {
    name: "Cotton",
    link: "cotton",
  },
  {
    name: "Wooden",
    link: "wooden",
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
import { IoIosCall } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import NewsLetterInput from "./Newsletter/NewsLetterInput";

const Footer = () => {
  const data = useContext(RootContext);

  return (
    <>
      <footer className=" bg-[#222222]  md:p-10 border-t  ">
        <div className=" biz__container  pb-5 flex justify-start md:justify-between px-0 items-center gap-5 flex-wrap border-b border-white ">
          <div className="grid gap-2">
            <h2 className=" text-xl md:text-2xl lg:text-3xl text-primary  font-semibold">
              Newsletter
            </h2>
            <span className=" text-base md:text-lg text-white font-normal">
              Subscribe to our newsletter for updates!
            </span>
          </div>
          <NewsLetterInput />
        </div>

        <section className="w-full  biz__container relative h-auto py-10   items-start justify-between grid grid-cols-1 sm:grid-cols-[1fr_auto] md:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[2fr_1fr_1fr_1fr] gap-y-10  gap-x-10 ">
          <div className="w-full relative h-auto flex flex-col items-start justify-start  lg:pr-40 gap-10">
            <Image
              src="/bismarineFooterLogo.png"
              alt="Bizmarine Logo"
              height={400}
              width={500}
              className="h-auto w-[200px]  lg:w-[250px] relative "
            />

            <ul className="w-full relative h-auto flex flex-col gap-5">
              <li className="flex items-center flex-wrap text-base gap-4 font-medium">
                <span className="h-auto w-auto p-2 bg-primary rounded-full ">
                  <IoIosCall className="text-[20px] cursor-pointer text-white" />
                </span>
                <Link
                  href={"tel:+91 8655587403"}
                  className="text-base font-medium text-white"
                >
                  +91 8655587403
                </Link>
                /
                <Link
                  href={"tel:+91 9773141989"}
                  className="text-base font-medium text-white"
                >
                  +91 9773141989
                </Link>
              </li>
              <Link
                href={"melto:sales@bizmarine.com"}
                className="w-full relative h-auto flex gap-5 items-center text-base text-white"
              >
                <span className="h-auto w-auto p-2 bg-primary rounded-full ">
                  <MdEmail className="text-[20px] cursor-pointer text-white" />
                </span>
                sales@bizmarine.com
              </Link>

              <li className="flex items-start text-white  gap-5 w-full relative h-auto text-base text-secondary">
                <span className="h-auto w-auto p-2 bg-primary rounded-full ">
                  <FaMapMarkerAlt className="text-[18px] cursor-pointer text-white" />
                </span>
                Plot No.17, Survey No 69, Hissa No 2, Sagar Market, Behind
                Mukesh Hotel, Shilphata Mumbra Thane 400612
              </li>
            </ul>
          </div>
          <div className="w-full relatve h-auto gap-5 flex flex-col items-start justify-start">
            <h2 className="text-xl font-semibold text-white  ">Socials</h2>

            <ul className="w-full relative h-auto flex flex-col gap-3">
              <Link href={""} className="text-base font-medium text-white">
                FaceBook
              </Link>
              <Link href={""} className="text-base font-medium text-white">
                X
              </Link>
              <Link href={""} className="text-base font-medium text-white">
                Instagram
              </Link>
              <Link href={""} className="text-base font-medium text-white">
                WhatsApp
              </Link>
              <Link href="" className="text-base font-medium text-white">
                LinkedIn
              </Link>
            </ul>
          </div>
          <div className="w-full relatve h-auto flex gap-5 flex-col items-start justify-start">
            <h2 className="text-xl font-semibold text-white  ">Products</h2>

            <ul className="w-full relative h-auto flex flex-col gap-3">
              {productLinks.map((item, index) => (
                <Link href={`product/${item.link}`} className="text-base font-medium text-white" key={index}>
                  {item.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="w-full relatve h-auto flex flex-col gap-5 items-start justify-start">
            <h2 className="text-xl font-semibold text-white  ">Quick Links</h2>

            <ul className="w-full relative h-auto flex flex-col gap-3">
              <Link href={""} className="text-base font-medium text-white">
                Feedback
              </Link>
              <Link href={"/contact-us"} className="text-base font-medium text-white">
                Contact Us
              </Link>
              <Link href={"/about-us"} className="text-base font-medium text-white">
                About Us
              </Link>
              <Link href={"/success-stories"} className="text-base font-medium text-white">
                Success Stories
              </Link>
              <Link href={"/careers"} className="text-base font-medium text-white">
                Careers
              </Link>

              <Link href={"/blogs"} className="text-base font-medium text-white">
                Blogs
              </Link>
              <Link href={"/privacy-policy"} className="text-base font-medium text-white">
                Privacy Policy
              </Link>
              <Link href={"/terms-and-conditions"} className="text-base font-medium text-white">
                Terms & Conditions
              </Link>
            </ul>
          </div>

          {/*     <div className="w-full relative flex  flex-wrap items-center gap-5 ">
          <Link
            href={"/"}
            className="text-p18 font-medium bg-primary rounded-full p-2 text-webtext "
          >
            <FaFacebook className="text-white text-[25px]" />
          </Link>
          <Link
            href={"melto:sales.pcdpl@gmail.com"}
            className="text-p18 font-medium bg-primary p-2 rounded-full text-webtext "
          >
            <FaTwitter className="text-[25px] text-white " />
          </Link>

          <Link
            href={"/"}
            className="text-p18 font-medium bg-primary rounded-full p-2 text-webtext "
          >
            <FaInstagram className="text-white text-[25px]" />
          </Link>
          <Link
            href={"melto:sales.pcdpl@gmail.com"}
            className="text-p18 font-medium bg-primary p-[10px] rounded-full text-webtext "
          >
            <BsLinkedin className="text-[20px] text-white " />
          </Link>
          <Link
            href={"melto:sales.pcdpl@gmail.com"}
            className="text-p18 font-medium bg-primary p-2 rounded-full text-webtext "
          >
            <FaYoutube className="text-[25px] text-white " />
          </Link>
        </div> */}
        </section>
      </footer>
      <section className="w-full relative h-auto flex py-2  items-center justify-center bg-primary text-white">
        <p className="text-white text-lg font-medium ">
          Copyright © {new Date().getFullYear()} Bizmarine - All Rights Reserved
        </p>
      </section>
    </>
  );
};

export default Footer;
