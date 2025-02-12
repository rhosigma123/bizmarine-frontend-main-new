"use client";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import React, { CSSProperties, useContext, useState } from "react";
import { Grid, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeCollectionsCard from "./HomeCollectionsCard";
import { HomeContext } from "@/app/Context/HomeContext";

interface CustomCSSProperties extends CSSProperties {
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
  "--swiper-navigation-size"?: string;
  "--swiper-navigation-backGround"?: string;
}
export default function CategorySlider() {
  const swiperStyle: CustomCSSProperties = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
    "--swiper-navigation-size": "20px",
    "--swiper-navigation-backGround": "#fff",
  };

  const data = useContext(HomeContext);

  return (
    <>
      <Swiper
        slidesPerView={6}
        navigation={true}
        modules={[Grid, Navigation]}
        grid={{
          rows: 2,
          fill: "row",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={30}
        className="mySwiper"
        style={swiperStyle}
      >
        {data?.category.map((category, index) => (
          <SwiperSlide key={index}>
            <HomeCollectionsCard data={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
