import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import { ProductGridCardProps } from "@/types/interface";
import AddToCartBtn from "../Cart/AddToCartBtn";
import { BASE_URL } from "@/config/config";
function NewProductGridCard({ data }: ProductGridCardProps) {
  return (
    <div className="group bg-white p-2 md:p-3 justify-items-center border rounded-md grid gap-2 sm:gap-3">
      <Link
        className="grid gap-3 w-full md:gap-5 justify-items-start"
        href={`/products/${data.slug}`}
      >
        <Image
          src={`${BASE_URL}${data.image || ""}`}
          alt={data.alt_tag}
          height={500}
          width={500}
          className="w-full p-3 relative  border rounded-md h-[200px] object-contain "
        />
        <div className="w-auto relative h-auto flex flex-col gap-2 items-start justify-between ">
          <h2 className=" text-secondary text-lg leading-5 line-clamp-3 font-bold">
            {data.name}
          </h2>
          <span className="w-full relative h-auto flex items-center gap-2  text-primary ">
            {/* from  */}
            {/* <p className="text-primary text-semibold text-2xl ">$ 89</p> -{" "} */}
            {/* to */}
            <p className="text-primary text-semibold text-2xl">$ {data.price}</p>
          </span>
        </div>
      </Link>
      <AddToCartBtn className="my-button-class w-full" product={data} />
    </div>
  );
}

export default NewProductGridCard;
