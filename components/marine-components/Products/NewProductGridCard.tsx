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
function NewProductGridCard({ data, css ,imagecs }: ProductGridCardProps) {
  return (
    <div
      className={` group ${
        css ? css : "max-w-[300px]"
      }  h-full bg-white p-2 md:p-3 justify-items-center border rounded-md grid gap-2 sm:gap-3`}
    >
      <Link
        className="grid gap-3 w-full md:gap-5 justify-items-start"
        href={`/products/${data.slug}`}
      >
        <Image
          src={`${BASE_URL}${data.image || "/"}`}
          alt={data.alt_tag}
          height={500}
          width={500}
          className={`w-full p-1 relative  border rounded-md max-w-full object-contain  ${ imagecs ? imagecs : " h-[150px] md:h-[200px]"} `}
        />
        <div className="w-auto relative h-auto flex flex-col gap-2 items-start justify-between ">
          <h2 className=" text-secondary text-sm md:text-base line-clamp-2 leading-5  font-bold text-wrap">
            {data.name}
          </h2>
          <span className="w-full relative h-auto flex items-center gap-2  text-primary ">
            {/* from  */}
            {/* <p className="text-primary text-semibold text-2xl ">$ 89</p> -{" "} */}
            {/* to */}
            <p className="text-primary text-semibold text-base md:text-xl lg:text-2xl">
              {/* $ {data.price} */}
              $ 90 - 90
            </p>
          </span>
        </div>
      </Link>
      <AddToCartBtn className="my-button-class w-full" product={data} />
    </div>
  );
}

export default NewProductGridCard;
