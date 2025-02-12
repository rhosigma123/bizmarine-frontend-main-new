"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Brands, BrandsCardProps } from "@/types/interface";
import { BASE_URL } from "@/config/config";

const BrandsCard: React.FC<BrandsCardProps> = ({ data }) => {
  const params = useParams<{ id: string }>();

  return (
    <Link
      href={`/brands/${data.slug}`}
      className="grid gap-5 hover:shadow-md p-3 md:p-5 justify-items-center w-full hover:scale-105 transition-all ease-linear hover:border bg-white"
    >
      <Image
        className="w-full h-[150px] object-contain"
        src={`${BASE_URL}${data.image || ""}`}
        width={250}
        height={250}
        alt={data.alt_tag}
      />
      <h3 className="capitalize text-center text-primary font-semibold text-xl">
        {data.name}
      </h3>
    </Link>
  );
};

export default BrandsCard;
