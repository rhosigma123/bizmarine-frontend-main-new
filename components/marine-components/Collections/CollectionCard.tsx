"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CategoryProps } from "@/types/interface";
import { BASE_URL } from "@/config/config";

const CollectionCard: React.FC<CategoryProps> = ({ data }) => {
  return (
    <Link
      href={`/collection/${data.slug}`}
      className="group w-full grid bg-white border-l p-5 gap-5 justify-items-center"
    >
      <Image
        className="group-hover:scale-110 transition-all ease-linear w-full h-[150px] object-contain"
        src={`${BASE_URL}${data.image || ""}`}
        width={250}
        height={250}
        alt={data.alt_tag}
      />
      <h3 className="capitalize text-primary text-center font-bold text-xl">
        {data.name}
      </h3>
    </Link>
  );
};

export default CollectionCard;
