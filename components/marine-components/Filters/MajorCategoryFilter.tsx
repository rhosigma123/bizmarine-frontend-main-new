"use client";
import { FaChevronDown } from "react-icons/fa";
import * as React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";


export default function CategoryCollapsibel({ data, name ,  }: any) {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="h-fit border-b pb-2"
    >
      <CollapsibleTrigger asChild className="mb-1 cursor-pointer">
        <div className="flex items-center justify-between">
          <h3 className="my-2 text-secondary-foreground font-medium text-lg">
            {name}
          </h3>
          <FaChevronDown
            className={`${
              isOpen ? "" : "-rotate-90"
            }  text-foreground/60 transition-all duration-200`}
          />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="grid gap-2 ">
        {data &&
          data.length > 0 &&
          data.map((item: any) => (
            <p
              key={item.id}
              className="text-foreground/70 cursor-pointer w-fit text-sm font-medium"
              
            >
              {item.name}
            </p>
          ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
