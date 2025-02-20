"use client";
import React, { CSSProperties, useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductGridCard from "./ProductGridCard";
import NewProductGridCard from "./NewProductGridCard";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { HomeContext } from "@/app/Context/HomeContext";

interface CustomCSSProperties extends CSSProperties {
  "--swiper-navigation-color"?: string;
  "--swiper-pagination-color"?: string;
  "--swiper-navigation-size"?: string;
  "--swiper-navigation-backGround"?: string;
}

const ProductSlider = () => {
  const swiperStyle: CustomCSSProperties = {
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
    "--swiper-navigation-size": "20px",
    "--swiper-navigation-backGround": "#fff",
  };
  const data = useContext(HomeContext);
  console.log("Reading slider products data", data?.products);

  return (
    <>
    <Swiper
      slidesPerView={6}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
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
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
      loop={true}
      autoplay={{
        delay: 200,
        disableOnInteraction: false,
      }}
      className="mySwiper"
      style={swiperStyle}
    >
      {data?.products.map((products, index) => (
        <SwiperSlide key={index}>
          {/* <ProductGridCard data={products} /> */}
          <NewProductGridCard data={products} wishlist={false}/>
        </SwiperSlide>
      ))}
    </Swiper>

    

    </>
  );
};

export default ProductSlider;
