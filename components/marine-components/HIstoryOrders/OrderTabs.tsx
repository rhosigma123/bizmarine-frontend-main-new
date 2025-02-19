"use client";

import React from "react";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";
import HistoryCardSection from "./HistoryCardSection";
// import AddressCard from "./addressCard";
import AddressCard from "./AddressCard";
function OrderTabs() {
  const [Toggle, setToggle] = useState({
    history: true,
    address: false,
  });

  return (
    <section className="w-full relative flex  items-start flex-col gap-0">
      {/* tabs */}
      <div className="w-fit relative items-start justify-start border rounded-t-xl overflow-hidden px-2 py-3   ">
        <span
          className={`w-fit relative  text-base font-medium text-secondary px-4 border-r h-full   cursor-pointer ${
            Toggle.history ? " text-foreground" : "bg-transparent"
          } `}
          onClick={() =>
            setToggle((prev) => ({ ...prev, history: true, address: false }))
          }
        >
          Order History
        </span>
        <span
          className={`w-fit relative  text-base font-medium text-secondary px-4 h-full  cursor-pointer ${
            Toggle.address ? " text-foreground" : "bg-transparent"
          } `}
          onClick={() =>
            setToggle((prev) => ({ ...prev, history: false, address: true }))
          }
        >
          Addresses
        </span>
      </div>

      <div className="w-full relative border p-4  flex flex-col gap-4 ">
      {Toggle.history ? (
          <HistoryCardSection/>
        ) : (
          <section className="w-full relative h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 ">
            <AddressCard/>
            <AddressCard/>
            <AddressCard/>

          </section>
        )}

          
      
      </div>

      
    </section>
  );
}

export default OrderTabs;
