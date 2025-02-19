"use client";
import { CgMenuCheese } from "react-icons/cg";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavigationMenu from "./NavigationMenu";
import MobNavigationMenu from "./MobnavigationManu";
import { RxHamburgerMenu } from "react-icons/rx";

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
        <MobNavigationMenu handleSheetClose={handleSheetClose} className="grid" />
      </SheetContent>
    </Sheet>
  );
};

export default MobNavigation;
