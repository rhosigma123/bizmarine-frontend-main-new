import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddAdress from "../Common/AddAdress";
function AddressCard() {
  return (
    <section className="w-full p-5 rounded-lg gap-1 relatiove h-auto flex flex-col  border bg-lightgray">
      <span className="w-full relative h-auto flex  border-b   items-center pb-3 justify-between ">
        <h2 className="text-xl font-medium text-primary ">Address</h2>
        <AddAdress>
          <BsThreeDotsVertical className="text-[20px] cursor-pointer text-secondary" />
        </AddAdress>
      </span>

      <span className="w-full relative h-auto grid grid-cols-[1.5fr_2fr] gap-2">
        <p className="text-base font-medium text-foreground ">Name </p>
        <p className="text-sm font-medium text-foreground ">Ayan mansoor</p>
      </span>

      <span className="w-full relative h-auto grid grid-cols-[1.5fr_2fr] gap-2">
        <p className="text-base font-medium text-foreground ">Company </p>
        <p className="text-sm font-medium text-foreground ">Ayan mansoor</p>
      </span>

      <span className="w-full relative h-auto grid grid-cols-[1.5fr_2fr] gap-2">
        <p className="text-base font-medium text-foreground ">Street </p>
        <p className="text-sm font-medium text-foreground ">Ayan mansoor</p>
      </span>

      <span className="w-full relative h-auto grid grid-cols-[1.5fr_2fr] gap-2">
        <p className="text-base font-medium text-foreground ">City </p>
        <p className="text-sm font-medium text-foreground ">Ayan mansoor</p>
      </span>

      <span className="w-full relative h-auto grid grid-cols-[1.5fr_2fr] gap-2">
        <p className="text-base font-medium text-foreground ">
          Country/region{" "}
        </p>
        <p className="text-sm font-medium text-foreground ">Ayan mansoor</p>
      </span>

      <span className="w-full relative h-auto grid grid-cols-[1.5fr_2fr] gap-2">
        <p className="text-base font-medium text-foreground ">Phone </p>
        <p className="text-sm font-medium text-foreground ">Ayan mansoor</p>
      </span>
    </section>
  );
}

export default AddressCard;
