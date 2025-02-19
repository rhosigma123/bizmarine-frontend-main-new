"use client";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import ProductGridCard from "@/components/marine-components/Products/ProductGridCard";
import MarineShopbanner from "../Home/MarineShopbanner";
import { useWishlist } from "@/app/Context/WishlistContext";
import Link from "next/link";
// import WhishlistCard from "../wishlist/WishlistCard";
import WishlistCard from "../wishlist/WishlistCard";

function WishlistSection() {
  const { allwishlist, removeFromWishlist } = useWishlist();

  console.log(allwishlist,"odklfhkldhfksfklh")

  return (
    <>
      {allwishlist.length <= 0 ? (
        <div className="w-full relative flex-col py-20 h-auto flex items-center justify-center gap-6 ">
          <h1 className=" text-3xl lg:text-5xl text-primary font-medium ">
            Your Wishlist Is Empty
          </h1>
          <Link
            href={"/products"}
            className="text-base  font-medium text-white bg-primary  rounded-lg w-fit px-10 py-2 
          text-center"
          >
            Products
          </Link>
        </div>
      ) : (
        <section className="w-full biz__container relative h-auto flex flex-col items-start gap-10 md:gap-10 py-10 md:py-20">
          <span className="w-full relative h-auto border-b py-3 flex items-center justify-between ">
            <h2 className="text-3xl font-medium text-primary uppercase flex items-center gap-4 ">
              MY Whishlist
              <p className="text-base font-medium text-secondary ">
                10 Products
              </p>
            </h2>

            <BsThreeDots className="text-[20px] text-primary cursor-pointer" />
          </span>

          <section className="w-full relative h-fit grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ">
            {/* {allwishlist.map((item, index) => (
              <WishlistCard data={item} key={index} />
            ))} */}
          </section>

          <MarineShopbanner />
        </section>
      )}
    </>
  );
}

export default WishlistSection;
