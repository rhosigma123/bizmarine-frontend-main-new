import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { ViewproductCard } from "@/types/interface";
import Link from "next/link";
import { BASE_URL } from "@/config/config";



function ViewProducts({image,title,subtitle,btntitle,btnurl}:ViewproductCard) {
  return (
    <section className=" h-full relative w-full border   rounded-xl  ">
      <Image
        src={`${BASE_URL}${image}`||""}
        alt="viewProductimage"
        height={700}
        width={700}
        className="
        w-full  h-full object-cover absolute top-0 left-0 bottom-0 "
      />

      <div className="w-full relative  h-full  grid lg:grid-cols-2 gap-4 px-4 md:px-5 lg:px-10 py-3 md:py-5 bg-gradient-to-r from-black from-30%  to-transparent overflow-hidden rounded-xl ">
        <span className="w-full relative h-auto flex items-start justify-center flex-col gap-1 overflow-hidden rounded-xl  ">
          <p className="w-full relative h-auto   text-white  text-sm sm:text-base md:text-lg text-secondary line-clamp-3 ">
            {" "}
            {subtitle}
          </p>

          <h2 className=" text-xl md:text-2xl lg:text-3xl text-white  line-clamp-2 relative font-lg font-semibold text-secondary">
            {title}
          </h2>

          <Link href={btnurl} className="w-fit mt-2 md:mt-3 relative h-auto flex items-center px-3 py-1 md:px-5 md:py-2 rounded-lg bg-primary  cursor-pointer hover:bg-white border border-transparent hover:border-primary hover:text-primary text-white">
            View Detail
          </Link>
        </span>
      </div>
    </section>
  );
}

export default ViewProducts;
