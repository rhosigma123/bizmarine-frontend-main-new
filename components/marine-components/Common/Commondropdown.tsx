import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface ComnmonDropdown {
  children: React.ReactNode;
  title: string;
  actions: string[];
  dispatchmethod: React.Dispatch<{
    type: string;
    payload?: { name?: string };
  }>;
}

function Commondropdown({
  title,
  children,
  actions,
  dispatchmethod,
}: ComnmonDropdown) {
  const handleDeleteAll = () => {
    dispatchmethod({ type: "delete_all" });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-fit relative h-auto flex">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-primary  font-medium text-base ">
          {title}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {actions.map((item, index) => (
          <DropdownMenuItem
            className="text-medium text-foreground cursor-pointer px-3 py-2 rounded-md hover:bg-lightgray"
            key={index}
            onClick={handleDeleteAll}
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Commondropdown;
