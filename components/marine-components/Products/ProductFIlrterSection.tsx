import React, { useContext } from "react";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProductGridCard from "./ProductGridCard";
import { FilterSectionType } from "@/types/interface";
import MarineShopbanner from "../Home/MarineShopbanner";
import { HomeContext } from "@/app/Context/HomeContext";
import NewProductGridCard from "./NewProductGridCard";

function ProductFIlrterSection({
  title,
  cardcss,
  currentfilter,
  setcurrentfilter,
}: FilterSectionType) {
  const data = useContext(HomeContext);

  return (
    <>
      {data?.products && (
        <section className="w-full reltive flex flex-col h-auto gap-10  py-10 ">
          <section className="w-full relative h-auto flex flex-col gap-10  biz__container">
            <section className="w-full relative h-auto border-b  flex gap-5 sm:flex-row flex-col items-center justify-between ">
              <h2 className="  text-lg md:text2xl lg:text-3xl font-semibold uppercase text-primary self-start md:self-center">
                {title}
              </h2>

              <ul className="w-fit relative h-auto flex  items-center self-end md:self-center gap-5  ">
                <li
                  className={`w-fit relative h-auto py-2 border-b  text-nowrap ${
                    currentfilter.newarrival
                      ? "border-primary"
                      : "border-transparent"
                  }  `}
                  onClick={() =>
                    setcurrentfilter((prev) => ({
                      ...prev,
                      newarrival: true,
                      featured: false,
                      popular: false,
                    }))
                  }
                >
                  New Arrival
                </li>
                <li
                  className={`w-fit relative h-auto py-2 border-b  text-nowrap ${
                    currentfilter.featured
                      ? "border-primary"
                      : "border-transparent"
                  } `}
                  onClick={() =>
                    setcurrentfilter((prev) => ({
                      ...prev,
                      newarrival: false,
                      featured: true,
                      popular: false,
                    }))
                  }
                >
                  Featured
                </li>
                <li
                  className={`w-fit relative h-auto py-2 border-b  text-nowrap ${
                    currentfilter.popular
                      ? "border-primary"
                      : "border-transparent"
                  } `}
                  onClick={() =>
                    setcurrentfilter((prev) => ({
                      ...prev,
                      newarrival: false,
                      featured: false,
                      popular: true,
                    }))
                  }
                >
                  Popular
                </li>
                <li className="w-full relative h-auto flex items-center gap-4">
                  <IoIosArrowBack
                    className="text-[20px]  text-primary "
                    onClick={() => {}}
                  />
                  <IoIosArrowForward
                    className="text-[20px]  text-primary "
                    onClick={() => {}}
                  />
                </li>
              </ul>
            </section>

            <Swiper
              slidesPerView={"auto"}
              spaceBetween={20}
              modules={[Pagination]}
              className="mySwiper w-full relative h-atuo"
            >
              {data?.products?.map((item, index) => (
                <SwiperSlide
                  className="max-w-fit relative h-full flex items-center justify-center"
                  key={index}
                >
                  <NewProductGridCard
                    data={item}
                    css={cardcss}
                    wishlist={false}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <MarineShopbanner />
        </section>
      )}
    </>
  );
}

export default ProductFIlrterSection;
