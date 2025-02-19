"use client";
import { HiOutlineShoppingBag } from "react-icons/hi";
import React, { useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/app/Context/CartContext";
import { IoCartOutline } from "react-icons/io5";


const CartBtn: React.FC = () => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <Link href={"/cart"} className="relative flex gap-1 items-end">
      <IoCartOutline className=" text-[35px] md:text-[40px] text-white" />
      {cartItemCount > 0 && (
        <span className="absolute -top-2 left-6 bg-primary rounded-full w-5 h-5 text-white flex items-center justify-center text-sm">
          {cartItemCount}
        </span>
      )}
    </Link>
  );
};

export default CartBtn;
