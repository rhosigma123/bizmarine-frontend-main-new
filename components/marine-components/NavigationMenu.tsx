"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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

  return (
    <ul
      className={`${props.className} md:flex justify-center mt-10 text-center md:mt-0 gap-5 md:gap-10 py-3 `}
    >
      {navItems.map((navItem, index) => {
        const isActive = pathname === `/${navItem.navLink}`;
        return (
          <li key={index} onClick={props.handleSheetClose}>
            <Link
              className={`${
                isActive
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "font-medium hover:text-primary hover:font-semibold"
              }`}
              href={`/${navItem.navLink}`}
            >
              {navItem.navItem}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationMenu;
