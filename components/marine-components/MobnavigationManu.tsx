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

const MobNavigationMenu = (props: any) => {
  const pathname = usePathname();

  const [isMegaManuOpen, setMegaManuOpen] = useState(false);

  return (
    <>
      <section className="w-full relative h-[100vh] flex   bg-primary">
        <ul
          className={`${props.className} biz__container  flex items-center justify-center gap-3 w-full relative h-full  `}
        >

          {navItems.map((navItem, index) => {
            const isActive = pathname === `/${navItem.navLink}`;
            return (
              <li key={index} onClick={props.handleSheetClose}>
                <Link
                  className={` text-lg  py-4 px-5 ${
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

export default MobNavigationMenu;
