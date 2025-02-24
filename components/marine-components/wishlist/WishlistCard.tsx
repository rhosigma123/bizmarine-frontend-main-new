"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BASE_URL } from "@/config/config";
import { wishlistinterface } from "@/types/interface";
import WishlistAddtoCard from "./WishlistAddtoCardbtn";
import { BsFillPatchCheckFill } from "react-icons/bs";
import NewProductGridCard from "../Products/NewProductGridCard";


const WishlistCard: React.FC<wishlistinterface> = ({data}) => {
  return (
    <div className="group bg-white p-2 md:p-3 justify-items-center border rounded-md grid gap-2 h-auto md:gap-5">
      <Link
        className="grid gap-2 md:gap-5 justify-items-center h-fit"
        href={`/products/${data.slug}`}
      >
        <Image
          className={` w-full p-1 relative  border rounded-md max-w-full object-contain h-[150px] md:h-[200px] `}
          src={`${BASE_URL}${data.image || ""}`}
          // src="/Drone-image.png"
          width={100}
          height={100}
          alt={data.alt_tag||""}
        />
        <div className="w-full relative h-auto flex flex-col items-start gap-1">
          <h3 className=" text-sm md:text-base leading-5 line-clamp-3 font-medium text-foreground">
            {data.name}
          </h3>
          {data?.price && (
            <span className="w-full relative flex items-center justify-center gap-4">
              <p className="text-2xl font-meidum text-primary  ">
                $ {data.price}
              </p>

              {/* {wishlist && (
                <BsFillPatchCheckFill
                  className={`text-[20px] text-primary  `}
                />
              )} */}
            </span>
          )}
        </div>
      </Link>

      <WishlistAddtoCard  product={data}  />
    </div>
  );
};

export default WishlistCard;
