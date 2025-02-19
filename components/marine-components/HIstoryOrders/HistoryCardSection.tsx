import React from "react";
import HistoryCard from "./HistoryCard";
import { CiSearch } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";

function HistoryCardSection() {
  return (
    <section className="w-full relative  flex flex-col gap-4 ">
      <div className="w-full relative h-auto items-start md:items-center flex-col sm:flex-row  justify-between flex  gap-3">
        {/* search bar */}

        <span className=" border bg-lightgray rounded-full   flex items-center">
          <input
            type="text"
            className=" h-auto py-2 px-5 
             w-full lg:w-[300px] xl:w-[400px] placeholder:text-secondary  rounded-l-full text-secondary "
            placeholder="Search"
          />
          <CiSearch className="text-[20px] text-foreground w-[50px]  " />
        </span>

        <button className="w-fit relative flex self-end items-center gap-2 rounded-full px-4 py-2 bg-primary text-white">
          <FiUpload className="text-[20px] text-white" />
          Export
        </button>
      </div>

      <section
        className="w-full relative h-auto hidden lg:flex border-b border-seco]
     pb-3 flex-col gap-5"
      >
        <div className="w-full relative h-auto grid  grid-cols-[.7fr_3.5fr_1.3fr_1.3fr_auto] justify-between gap-1">
          <p className="text-base font-medium text-secondary">Orders ID</p>
          <p className="text-base font-medium text-secondary">products</p>
          <p className="text-base font-medium text-secondary">Amount</p>
          <p className="text-base font-medium text-secondary">Date</p>
          <p className="text-base font-medium text-secondary">Actions</p>
        </div>
      </section>

      <section className="w-full relative h-auto grid lg:flex flex-col  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 ">
        {" "}
        <HistoryCard />
        <HistoryCard />
      </section>

      {/* history card */}
    </section>
  );
}

export default HistoryCardSection;
