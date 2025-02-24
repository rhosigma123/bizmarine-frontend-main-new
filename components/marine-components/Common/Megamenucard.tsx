import React from "react";
import Image from "next/image";
import { BASE_URL } from "@/config/config";
import Link from "next/link";

type MegaMenuCardtype={
    image:string,
    title:string,
    description:string,
    slug:string
}

function Megamenucard({image,title, description ,slug}:MegaMenuCardtype) {
  return (
    <Link href={`/products/${slug}`} className=" w-[200px]   relative h-[200px]  flex flex-col gap-1 bg-lightgray p-2 rounded-md">
      <Image
        src={`${BASE_URL}${image || ""}`}
        alt={title}
        height={300}
        width={300}
        className="   h-[150px] border p-1 w-full relative rounded-lg  cursor-pointer"
      />
      <h2 className=" text-sm md:text-base  line-clamp-2 font-medium text-primary  text-center">
        {title}
      </h2>
    </Link>
  );
}

export default Megamenucard;
