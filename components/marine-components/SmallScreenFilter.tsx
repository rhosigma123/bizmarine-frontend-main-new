import { BiFilter } from "react-icons/bi";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SmallScreenFilter = () => {
  const side = "bottom";
  return (
    <Sheet>
      <SheetTrigger className="flex h-full lg:hidden items-center gap-3 border rounded-md px-3 py-1 bg-white">
        Filters <BiFilter />
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SmallScreenFilter;
