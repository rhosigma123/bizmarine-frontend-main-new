import { BsSearch } from "react-icons/bs";
import React from "react";
import { Input } from "../ui/input";

const SearchField = (props: any) => {
  return (
    <div
      className={`${props.className} relative rounded-lg h-[45px] flex border-2 border-primary`}
    >
      <Input
        className="  h-full text-sm rounded-r-none bg-white"
        type="search"
        placeholder="Search here..."
      />

      <span className="bg-primary  px-5 flex items-center justify-center w-[100px]">
        <BsSearch className="text-white text-xl" />
      </span>
    </div>
  );
};

export default SearchField;
