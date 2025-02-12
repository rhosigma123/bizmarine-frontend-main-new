"use client";
import React from "react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FaChevronDown } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CheckBoxFilter = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="h-fit border-b pb-2"
    >
      <CollapsibleTrigger asChild className="mb-3 cursor-pointer ">
        <div className="flex items-center justify-between">
          <h3 className="my-2 text-secondary-foreground font-medium text-lg">
            Features
          </h3>
          <FaChevronDown
            className={`${
              isOpen ? "" : "-rotate-90"
            }  text-foreground/60 transition-all duration-200`}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="grid gap-2">
        <div className="flex gap-3 items-center">
          <Input type="checkbox" id="checkbox" className="h-3 w-3" />
          <Label
            htmlFor="checkbox"
            className="text-foreground/70 cursor-pointer text-sm font-medium"
          >
            Samsung
          </Label>
        </div>
        <div className="flex gap-3 items-center">
          <Input type="checkbox" id="checkbox" className="h-3 w-3" />
          <Label
            htmlFor="checkbox"
            className="text-foreground/70 cursor-pointer text-sm font-medium"
          >
            Samsung
          </Label>
        </div>
        <div className="flex gap-3 items-center">
          <Input type="checkbox" id="checkbox" className="h-3 w-3" />
          <Label
            htmlFor="checkbox"
            className="text-foreground/70 cursor-pointer text-sm font-medium"
          >
            Samsung
          </Label>
        </div>
        <div className="flex gap-3 items-center">
          <Input type="checkbox" id="checkbox" className="h-3 w-3" />
          <Label
            htmlFor="checkbox"
            className="text-foreground/70 cursor-pointer text-sm font-medium"
          >
            Samsung
          </Label>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CheckBoxFilter;
