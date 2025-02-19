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

interface SortViewProps {
  toggleGridHandler: () => void;
  toggleListHandler: () => void;
  listView: boolean;
  gridView: boolean;
}

const SortView: React.FC<SortViewProps> = ({
  toggleGridHandler,
  toggleListHandler,
  listView,
  gridView,
}) => {
  return (
    <div className="flex items-center gap-5 justify-between bg-secondary/80 p-3 md:py-3 md:px-5 rounded-md">
      <span className="hidden md:flex gap-2 items-center"></span>
      <span className="w-fit  relative h-auto flex items-center gap-4">
        <SmallScreenFilter />
        <Select>
          <SelectTrigger className="w-[130px] md:w-[180px] bg-white">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="text-primary font-bold">
                Fruits
              </SelectLabel>
              <SelectItem value="apple" className="text-secondary ">
                Apple
              </SelectItem>
              <SelectItem value="banana" className="text-secondary ">
                Banana
              </SelectItem>
              <SelectItem value="blueberry" className="text-secondary ">
                Blueberry
              </SelectItem>
              <SelectItem value="grapes" className="text-secondary ">
                Grapes
              </SelectItem>
              <SelectItem value="pineapple" className="text-secondary ">
                Pineapple
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </span>
    </div>
  );
};

export default SortView;
