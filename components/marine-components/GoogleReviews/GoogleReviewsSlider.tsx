"use client";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import React, { CSSProperties, useContext } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GoolgeReviewsCard from "./GoolgeReviewsCard";
import { HomeContext } from "@/app/Context/HomeContext";

interface CustomCSSProperties extends CSSProperties {
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
  "--swiper-navigation-size"?: string;
  "--swiper-navigation-backGround"?: string;
}
const GoogleReviewsSlider = () => {
  const swiperStyle: CustomCSSProperties = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
    "--swiper-navigation-size": "20px",
    "--swiper-navigation-backGround": "#4e8bf0",
  };
  const data = useContext(HomeContext);

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper googleReviewSwiper   px-0 lg:px-[30px]"
      style={swiperStyle}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
    >
      {data?.testimonials.map((testimonials, index) => (
        <SwiperSlide key={index}>
          <GoolgeReviewsCard data={testimonials} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GoogleReviewsSlider;
