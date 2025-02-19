"use client";
import { BASE_URL } from "@/config/config";
import Link from "next/link";
import React from "react";
import { categorycard } from "@/types/interface";
import Image from "next/image";

function CategoryCard({ data }: categorycard) {
  return (
    <div className="group bg-white p-2 border md:p-5 justify-items-start rounded-md grid gap-1 w-full">
      <Link
        className="grid gap-3 md:gap-5  w-full h-full justify-items-center"
        href={`/collection/${data.slug}`}
      >
        <Image
          className=" transition-all border rounded-md ease-linear w-[100px] h-[100px] sm:w-full sm:h-[150px] object-contain"
          src={`${BASE_URL}${data.image || ""}`}
          // src={"/product-image.png"}
          width={100}
          height={100}
          alt={data.alt_tag}
        />
        <span className="w-full relative  mt-2 h-fit flex flex-col gap-1 px-2">
          <h3 className=" text-lg leading-5 line-clamp-3 font-semibold text-primary">
            {data.name}
          </h3>
          <p className="text-base mt-1 font-semibold text-foreground flex items-center justify-start gap-2 ">
            {" "}
            <p className="text-lg  font-medium text-foreground">
              Total Products :
            </p>{" "}
            {data.totalProducts}
          </p>
        </span>
      </Link>
    </div>
  );
}

export default CategoryCard;
