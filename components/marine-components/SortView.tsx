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
      <span className="hidden md:flex gap-2 items-center">
        <BsFillGridFill
          title="Grid View"
          onClick={toggleGridHandler}
          className={`cursor-pointer text-2xl ${
            gridView ? "text-primary" : "text-secondary-foreground"
          }`}
        />
        <FaList
          title="List View"
          onClick={toggleListHandler}
          className={`cursor-pointer text-2xl ${
            listView ? "text-primary" : "text-secondary-foreground"
          }`}
        />
      </span>
      <SmallScreenFilter />
      <Select>
        <SelectTrigger className="w-[130px] md:w-[180px] bg-white">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortView;
