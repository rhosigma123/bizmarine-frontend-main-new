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
    // <div className="w-full relative h-full p-3 flex flex-col gap-3 rounded-md bg-white border   ">
    //   <Link
    //     href={`/products/${data.slug}`}
    //     className="w-full relative h-auto p-3 flex flex-col gap-3  "
    //   >
    //     <Swiper
    //       pagination={{
    //         dynamicBullets: true,
    //       }}
    //       modules={[Pagination]}
    //       className="mySwiper w-full relative h-auto "
    //     >
    //       <SwiperSlide className="w-full relative h-full ">
    //         <Image
    //           src="/product-image.png"
    //           alt={data.alt_tag}
    //           height={500}
    //           width={500}
    //           className="w-full p-3 relative h-[150px] object-contain "
    //         />
    //       </SwiperSlide>
    //       <SwiperSlide className="w-full relative h-full ">
    //         <Image
    //           src="/product-image.png"
    //           alt={data.alt_tag}
    //           height={500}
    //           width={500}
    //           className="w-full p-3 relative h-[150px] object-contain "
    //         />
    //       </SwiperSlide>
    //     </Swiper>

    //     <div className="w-full relative h-auto flex flex-col gap-1 items-start justify-between ">
    //       <h2 className=" text-secondary text-lg leading-5 line-clamp-3 font-bold">
    //         {data.name}
    //       </h2>
    //       <span className="w-full relative h-auto flex items-center gap-2  text-primary ">
    //         {/* from  */}
    //         <p className="text-primary text-semibold text-2xl ">$ 89</p> -{" "}
    //         {/* to */}
    //         <p className="text-primary text-semibold text-2xl">$ 80</p>
    //       </span>

    //       {/* <span className="w-full relative gap-4 h-auto flex items-center justify-between ">
    //             <button className="w-full relative py-1 px-3 rounded-full bg-primary text-white hover:text-primary hover:bg-white border border-primary flex items-senter justify-center cursor-pointer">Add to Cart</button>
    //             <span className="w-fit relative h-fit rounded-full bg-heartbg p-2">
    //                 <CiHeart className="text-[25px] text-black cursor-pointer "/>
    //             </span>
    //     </span> */}
    //     </div>
    //   </Link>
    //   <AddToCartBtn className="my-button-class w-full" product={data} />
    // </div>
    <div className="group bg-white p-2 md:p-3 justify-items-center border rounded-md grid gap-2 sm:gap-3">
      <Link
        className="grid gap-3 md:gap-5 justify-items-center"
        href={`/products/${data.slug}`}
      >
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full relative rounded-lg border h-auto "
        >
          <SwiperSlide className="w-full relative h-full ">
            <Image
              src="/product-image.png"
              alt={data.alt_tag}
              height={500}
              width={500}
              className="w-full p-3 relative   h-[200px] object-contain "
            />
          </SwiperSlide>
          <SwiperSlide className="w-full relative h-full ">
            <Image
              src="/product-image.png"
              alt={data.alt_tag}
              height={500}
              width={500}
              className="w-full p-3 relative h-[200px] object-contain "
            />
          </SwiperSlide>
        </Swiper>
        <div className="w-full relative h-auto flex flex-col gap-2 items-start justify-between ">
          <h2 className=" text-secondary text-lg leading-5 line-clamp-3 font-bold">
            {data.name}
          </h2>
          <span className="w-full relative h-auto flex items-center gap-2  text-primary ">
            {/* from  */}
            <p className="text-primary text-semibold text-3xl ">$ 89</p> -{" "}
            {/* to */}
            <p className="text-primary text-semibold text-3xl">$ 80</p>
          </span>
        </div>
      </Link>
      <AddToCartBtn className="my-button-class w-full" product={data} />
    </div>
  );
}

export default NewProductGridCard;
