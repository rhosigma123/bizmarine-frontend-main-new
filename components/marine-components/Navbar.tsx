"use client";
import React, { useContext, useEffect, useState } from "react";
import { RootContext } from "@/app/Context/RootContext";
import Logo from "./Logo";
import SearchField from "./SearchField";
import MobNavigation from "./MobNavigation";
import CartBtn from "./Cart/CartBtn";
import Userprofile from "./Userprofile";

import { FaRegUser } from "react-icons/fa";
const Navbar = () => {
  const data = useContext(RootContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{ backgroundColor: data?.info.secondary_color || "#434343" }}
      className={`z-30 sticky top-0 ${isScrolled ? "shadow-md" : ""}`}
    >
      <nav className="biz__container relative  grid grid-cols-[1fr_auto_auto_auto]  lg:flex gap-3 py-4 lg:gap-10 justify-between items-center">
        <Logo
          companyName={data?.info.company_name}
          logo={data?.info.header_logo}
        />
        <SearchField className=" w-full max-w-full  2xl:max-w-[700px] col-start-1 col-end-5 row-start-2 row-end-3 col-span-3" />
        <Userprofile />
        <CartBtn />
        <MobNavigation />
      </nav>
    </header>
  );
};

export default Navbar;
