"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDownSLine } from "react-icons/ri";
import MegaMenu from "./Common/MegaMenu";

const navItems = [
  {
    navItem: "Home",
    navLink: "",
  },
  {
    navItem: "Categories",
    navLink: "collection",
  },
  {
    navItem: "Brands",
    navLink: "brands",
  },
  {
    navItem: "Products",
    navLink: "products",
  },
  {
    navItem: "About Us",
    navLink: "about-us",
  },
  {
    navItem: "Contact Us",
    navLink: "contact-us",
  },
];

const NavigationMenu = (props: any) => {
  const pathname = usePathname();

  const [isMegaManuOpen, setMegaManuOpen] = useState(false);

  return (
    <>
      <section className="w-full relative h-auto flex  bg-primary">
        <ul
          className={`${props.className} biz__container    lg:flex justify-start items-center  mt-10 text-center md:mt-0   py-2`}
        >
          <MegaMenu>
            <li
              className="flex items-center  gap-3 w-fit relative h-auto "
              onMouseEnter={() => setMegaManuOpen(!isMegaManuOpen)}
            >
              <RxHamburgerMenu className="text-[20px] text-white cursor-pointer" />
              <p className="text-base font-semibold text-white cursor-pointer">
                Shop Categories
              </p>
              {/* <RiArrowDownSLine className="text-[20px] text-white cursor-pointer" /> */}
            </li>
          </MegaMenu>

          {navItems.map((navItem, index) => {
            const isActive = pathname === `/${navItem.navLink}`;
            return (
              <li key={index} onClick={props.handleSheetClose}>
                <Link
                  className={`  py-4 px-5 ${
                    isActive
                      ? "text-white bg-[#2A8484]  font-semibold border-b-2 border-primary"
                      : "font-medium text-white "
                  }`}
                  href={`/${navItem.navLink}`}
                >
                  {navItem.navItem}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default NavigationMenu;
