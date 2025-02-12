"use client";
import React, { useContext, useEffect, useState } from "react";
import { RootContext } from "@/app/Context/RootContext";
import Logo from "./Logo";
import SearchField from "./SearchField";
import MobNavigation from "./MobNavigation";
import CartBtn from "./Cart/CartBtn";

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
      className={`z-10 sticky top-0 ${isScrolled ? "shadow-md" : ""}`}
    >
      <nav className="container grid grid-cols-[1fr_2fr_1fr_1fr]  md:flex gap-3 md:gap-10 justify-between items-center">
        <Logo
          companyName={data?.info.company_name}
          logo={data?.info.header_logo}
        />
        <SearchField className="w-full row-start-2 row-end-3 col-span-3" />
        <CartBtn />
        <MobNavigation />
      </nav>
    </header>
  );
};

export default Navbar;
