import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProductGridCard from "./ProductGridCard";

import { FilterSectionType } from "@/types/interface";



function ProductFIlrterSection({title,cardcss}:FilterSectionType) {
  return (
    <section className="w-full relative h-auto flex flex-col gap-14 py-10 biz__container">
      <section className="w-full relative h-auto border-b  flex gap-5 sm:flex-row flex-col items-center justify-between ">
        <h2 className="  text-lg md:text2xl lg:text-3xl font-semibold uppercase text-primary self-start md:self-center">
                {title}
        </h2>

        <ul className="w-fit relative h-auto flex  items-center self-end md:self-center gap-5  ">
          <li className="w-fit relative h-auto py-2 border-b border-primary text-nowrap ">
            New Arrival
          </li>
          <li className="w-fit relative h-auto py-2 border-b border-primary ">
            Featured
          </li>
          <li className="w-fit relative h-auto py-2 border-b border-primary ">
            Popular
          </li>
          <li className="w-full relative h-auto flex items-center gap-4">
            <IoIosArrowBack className="text-[20px]  text-primary " />
            <IoIosArrowForward className="text-[20px]  text-primary " />
          </li>
        </ul>
      </section>

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        modules={[Pagination]}
        className="mySwiper w-full relative h-atuo"
      >
        <SwiperSlide className="max-w-fit relative h-auto flex items-center justify-center">
          <ProductGridCard data={[]}  css={cardcss} />
        </SwiperSlide>
        <SwiperSlide className="max-w-fit relative h-auto flex items-center justify-center">
          <ProductGridCard data={[]}   css={cardcss} />
        </SwiperSlide>
        <SwiperSlide className="max-w-fit relative h-auto flex items-center justify-center">
          <ProductGridCard data={[]} css={cardcss} />
        </SwiperSlide>
        <SwiperSlide className="max-w-fit relative h-auto flex items-center justify-center">
          <ProductGridCard data={[]}  css={cardcss}/>
        </SwiperSlide>
        <SwiperSlide className="max-w-fit relative h-auto flex items-center justify-center">
          <ProductGridCard data={[]}  css={cardcss}/>
        </SwiperSlide>
        <SwiperSlide className="max-w-fit relative h-auto flex items-center justify-center">
          <ProductGridCard data={[]}  css={cardcss}/>
        </SwiperSlide>
        <SwiperSlide className="max-w-fit relative h-auto flex items-center justify-center">
          <ProductGridCard data={[]}  css={cardcss}/>
        </SwiperSlide>
        <SwiperSlide className="max-w-fit relative h-auto flex items-center justify-center">
          <ProductGridCard data={[]}  css={cardcss}/>
        </SwiperSlide>
        <SwiperSlide className="max-w-fit relative h-auto flex items-center justify-center">
          <ProductGridCard data={[]}  css={cardcss}/>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default ProductFIlrterSection;
