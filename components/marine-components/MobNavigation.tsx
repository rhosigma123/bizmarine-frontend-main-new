"use client";
import { CgMenuCheese } from "react-icons/cg";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavigationMenu from "./NavigationMenu";

const MobNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSheetClose = () => {
    setIsOpen(false);
  };
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className=" flex md:hidden justify-center">
        <CgMenuCheese className="text-4xl text-primary" />
      </SheetTrigger>
      <SheetContent>
        <NavigationMenu handleSheetClose={handleSheetClose} className="grid" />
      </SheetContent>
    </Sheet>
  );
};

export default MobNavigation;
