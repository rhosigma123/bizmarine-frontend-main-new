"use client";
import { CgMenuCheese } from "react-icons/cg";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavigationMenu from "./NavigationMenu";
import MobNavigationMenu from "./MobnavigationManu";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

const MobNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSheetClose = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className=" flex lg:hidden justify-center">
        <RxHamburgerMenu className="text-4xl text-primary font-semibold" />
      </SheetTrigger>
      <SheetContent>
        {/* <MobNavigationMenu handleSheetClose={handleSheetClose} className="grid" /> */}
        <ul className="w-full rreltive h-auto flex flex-col gap-4 mt-20 px-5 ">
          <Link href="/Home" className="text-2xl  font-medium text-secondary " >Home</Link>
          <Link href="/products" className="text-2xl  font-medium text-secondary " >Products</Link>
          <Link href="/collection" className="text-2xl  font-medium text-secondary " >Collections</Link>
          <Link href="/wishlists" className="text-2xl  font-medium text-secondary " >Wishlist</Link>
          <Link href="/brands" className="text-2xl  font-medium text-secondary " >Brands</Link>
          <Link href="/about-us" className="text-2xl  font-medium text-secondary " >About</Link>
          <Link href="/contact-us" className="text-2xl  font-medium text-secondary " >Contacts</Link>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobNavigation;
