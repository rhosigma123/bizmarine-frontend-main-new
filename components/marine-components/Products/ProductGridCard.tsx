"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import AddToCartBtn from "../Cart/AddToCartBtn";
import { ProductGridCardProps, ProductsCardProps } from "@/types/interface";
import { BASE_URL } from "@/config/config";
const ProductGridCard: React.FC<ProductGridCardProps> = ({ data }) => {
  return (
    <div className="group bg-white p-2 md:p-3 justify-items-center border rounded-md grid gap-2 sm:gap-5">
      <Link
        className="grid gap-3 md:gap-5 justify-items-center"
        href={`/products/${data.slug}`}
      >
        <Image
          className="group-hover:scale-110 transition-all ease-linear w-[100px] h-[100px] sm:w-full sm:h-[150px] object-contain"
          src={`${BASE_URL}${data.image || ""}`}
          width={100}
          height={100}
          alt={data.alt_tag}
        />
        <h3 className=" text-lg leading-5 line-clamp-3 font-bold">
          {data.name}
        </h3>
      </Link>
      <AddToCartBtn className="my-button-class w-full" product={data} />
    </div>
  );
};

export default ProductGridCard;
