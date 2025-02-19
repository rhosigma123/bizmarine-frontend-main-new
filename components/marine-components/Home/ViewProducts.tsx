import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { ViewproductCard } from "@/types/interface";
import Link from "next/link";



function ViewProducts({image}:ViewproductCard) {
  return (
    <section className=" h-full relative w-full border rounded-xl    ">
      <Image
        src={image}
        alt="viewProductimage"
        height={700}
        width={700}
        className="
        w-full  h-full object-cover absolute top-0 left-0 bottom-0 "
      />

      <div className="w-full relative  h-full  grid lg:grid-cols-2 gap-4 px-10 py-5  ">
        <span className="w-full relative h-auto flex items-start justify-center flex-col gap-1">
          <p className="w-full relative h-auto mix-blend-multiply  text-lg text-secondary line-clamp-3 ">
            {" "}
            Unique application needs within their respective industries.
          </p>

          <h2 className="text-3xl  relative font-lg font-medium text-secondary">
            Control Systems
          </h2>

          <Link href={"/products"} className="w-fit mt-3 relative h-auto flex items-center px-5 py-2 rounded-lg bg-primary  cursor-pointer hover:bg-white border border-transparent hover:border-primary hover:text-primary text-white">
            View Details
          </Link>
        </span>
      </div>
    </section>
  );
}

export default ViewProducts;
