"use client";
import { HiOutlineShoppingBag } from "react-icons/hi";
import React, { useContext } from "react";
import Link from "next/link";
import { CartContext } from "@/app/Context/CartContext";

const CartBtn: React.FC = () => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <Link href={"/cart"} className="relative flex gap-1 items-end">
      <HiOutlineShoppingBag className="text-4xl font-thin" />
      <p className="text-[#f5f5f5] text-sm">Shopping Cart</p>
      {cartItemCount > 0 && (
        <span className="absolute -top-3 left-3 bg-red-600 rounded-full w-5 h-5 text-white flex items-center justify-center text-sm">
          {cartItemCount}
        </span>
      )}
      <span className="hidden md:block text-xl font-semibold">Cart</span>
    </Link>
  );
};

export default CartBtn;
