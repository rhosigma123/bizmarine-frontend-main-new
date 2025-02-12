import { BsSearch } from "react-icons/bs";
import React from "react";
import { Input } from "../ui/input";

const SearchField = (props: any) => {
  return (
    <div
      className={`${props.className} relative rounded-full h-[45px] flex border-2 border-primary`}
    >
      <Input
        className="rounded-l-full h-full text-sm bg-white"
        type="search"
        placeholder="Search here..."
      />
      <span className="bg-primary border rounded-r-full px-5 flex items-center justify-center">
        <BsSearch className="text-white text-xl" />
      </span>
    </div>
  );
};

export default SearchField;
