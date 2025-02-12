"use client";
import { BiCartDownload } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import AddToCartBtn from "../Cart/AddToCartBtn";
import { ProductListCardProps, ProductsCardProps } from "@/types/interface";
import { BASE_URL } from "@/config/config";

const ProductListCard: React.FC<ProductListCardProps> = ({ data }) => {
  return (
    <div className="group grid grid-cols-[150px_4fr] bg-white p-3 border rounded-lg items-center gap-x-5 gap-y-3">
      <Link className="row-span-2" href={`/products/${data.slug}`}>
        <Image
          className="group-hover:scale-110 transition-all ease-linear w-[150px] h-full object-contain "
          src={`${BASE_URL}${data.image || ""}`}
          width={150}
          height={150}
          alt={data.alt_tag}
        />
      </Link>
      <Link className="grid gap-2" href={`/products/${data.id}`}>
        <h3 className="text-base leading-5 line-clamp-2 font-bold">
          {data.name}
        </h3>
        <p className="text-sm line-clamp-3">{data.description}</p>
      </Link>
      <AddToCartBtn
        className="my-button-class w-fit justify-self-end"
        product={data}
      />
    </div>
  );
};

export default ProductListCard;
