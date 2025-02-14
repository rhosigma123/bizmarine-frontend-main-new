"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import AddToCartBtn from "../Cart/AddToCartBtn";
import { ProductGridCardProps, ProductsCardProps } from "@/types/interface";
import { BASE_URL } from "@/config/config";
import { BsFillPatchCheckFill } from "react-icons/bs";
const ProductGridCard: React.FC<ProductGridCardProps> = ({
  data,
  css,
  wishlist,
}) => {
  return (
    <div className="group bg-white p-2 md:p-3 justify-items-center border rounded-md grid gap-2 sm:gap-5">
      <Link
        className="grid gap-3 md:gap-5 justify-items-center"
        href={`/products/${data.slug}`}
      >
        <Image
          className={`group-hover:scale-110 transition-all ease-linear w-[100px] sm:w-full  object-contain  ${
            css ? css : " sm:h-[150px] h-[100px]"
          } `}
          src={`${BASE_URL}${data.image || ""}`}
          width={100}
          height={100}
          alt={data.alt_tag}
        />
        <div className="w-full relative h-auto flex flex-col items-start gap-1">
          <h3 className=" text-lg leading-5 line-clamp-3 font-bold">
            {data.name}
          </h3>
          {data?.price && (
            <span className="w-full relative flex items-center justify-center gap-4">
              <p className="text-2xl font-meidum text-primary  ">
                $ {data.price}
              </p>

              {wishlist && (
                <BsFillPatchCheckFill className="text-[20px] text-primary " />
              )}
            </span>
          )}
        </div>
      </Link>
  
        <AddToCartBtn className="my-button-class w-full" product={data} />

    </div>
  );
};

export default ProductGridCard;
