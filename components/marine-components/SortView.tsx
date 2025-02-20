import React, { useState } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { GrUnorderedList } from "react-icons/gr";
import { FaList } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
import SmallScreenFilter from "./SmallScreenFilter";
import { Products } from "@/types/interface";

interface SortViewProps {
  toggleListHandler: React.Dispatch<{
    type: string;
    payload?: { name?: string };
  }>; // Updated type
  data: Products[];
  brandData: any;
}

const SortView: React.FC<SortViewProps> = ({
  toggleListHandler,
  data,
  brandData,
}) => {
  const handleBrandChange = (brandName: string) => {
    toggleListHandler({
      type: "change_brand",
      payload: { name: brandName },
    });
  };

  return (
    <div className="flex items-center gap-5 justify-between bg-secondary/80 p-3 md:py-3 md:px-5 rounded-md">
      <span className="hidden md:flex gap-2 items-center"></span>
      <span className="w-fit relative h-auto flex items-center gap-4">
        <SmallScreenFilter />
        <Select onValueChange={handleBrandChange}>
          <SelectTrigger className="w-[130px] md:w-[180px] bg-white">
            <SelectValue placeholder="Select a brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-primary font-bold">
                Brands
              </SelectLabel>
              <SelectItem value={"all"} className="text-secondary">
                All
              </SelectItem>
              {brandData &&
                brandData.map((item:any, index:any) => (
                  <SelectItem
                    value={item.name}
                    className="text-secondary"
                    key={index}
                  >
                    {item.name}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </span>
    </div>
  );
};

export default SortView;
